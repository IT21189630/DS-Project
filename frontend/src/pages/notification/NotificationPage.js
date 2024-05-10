import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container, Box, Grid, RadioGroup, FormControlLabel, Radio } from '@mui/material';

function NotificationPage() {
  const [recipientPhoneNo, setRecipientPhoneNo] = useState('');
  const [message, setMessage] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');
  const [selectedEmailOption, setSelectedEmailOption] = useState('one');
  const [selectedSMSOption, setSelectedSMSOption] = useState('one');

  const handleSendSMS = async () => {
    try {
      if(selectedSMSOption == "one"){
      await axios.post('http://localhost:4003/learnup/api/notification/send-sms', { recipientPhoneNo, message });
      alert('SMS sent successfully!');
      }
      else{
        await axios.post('http://localhost:4003/learnup/api/notification/send-sms-all', { recipientPhoneNo, message });
        alert('SMS sent successfully!');
      }
    } catch (error) {
      console.error('Error sending SMS:', error);
    }
  };

  const handleSendEmail = async () => {
    try {
      if(selectedEmailOption == "one"){
      await axios.post('http://localhost:4003/learnup/api/notification/send-email', { recipientEmail, subject, text });
      alert('Email sent successfully!');
      }
      else{
        await axios.post('http://localhost:4003/learnup/api/notification/send-emails-all', { recipientEmail, subject, text });
        alert('Emails sent to all students successfully!');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };


  const handleEmailOptionChange = (event) => {
    setSelectedEmailOption(event.target.value);
  };

  const handleSMSOptionChange = (event) => {
    setSelectedSMSOption(event.target.value);
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom marginTop={4} marginBottom={4}>
        Send Notifications
      </Typography>
      <Typography align="center" marginBottom={2}>
      "Welcome, Admin! This is your control panel for managing notifications. 
      Stay informed and keep your users engaged by sending important updates via SMS and email. 
      Take charge of your communication strategy and ensure your messages reach the right audience at the right time."
      </Typography>
      <Button variant="contained" href="/admin/dashboard/notification/history" style={{ marginTop: 10, marginBottom: 30,backgroundColor:"#92e3a9"}}>
          <Typography color={'black'}>Notification History</Typography>
      </Button>
      <Grid container spacing={14}>
        <Grid item xs={6}>
            <Box  fullWidth>
                <Typography variant="h6" marginBottom={1}>Send SMS</Typography>
                <RadioGroup row value={selectedSMSOption} onChange={handleSMSOptionChange} style={{marginBottom:15}}>
                  <FormControlLabel value="one" control={<Radio />} label="Send One" />
                  <FormControlLabel value="all" control={<Radio />} label="Send All" />
                </RadioGroup>
                {selectedSMSOption == "one"?
                  <TextField
                  fullWidth
                  label="Enter Recipient Phone Number"
                  variant="outlined"
                  value={recipientPhoneNo}
                  onChange={(e) => setRecipientPhoneNo(e.target.value)}
                  />
                : null}
                
                <TextField
                fullWidth
                label="Enter SMS message"
                variant="outlined"
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ marginTop: '1rem' }}
                />
                <Button variant="contained" onClick={handleSendSMS} style={{ marginTop: '1rem', backgroundColor:"#92e3a9"}}>
                  <Typography color={'black'}>Send SMS</Typography>
                </Button>
            </Box>
        </Grid>
        <Grid item xs={6}>
            <Box  fullWidth>
                
                <Typography variant="h6" marginBottom={1}>Send Email</Typography>
                <RadioGroup row value={selectedEmailOption} onChange={handleEmailOptionChange} style={{marginBottom:15}}>
                  <FormControlLabel value="one" control={<Radio />} label="Send One" />
                  <FormControlLabel value="all" control={<Radio />} label="Send All" />
                </RadioGroup>
                {selectedEmailOption == "one"?
                <TextField
                fullWidth
                label="Enter recipient email"
                variant="outlined"
                type="email"
                value={recipientEmail}
                onChange={(e) => setRecipientEmail(e.target.value)}
                />
                : null}
                <TextField
                fullWidth
                label="Enter subject"
                variant="outlined"
                multiline
                rows={2}
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
                <Button variant="contained" onClick={handleSendEmail} style={{ marginTop: '1rem', backgroundColor:"#92e3a9" }}>
                  <Typography color={'black'}>Send Email</Typography>
                </Button>
            </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default NotificationPage;
