// src/components/Navbar.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
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
            EduQuest e-Learning Platform
          </Typography>
          <Button color="inherit" component={Link} to="/" style={{ color: '#FFFFFF' }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about" style={{ color: '#FFFFFF' }}>
            About
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 200, // Fixed width for the drawer
            left: '10px', // Leave space from the left of the screen
            position: 'absolute', // Set position to absolute for better control
          },
        }}
      >
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          className="drawer-content"
        >
          <List>
            <ListItem button component={Link} to="/aim" className="drawer-item">
              <ListItemText primary="Aim" />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to="/theory" className="drawer-item">
              <ListItemText primary="Theory" />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to="/pretest" className="drawer-item">
              <ListItemText primary="Pretest" />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to="/procedure" className="drawer-item">
              <ListItemText primary="Procedure" />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to="/simulation" className="drawer-item highlighted-item">
              <ListItemText primary="Simulation" />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to="/posttest" className="drawer-item">
              <ListItemText primary="Posttest" />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to="/references" className="drawer-item">
              <ListItemText primary="References" />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to="/feedback" className="drawer-item">
              <ListItemText primary="Feedback" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
}

export default Navbar;
