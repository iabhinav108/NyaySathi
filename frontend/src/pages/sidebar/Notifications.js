import React from 'react';
import { Box, TextField, Button } from '@mui/material';
import Layout from './UserComponents/Layout';

function Notifications() {
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
    
    </Layout>
  );
}

export default Notifications;
