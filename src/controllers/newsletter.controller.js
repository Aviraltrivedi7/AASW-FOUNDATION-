const fs = require("fs");
const path = require("path");
const { catchAsync } = require("../utils/catchAsync");
const { ApiResponse } = require("../utils/apiResponse");

const SUBSCRIBERS_FILE = path.join(__dirname, "..", "..", "subscribers.json");

// Helper: read existing subscribers
function readSubscribers() {
    try {
        if (fs.existsSync(SUBSCRIBERS_FILE)) {
            const data = fs.readFileSync(SUBSCRIBERS_FILE, "utf-8");
            return JSON.parse(data);
        }
    } catch (err) {
        console.error("[Newsletter] Error reading subscribers file:", err.message);
    }
    return { subscribers: [] };
}

// Helper: write subscribers to file
function writeSubscribers(data) {
    fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify(data, null, 2), "utf-8");
}

const subscribeNewsletter = catchAsync(async (req, res) => {
    const { email } = req.body;

    const data = readSubscribers();

    // Check for duplicate
    const alreadyExists = data.subscribers.some(s => s.email === email);
    if (alreadyExists) {
        return res.status(409).json(
            new ApiResponse(409, { email }, "You are already subscribed to our newsletter.")
        );
    }

    // Add new subscriber with timestamp
    data.subscribers.push({
        email,
        subscribedAt: new Date().toISOString()
    });

    writeSubscribers(data);

    console.log(`[Newsletter] New subscriber: ${email} (Total: ${data.subscribers.length})`);

    return res.status(200).json(
        new ApiResponse(
            200,
            { email },
            "Successfully subscribed to the newsletter!"
        )
    );
});

module.exports = { subscribeNewsletter };
