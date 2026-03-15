const express = require("express");
const Joi = require("joi");
const { subscribeNewsletter } = require("../controllers/newsletter.controller");
const { validate } = require("../middlewares/validation.middleware");

const router = express.Router();

const newsletterSchema = Joi.object({
    email: Joi.string().email().required(),
});

router.post("/", validate(newsletterSchema), subscribeNewsletter);

module.exports = router;
