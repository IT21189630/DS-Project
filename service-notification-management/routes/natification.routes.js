const express = require("express");
const router = express.Router();
const { sendEmail } = require("../controllers/notification.controller");
const { sendSMS } = require("../controllers/notification.controller");
const { getNotificationHistory } = require("../controllers/notification.controller");

router.post("/send-email", sendEmail);
router.post("/send-sms", sendSMS);
router.get("/notification-history", getNotificationHistory);

module.exports = router;
