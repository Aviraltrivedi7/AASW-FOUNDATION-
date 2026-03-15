const { catchAsync } = require("../utils/catchAsync");
const { ApiResponse } = require("../utils/apiResponse");

const subscribeNewsletter = catchAsync(async (req, res) => {
    const { email } = req.body;

    // TODO: In a real production scenario, save this email to the database or directly to a service like Mailchimp
    
    console.log(`[Newsletter Subscription] New subscriber: ${email}`);

    return res.status(200).json(
        new ApiResponse(
            200,
            { email },
            "Successfully subscribed to the newsletter!"
        )
    );
});

module.exports = { subscribeNewsletter };
