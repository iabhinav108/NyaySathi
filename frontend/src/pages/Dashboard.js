import React, { useState, useEffect } from 'react';
import Layout from './sidebar/UserComponents/Layout';
import { useNavigate } from 'react-router-dom';
import {
  Alert,
  Box,
} from '@mui/material';

import axios from 'axios';

function UserProfile() {
  const [userData, setUserData] = useState(null);
  const [welcomeMessage, setWelcomeMessage] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user/profile'); // Replace with the actual API endpoint
        if (response.data) {
          setUserData(response.data.user);
          setWelcomeMessage(response.data.message);
          setTimeout(() => {
            setWelcomeMessage(''); // Clear the welcome message after 5 seconds
          }, 3000);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <Layout>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh" // Adjust this value as needed for vertical centering
      >
        <div>
          {/* Your user information component or content */}
          {userData && (
            <div>
              <h2>User Information</h2>
              <p>Username: {userData.username}</p>
              {/* Add more user information as needed */}
            </div>
          )}
        </div>
      </Box>
    </Layout>
  );
}

export default UserProfile;
