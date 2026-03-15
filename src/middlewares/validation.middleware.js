const { ApiError } = require("../utils/apiError");

const validate = (schema) => (req, res, next) => {
    const { value, error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
        const errorMessages = error.details.map((detail) => detail.message);
        return next(new ApiError(400, "Validation Error", errorMessages));
    }

    Object.assign(req, value);
    return next();
};

module.exports = { validate };
