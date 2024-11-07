import React from 'react';
import { Button, Typography, Box } from '@mui/material'; // Removed Container import
import { useNavigate } from 'react-router-dom';
import './Feedback.css'; // Import the CSS file

const Feedback = () => {
  const navigate = useNavigate();

  const handleFeedbackClick = () => {
    // Redirect to feedback form page
    navigate('/feedback-form');
  };

  return (
    <Box className="feedback-container"> {/* Use Box for full-screen container */}
      <Typography variant="h4" gutterBottom>
        <strong>Node.js Web Module</strong>
      </Typography>
      
      <Typography variant="h6" gutterBottom className="feedback-heading">
        <strong>Feedback</strong>
      </Typography>

      <Typography variant="body1" paragraph>
      Dear User, <br /> Thank you for using our Node.js website. Your opinion is incredibly valuable to us, and we genuinely appreciate your time. To help us improve, we'd like to ask you a few questions about your experience. It will only take about 3 minutes, and your answers will not only assist us in enhancing the Virtual Labs for you but also for other users. Your feedback will guide us in making necessary improvements and ensuring that our platform meets your needs effectively. We truly value your insights and look forward to hearing from you!
      </Typography>

      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleFeedbackClick}
        className="feedback-button"
      >
        Share Your Experience
      </Button>

      <Box className="feedback-footer">
        <Typography variant="body2" color="textSecondary">
          Thanks for your time! <br />
          The Virtual Labs Team
        </Typography>
      </Box>
    </Box>
  );
};

export default Feedback;
