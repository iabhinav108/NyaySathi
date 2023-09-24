import React from 'react';
import { Box, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const iconStyle = {
  fontSize: "45px",
  cursor: "pointer",
  mr: 2,
  color: 'goldenrod', // Set the icon color to goldenrod
  textDecoration: "none",
};

const Footer = () => {
  return (
    <>
      <Box sx={{ textAlign: 'center', bgcolor: '#1A1A19', color: 'white', p: 3 }}>
        <Box sx={{
          my: 1, "& a": {
            ...iconStyle,
          },
          "& a:hover": {
            transform: 'translateX(5px)',
            transition: 'all 400ms',
          }
        }}>
          {/* icons with links */}
          <a href="https://www.instagram.com/mlj_goi/?hl=en" target="_blank" rel="noopener noreferrer">
            <InstagramIcon style={iconStyle} />
          </a>
          <a href="https://www.twitter.com/mlj_goi?lang=en" target="_blank" rel="noopener noreferrer">
            <TwitterIcon style={iconStyle} />
          </a>
          <a href="https://www.facebook.com/MLJ.GovIndia/" target="_blank" rel="noopener noreferrer">
            <FacebookIcon style={iconStyle} />
          </a>
        </Box>
        <Typography variant="h7" sx={{
          "@media (max-width:600px)": {
            fontSize: "1rem",
          }
        }}>
          All Rights Reserved &copy; Ministry of Law and Justice
        </Typography>
      </Box>
    </>
  );
}

export default Footer;
