const { catchAsync } = require("../utils/catchAsync");
const { ApiResponse } = require("../utils/apiResponse");

const checkHealth = catchAsync(async (req, res) => {
    return res.status(200).json(
        new ApiResponse(
            200,
            {
                status: "active",
                timestamp: new Date().toISOString(),
                uptime: process.uptime()
            },
            "AASW Foundation API is running smoothly."
        )
    );
});

module.exports = { checkHealth };
