import React from 'react';
import Layout from '../components/Layout';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import BusinessIcon from '@mui/icons-material/Business';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 9, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact For Help and Support</Typography>
        <h3>Ministry of Law And justice</h3>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
        <Box sx={{
          flex: 1,
          maxWidth: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            maxWidth: "300px",
          },
        }}>
          <TableContainer component={Paper}>
            <Table aria-label="contact table" sx={{ border: '2px solid #ccc' }}>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{ bgcolor: "white", color: "black" }}
                    align='center'
                  >
                    Contact Details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 011-23381023
                    (toll-free)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <MailIcon sx={{ color: "red", pt: 1 }} /> avnit.singh@gov.in
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <BusinessIcon sx={{ color: "red", pt: 1 }} /> 4th Floor, A-Wing, Shastri Bhawan New Delhi-110 001
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box sx={{ flex: 1, minWidth: '10px', ml: 8, marginBottom:10 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4460446650337!2d77.21245047521666!3d28.61639087567362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2b642a88c03%3A0x959112a754ac6e2b!2sShastri%20Bhawan%2C%20MHRD!5e0!3m2!1sen!2sus!4v1695491494511!5m2!1sen!2sus"
            width="500"
            height="400"
            style={{ border: '0' }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Box>
    </Layout>
  )
}

export default Contact;
