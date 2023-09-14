import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/auth';
import { useState } from 'react'

function Navbar({ logout, isAuthenticated }) {

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false)
  };

  const handleCloseLogout = () => {
    handleClose();
    if (isAuthenticated) {logout()}
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <Link to="/"><MenuItem onClick={handleClose}>Home</MenuItem></Link>
            <Link to="/profile"><MenuItem onClick={handleClose}>Profile</MenuItem></Link>
            <Link to="/shows"><MenuItem onClick={handleClose}>My shows</MenuItem></Link>
            {isAuthenticated &&
            <MenuItem onClick={handleCloseLogout}>Logout</MenuItem>}
            {!isAuthenticated &&
            <Link to="/login"><MenuItem onClick={handleClose}>Login</MenuItem></Link>}
          </Menu>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            BingeWatcher
          </Typography>
          {isAuthenticated &&
          <Button onClick={logout} size="large" color="inherit">Logout</Button>
          }
          {!isAuthenticated &&
          <Link to="/login"><Button size="large" color="inherit">Login</Button></Link>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {logout})(Navbar);
