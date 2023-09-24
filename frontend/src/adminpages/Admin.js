import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { Link } from 'react-router-dom';
import indiaEmblem from '../images/emblem.png';
import '../styles/HeaderStyles.css';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        width: '240px',
        flexShrink: 0,
        whiteSpace: 'nowrap',
      }}
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          zIndex: 1, // Ensure it's above the content
          position: 'fixed',
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '240px',
            top: '64px', // Adjust this to avoid overlapping with the header
            height: 'calc(100% - 64px)', // Calculate height based on header height
          },
        }}
      >
        <Box>
          <Typography
            color="goldenrod"
            variant="h6"
            component="div"
            sx={{
              textAlign: 'center',
              marginTop: '20px',
              marginBottom: '20px',
            }}
          >
            NyaySathi
          </Typography>
          <ul
            className="sub-navigation"
            style={{
              listStyleType: 'none',
              padding: 0,
            }}
          >
            <li>
              <Link
                to="/admin/CaseDetails"
                style={{
                  margin: '10px 0',
                  textDecoration: 'none',
                  color: 'black',
                }}
              >
                Case Details
              </Link>
            </li>
            <li>
              <Link
                to="/admin/CaseRequests"
                style={{
                  margin: '10px 0',
                  textDecoration: 'none',
                  color: 'black',
                }}
              >
                Case Request
              </Link>
            </li>
            <li>
              <Link
                to="/admin/ManageCases"
                style={{
                  margin: '10px 0',
                  textDecoration: 'none',
                  color: 'black',
                }}
              >
                Manage Cases
              </Link>
            </li>
            <li>
              <Link
                to="/admin/ManageUsers"
                style={{
                  margin: '10px 0',
                  textDecoration: 'none',
                  color: 'black',
                }}
              >
                Manage Users
              </Link>
            </li>
          </ul>
        </Box>
      </Drawer>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component="nav" sx={{ bgcolor: 'black' }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: 'none' },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <img src={indiaEmblem} alt="Emblem of India" className="india-emblem" />
            <Typography
              color="goldenrod"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              NyaySathi
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: 'auto',
              }}
            >
              <AdminPanelSettingsIcon sx={{ color: 'white' }} />
              <Typography
                color="white"
                variant="h6"
                component="div"
                sx={{ textAlign: 'right' }}
              >
                Admin Dashboard
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
        <ExpandCircleDownIcon
          sx={{
            position: 'fixed',
            color: 'white',
            cursor: 'pointer',
            left: '10px',
            top: '74px',
            zIndex: 2, // Ensure it's above the sidebar
          }}
          onClick={handleDrawerToggle}
        />
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              zIndex: 1,
              position: 'fixed',
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: '240px',
                top: '64px',
                height: 'calc(100% - 64px)',
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};
const Footer = () => {
  return (
    <>
      <Box sx={{ textAlign: 'center', bgcolor: '#1A1A19', color: 'white', p: 3 }}>
        <Box sx={{
          my: 3, "& svg": {
            fontSize: "60px",
            cursor: "pointer",
            mr: 2,
          },
          "& svg:hover": {
            color: 'goldenrod',
            transform: 'translateX(5px)',
            transition: 'all 400ms'
          }
        }}>
          <InstagramIcon />
          <TwitterIcon />
          <FacebookIcon />
        </Box>
        <Typography variant="h5" sx={{ "@media (max-width:600px)": { fontSize: "1rem" } }}>
          All Rights Reserved &copy; SIH Team
        </Typography>
      </Box>
    </>
  );
};

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ margin: '20px 0', textAlign: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Welcome to the NyaySathi Administration Dashboard. Here, you can manage cases, users, and more.
        </Typography>
      </div>
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
