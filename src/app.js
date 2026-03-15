const express = require("express");
const cors = require("cors");
const path = require("path");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const { errorHandler } = require("./middlewares/error.middleware");

// Route imports
const healthRoutes = require("./routes/health.routes");
const contactRoutes = require("./routes/contact.routes");
const newsletterRoutes = require("./routes/newsletter.routes");
const { ApiError } = require("./utils/apiError");

const app = express();

// GLOBAL MIDDLEWARES

// Security headers (Completely disabled for local dashboard testing)
// app.use(helmet({
//     contentSecurityPolicy: false
// }));

// Enable CORS
app.use(cors());

// Body parsing
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// HTTP request logging
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
} else {
    // In production, keep Morgan but log less verbosely as to not crowd logs.
    app.use(morgan("tiny"));
}

// Rate Limiting (Prevent spam)
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: "Too many requests from this IP, please try again after 15 minutes"
});

// Apply rate limiting only to API routes
app.use("/api/", apiLimiter);

// 2. API ROUTES
const API_PREFIX = "/api/v1";

app.use(`${API_PREFIX}/health`, healthRoutes);
app.use(`${API_PREFIX}/contact`, contactRoutes);
app.use(`${API_PREFIX}/newsletter`, newsletterRoutes);

// 3. STATIC FRONTEND SERVING
// Serve static frontend files from 'aasw-pro' directory
const frontendPath = path.join(__dirname, "..", "aasw-pro");
app.use(express.static(frontendPath));

// Catch-all route to serve the main index.html for unknown routes (useful if using client-side routing)
app.use((req, res, next) => {
    // If it's an API route that wasn't found, send JSON 404 instead of HTML
    if (req.originalUrl.startsWith("/api/")) {
        return next(new ApiError(404, "API route not found"));
    }
    res.sendFile(path.join(frontendPath, "index.html"));
});

// 4. GLOBAL ERROR HANDLER
app.use(errorHandler);

module.exports = app;
