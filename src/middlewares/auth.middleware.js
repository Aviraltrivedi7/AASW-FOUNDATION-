const fs = require('fs');
const path = require('path');
const { ApiError } = require('../utils/apiError');

// Middleware to check if admin is logged in
const isAuthenticated = (req, res, next) => {
    if (req.session && req.session.adminId) {
        return next();
    }
    
    // If it's an API request, send JSON error
    if (req.originalUrl.startsWith('/admin/api')) {
        return next(new ApiError(401, "Not authorized to access this route"));
    }
    
    // For HTML pages, redirect to login
    res.redirect('/admin/login');
};

// Middleware to track unique visitors per page
const visitorTracker = (req, res, next) => {
    // Ignore static assets and API routes for visitor tracking
    const ext = path.extname(req.path);
    if (ext && ext !== '.html') return next();
    if (req.originalUrl.startsWith('/api/') || req.originalUrl.startsWith('/admin/api/') || req.originalUrl === '/admin/login') {
        return next();
    }

    try {
        const statsPath = path.join(process.cwd(), 'data', 'stats.json');
        
        let stats = { visitors: 0, pageViews: {} };
        if (fs.existsSync(statsPath)) {
            stats = JSON.parse(fs.readFileSync(statsPath, 'utf8'));
        }

        // Increment total visitors (dumb counter for simplicity, could be IP based)
        stats.visitors += 1;

        // Increment page specific views
        const page = req.path === '/' ? '/index.html' : req.path;
        stats.pageViews[page] = (stats.pageViews[page] || 0) + 1;

        fs.writeFileSync(statsPath, JSON.stringify(stats, null, 2));
    } catch (err) {
        // Silently fail visitor tracking if there's a file error so we don't block the request
        console.error("Error tracking visitor:", err);
    }
    
    next();
};

module.exports = { isAuthenticated, visitorTracker };
