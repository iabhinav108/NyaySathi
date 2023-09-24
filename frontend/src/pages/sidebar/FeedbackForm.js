import React from 'react';
import { Box, TextField, Button, Container } from '@mui/material';
import Layout from './UserComponents/Layout';

function FeedbackForm() {
  // State to store user input
  const [subject, setSubject] = React.useState('');
  const [description, setDescription] = React.useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process and submit the feedback data as needed
    // You can send it to your backend or perform any other actions here
    console.log('Feedback submitted:', { subject, description });
    // Reset the form fields
    setSubject('');
    setDescription('');
  };

  return (
    <Layout>
      <Container maxWidth="sm">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: 9,
            paddingBottom: 6,
          }}
        >
          <h2>
            Hi! How satisfied are you with this website? What improvements
            would you like us to make?
          </h2>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Subject"
              variant="outlined"
              fullWidth
              margin="normal"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              margin="normal"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <Box textAlign="center" sx={{ marginTop: 2 }}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </Layout>
  );
}

export default FeedbackForm;
