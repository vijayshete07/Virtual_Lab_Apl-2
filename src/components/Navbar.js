// src/components/Navbar.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: '#1976d2' }}> {/* Dark Blue Color */}
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Virtual Lab
          </Typography>
          <Button color="inherit" component={Link} to="/" style={{ color: '#FFFFFF' }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about" style={{ color: '#FFFFFF' }}>
            About
          </Button>
          <Button color="inherit" component={Link} to="/lab" style={{ color: '#FFFFFF' }}>
            Lab
          </Button>
          <Button color="inherit" component={Link} to="/contact" style={{ color: '#FFFFFF' }}>
            Contact
          </Button>
        </Toolbar>
      </AppBar>

      {/* Drawer Component */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          style={{ width: '250px' }} // Drawer width
        >
          <List>
            {/* Drawer Menu Items */}
            <ListItem button component={Link} to="/">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/about">
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button component={Link} to="/lab">
              <ListItemText primary="Lab" />
            </ListItem>
            <ListItem button component={Link} to="/contact">
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
}

export default Navbar;
