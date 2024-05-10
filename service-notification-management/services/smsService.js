const axios = require('axios');

const sendSMS = async (recipientPhoneNo, message) => {
  try {
    const response = await axios.post('https://app.notify.lk/api/v1/send', {
        api_key: 'ieuqYgb8phcfsIH5mr1c',
        user_id:"27116",
        sender_id:"NotifyDEMO",
        message:message,
        to: `94${recipientPhoneNo.slice(-9)}`
    });
    console.log(response.data);
    return response.data; // Return the response from Notify.lk
  } catch (error) {
    console.error(error.response.data);
    res.status(500).send('Failed to send notification');
}
};

module.exports = {sendSMS };
