const courseEnrollment = require('../models/enrollment');
const emailService = require('../services/emailService');
const smsService = require('../services/smsService');

const confirmEnrollment = async (req, res) => {
  try {
    // Assume request body contains enrollment details
    const { courseId, userId } = req.body;

    // Save enrollment details to the database
    const enrollment = new courseEnrollment({ courseId, userId });
    await enrollment.save();

    // Send confirmation SMS
    //await smsService.sendConfirmationSMS(courseId);

    // Send confirmation email
    await emailService.sendConfirmationEmail(userId, courseId);

    res.status(200).json({ message: 'Enrollment confirmed successfully' });
  } catch (error) {
    console.error('Error confirming enrollment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const sendEmail = async (req, res) => {
  try {
    // Assume request body contains enrollment details
    const { recipientEmail, subject, text } = req.body;

    // Send confirmation email
    await emailService.sendEmail(recipientEmail, subject, text);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const sendSMS = async (req, res) => {
  try {
    // Assume request body contains enrollment details
    const { to, message } = req.body;

    // Send confirmation email
    await smsService.sendSMS(to, message);

    res.status(200).json({ message: 'SMS sent successfully' });
  } catch (error) {
    console.error('Error sending sms:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {confirmEnrollment, sendEmail, sendSMS}
