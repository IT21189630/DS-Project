const courseEnrollment = require('../models/enrollment');
const emailService = require('../services/emailService');
const smsService = require('../services/smsService');
const Notification = require('../models/notification');

const sendEmail = async (req, res) => {
  try {
    // Assume request body contains enrollment details
    const { recipientEmail, subject, text } = req.body;

    const newNotification = new Notification({
      message: text,
      recipient: recipientEmail,
      emailSubject: subject,
      notificationType: "email"
    });
  
    // Send confirmation email
    //await emailService.sendEmail(recipientEmail, subject, text);
    await newNotification.save()

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const sendSMS = async (req, res) => {
  try {
    // Assume request body contains enrollment details
    const { recipientPhoneNo, message } = req.body;

    const newNotification = new Notification({
      message: message,
      recipient: recipientPhoneNo,
      notificationType: "sms"
    });
  
    await newNotification.save()

    // Send confirmation email
   // await smsService.sendSMS(recipientPhoneNo, message);

    res.status(200).json({ message: 'SMS sent successfully' });
  } catch (error) {
    console.error('Error sending sms:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


// Controller to get notification history
const getNotificationHistory = async (req, res) => {
  try {
    // Fetch notification history from the database
    const notificationHistory = await Notification.find().sort({ dateTime: -1 });

    // Separate notifications into SMS and email history
    const emailHistory = notificationHistory.filter(notification => notification.notificationType === 'email');
    const smsHistory = notificationHistory.filter(notification => notification.notificationType === 'sms');

    
    
    res.status(200).json({ smsHistory, emailHistory });
  } catch (error) {
    console.error('Error fetching notification history:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {sendEmail, sendSMS, getNotificationHistory}
