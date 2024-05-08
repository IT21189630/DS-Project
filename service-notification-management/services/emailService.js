const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  // Your email configuration
  service: 'gmail',
  auth: {
    user: 'binodgayasri2001@gmail.com',
    pass: 'vmif cbxa ivey uvjk'
  }
});

const sendConfirmationEmail = async (userId, courseId) => {
  try {
    await transporter.sendMail({
      from: 'binodgayasri2001@gmail.com',
      to: 'binodhetti@gmail.com',
      subject: 'Enrollment Confirmation',
      text: `Dear user, you have successfully enrolled in course ${courseId}.`
    });
    console.log('Confirmation email sent');
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    throw error;
  }
};

const sendEmail = async (to, subject, text) => {
  try {
    await transporter.sendMail({
      from: 'binodgayasri2001@gmail.com',
      to: to,
      subject: subject,
      text: text
    });
    console.log('email sent');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

module.exports = {sendConfirmationEmail,  sendEmail}
