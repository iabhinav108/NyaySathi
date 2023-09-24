import React, { useState } from 'react';
import axios from 'axios';
import {
  TextField,
  Button,
  Typography,
  Box,
  Snackbar,
  Container,
} from '@mui/material';
import Layout from './UserComponents/Layout';

function UpdateProfileForm() {
  const [formData, setFormData] = useState({
    address: '',
    phoneNumber: '',
    city: '',
    state: '',
    pincode: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/user/updateProfile', formData);

      if (response.status === 'success') {
        setSuccessMessage('Profile updated successfully');
      } else {
        setErrorMessage('Failed to update profile');
      }
    } catch (error) {
      setErrorMessage('An error occurred while updating your profile');
    }
  };

  return (
    <Layout>
      <Container maxWidth="sm">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: 12, // Increase distance from the header
            paddingBottom: 6, // Maintain distance from the footer
          }}
        >
          <Typography variant="h6">Update Profile</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              margin="normal"
              fullWidth
            />
            <TextField
              label="Phone Number"
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              margin="normal"
              fullWidth
            />
            <TextField
              label="City"
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              margin="normal"
              fullWidth
            />
            <TextField
              label="State"
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              margin="normal"
              fullWidth
            />
            <TextField
              label="Pincode"
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              margin="normal"
              fullWidth
              style={{ marginBottom: '3rem' }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Update Changes
            </Button>
          </form>
          <Snackbar
            open={!!successMessage || !!errorMessage}
            autoHideDuration={5000}
            onClose={() => {
              setSuccessMessage('');
              setErrorMessage('');
            }}
            message={successMessage || errorMessage}
          />
        </Box>
      </Container>
    </Layout>
  );
}

export default UpdateProfileForm;
