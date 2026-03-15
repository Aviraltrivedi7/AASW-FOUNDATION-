const { catchAsync } = require("../utils/catchAsync");
const { ApiResponse } = require("../utils/apiResponse");
// const nodemailer = require("nodemailer"); // Ready for real implementation

const submitContact = catchAsync(async (req, res) => {
    const { name, email, subject, message } = req.body;

    // TODO: In a real production scenario, setup nodemailer here to send an email to the foundation
    // Example:
    // const transporter = nodemailer.createTransport({ ... });
    // await transporter.sendMail({ from: email, to: process.env.CONTACT_EMAIL, subject, text: message });

    console.log(`[Contact Submission] from ${name} (${email}): ${subject} - ${message}`);

    return res.status(200).json(
        new ApiResponse(
            200,
            { name, email },
            "Your message has been received successfully. We will get back to you soon."
        )
    );
});

module.exports = { submitContact };
