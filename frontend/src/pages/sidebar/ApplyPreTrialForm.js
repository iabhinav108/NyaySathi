import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Alert,
  Typography,
  TextField,
  Button,
  Box,
  CssBaseline,
  InputAdornment,
  Container,
  Grid,
  Paper,
} from '@mui/material';
import axios from 'axios';
import Layout from './UserComponents/Layout';

const ApplyPreTrialForm = () => {
  const [successMessage,setSuccessMessage] = useState(false);

  const [formData, setFormData] = useState({
    caseReferenceID: '',
    againstIndividual: '',
    againstIndividualEmail:'',
    writtenStatementFile: null,
    writtenStatementFilePath: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOppositionPartyEmailChange = (e) => {
    const oppositionPartyEmail = e.target.value;
    setFormData({
      ...formData,
      oppositionPartyEmail,
    });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      writtenStatementFile: file,
    });
  };

  const uploadFileToFIleIo = async () => {
    try {
      const file = formData.writtenStatementFile;
      const formDataToSend = new FormData();
      formDataToSend.append('file', file);

      const response = await axios.post('https://file.io/', formDataToSend);

      if (response.status === 200) {
        const data = response.data;
        if (data.success) {
          console.log('File uploaded successfully!');

          // Update writtenStatementFilePath in the state with File.io URL
          setFormData({
            ...formData,
            writtenStatementFilePath: data.link,
          });

          // Continue with form submission here if needed
        } else {
          console.error('File upload failed:', data.message);
        }
      } else {
        console.error('Error uploading file:', response.statusText);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const Navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    await uploadFileToFIleIo();

    try {
      const response = await axios.post('/api/user/applyPTA', formData);

      if (response.data.status === 'success') {
        setSuccessMessage(response.data.message);
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
        Navigate('/dashboard/ManagePreTrials')
        
      } else{
        console.log(response.data.error)
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Layout>
    <Box>
      <Typography variant="h6">Apply Pre-trial</Typography>
      {successMessage && <Alert severity="success">{successMessage}</Alert>}
      <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                margin="normal"
                label="Case Reference ID"
                name="caseReferenceID"
                value={formData.caseReferenceID}
                onChange={handleInputChange}
                required
              />
              <TextField
                fullWidth
                margin="normal"
                label="Name of Individual Filed Against"
                name="againstIndividual"
                value={formData.againstIndividual}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email of Individual Filed Against"
                name="againstIndividualEmail"
                value={formData.againstIndividualEmail}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                style={{ display: 'none' }}
                id="writtenStatementFileInput"
                required
              />
              <label htmlFor="writtenStatementFileInput">
                <Button
                  variant="outlined"
                  component="span"
                  endIcon={
                    <InputAdornment position="end">Upload Image</InputAdornment>
                  }
                >
                  Upload Written Statement
                </Button>
              </label>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="small" // Add size="small" to make the button smaller
                sx={{ mt: 7, mb: 2 }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
        </Paper>
        </Box>
    </Layout>
  );
};

export default ApplyPreTrialForm;
