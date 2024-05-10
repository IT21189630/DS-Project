const express = require("express");
const router = express.Router();
const { sendEmail, sendEmailsAll, sendSMSAll } = require("../controllers/notification.controller");
const { sendSMS } = require("../controllers/notification.controller");
const { getNotificationHistory } = require("../controllers/notification.controller");

router.post("/send-email", sendEmail);
router.post("/send-emails-all", sendEmailsAll);
router.post("/send-sms", sendSMS);
router.post("/send-sms-all", sendSMSAll);
router.get("/notification-history", getNotificationHistory);

module.exports = router;
