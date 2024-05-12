import React, { useState, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Typography, Container, Box, List, ListItem, ListItemText, Button } from '@mui/material';

const MessageTemplateList = () => {
  const navigate = useNavigate();
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await axios.get('http://localhost:4003/learnup/api/notification/template-list');
        setTemplates(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching templat:', error);
        alert('Failed to fetch templates');
      }
    };
    fetchTemplates();
  }, []);

  const handleSendClick = (title, content) => {
    navigate('/admin/dashboard/notification/', { state: { title, content } });
  };

  return (
    <Container>
      <Typography variant="h5" align="center" gutterBottom>
        Templates
      </Typography>
      <Box mt={2} position="sticky" top={0} borderColor="primary.main" borderRadius={1} boxShadow={1} padding={1}>
        <List>
          {templates.map((template) => (
            <ListItem key={template._id}>
              <ListItemText 
                primary={template.title} 
                secondary={template.content} 
              />
              <Button 
                onClick={() => handleSendClick(template.title, template.content)}
   
                style={{backgroundColor:"#92e3a9", color:"black", marginLeft:15 }}
              >
                Send
              </Button>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
}

export default MessageTemplateList;
