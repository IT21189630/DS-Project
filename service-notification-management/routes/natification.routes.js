const express = require("express");
const router = express.Router();
const { confirmEnrollment } = require("../controllers/notification.controller");
const { sendEmail } = require("../controllers/notification.controller");
const { sendSMS } = require("../controllers/notification.controller");

router.post("/confirm-enrollment", confirmEnrollment);
router.post("/send-email", sendEmail);
router.post("/send-sms", sendSMS);


module.exports = router;
