import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box,Button, Divider, Drawer, IconButton, Toolbar, Typography,Menu,MenuItem, } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import indiaEmblem from '../../../images/emblem.png'; // Replace with the actual path to your emblem image
import '../../../styles/HeaderStyles.css'; // Add your CSS file here
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleUserIconClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        color="goldenrod"
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        NyaySathi
      </Typography>
      <Divider />
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
              <Toolbar>
            <Box sx={{
              display: 'flex',
              maxWidth: '800px',
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <Button
                color="inherit"
                onClick={() => navigate('/dashboard/applyPreTrial')}
              >
                Apply Pre-trial
              </Button>
              <Button
                color="inherit"
                onClick={() => navigate('/dashboard/ManagePreTrials')}
              >
                Manage Your Pre-Trials
              </Button>
              <Button
                color="inherit"
                onClick={() => navigate('/dashboard/Notifications')}
              >
                Notifications
              </Button>
              <Button
                color="inherit"
                onClick={() => navigate('/dashboard/historyPreTrials')}
              >
                History Log
              </Button>
              <Button
                color="inherit"
                onClick={() => navigate('/dashboard/feedback')}
              >
                Feedback
              </Button>
              <Button color="inherit" onClick={handleUserIconClick}>
                <AccountCircleIcon />
              </Button>
            </Box>
              </Toolbar>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            navigate('/dashboard/updateProfile');
            handleClose();
          }}
        >
          Update Profile
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate('/api/user/logout');
            handleClose();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
            
        </Toolbar>
        </AppBar>
        
      </Box>
    </>
  );
};

export default Header;
