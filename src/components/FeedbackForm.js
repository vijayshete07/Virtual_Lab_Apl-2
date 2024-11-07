import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material'; // Import Material-UI components
import './FeedbackForm.css'; // Import the CSS file

const FeedbackForm = () => {
  const [feedbackSent, setFeedbackSent] = useState(false); // State to manage feedback submission status

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setFeedbackSent(true); // Set feedbackSent to true to show the message
  };

  return (
    <Box className="feedback-form-container"> {/* Use Box for full-screen container */}
      <Typography variant="h4" gutterBottom>
        Feedback Form
      </Typography>

      <Typography variant="body1" paragraph>
        We appreciate your feedback! Please fill out the form below to share your thoughts about our Node.js web module.
      </Typography>

      {feedbackSent ? ( // Conditionally render based on feedbackSent state
        <Typography variant="body1" color="green">
          Thank you! Your feedback has been sent successfully.
        </Typography>
      ) : (
        <Box component="form" onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '600px' }}>
          <Typography variant="h6" gutterBottom>
            Your Experience
          </Typography>

          <textarea 
            placeholder="Please provide your feedback here..." 
            rows="4" 
            style={{ width: '100%', marginBottom: '20px' }}
            required // Make it required to fill
          />

          <Button 
            variant="contained" 
            color="primary" 
            type="submit"
          >
            Submit Feedback <br></br>
          </Button>
        </Box>
      )}

      <Box className="feedback-footer">
        <Typography variant="body2" color="textSecondary"><br></br>
          Thank you for your valuable feedback! <br />
          The Virtual Labs Team
        </Typography>
      </Box>
    </Box>
  );
};

export default FeedbackForm;
