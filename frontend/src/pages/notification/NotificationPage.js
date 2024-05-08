import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container, Box, Grid } from '@mui/material';

function NotificationPage() {
  const [recipientPhoneNo, setRecipientPhoneNo] = useState('');
  const [message, setMessage] = useState('');

  const [recipientEmail, setRecipientEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');

  const handleSendSMS = async () => {
    try {
      await axios.post('http://localhost:4000/learnup/api/notification/send-sms', { recipientPhoneNo, message });
      alert('SMS sent successfully!');
    } catch (error) {
      console.error('Error sending SMS:', error);
    }
  };

  const handleSendEmail = async () => {
    try {
      await axios.post('http://localhost:4000/learnup/api/notification/send-email', { recipientEmail, subject, text });
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom marginTop={4} marginBottom={4}>
        Send Notifications
      </Typography>
      <Grid container spacing={14}>
        <Grid item xs={6}>
            <Box  fullWidth>
                <Typography variant="h6">Send SMS</Typography>
                <TextField
                fullWidth
                label="Enter Recipient Phone Number"
                variant="outlined"
                value={recipientPhoneNo}
                onChange={(e) => setRecipientPhoneNo(e.target.value)}
                />
                <TextField
                fullWidth
                label="Enter SMS message"
                variant="outlined"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ marginTop: '1rem' }}
                />
                <Button variant="contained" color="primary" onClick={handleSendSMS} style={{ marginTop: '1rem' }}>
                Send SMS
                </Button>
            </Box>
        </Grid>
        <Grid item xs={6}>
            <Box  fullWidth>
                <Typography variant="h6">Send Email</Typography>
                <TextField
                fullWidth
                label="Enter recipient email"
                variant="outlined"
                type="email"
                value={recipientEmail}
                onChange={(e) => setRecipientEmail(e.target.value)}
                />
                <TextField
                fullWidth
                label="Enter subject"
                variant="outlined"
                multiline
                rows={4}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                style={{ marginTop: '1rem' }}
                />
                <TextField
                fullWidth
                label="Enter email message"
                variant="outlined"
                multiline
                rows={4}
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{ marginTop: '1rem' }}
                />
                <Button variant="contained" color="primary" onClick={handleSendEmail} style={{ marginTop: '1rem' }}>
                Send Email
                </Button>
            </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default NotificationPage;
