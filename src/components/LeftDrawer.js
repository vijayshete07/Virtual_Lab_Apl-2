import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import './LeftDrawer.css'; // Custom CSS file for styling the drawer

function LeftDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  return (
    <div>
      {/* Menu Icon to open the drawer */}
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>

      {/* Drawer with list items */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          className="drawer-content"
        >
          <List>
            <ListItem button component={Link} to="/" className="drawer-item">
              <ListItemText primary="Home" />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to="/about" className="drawer-item">
              <ListItemText primary="About" />
            </ListItem>
            <Divider />
          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default LeftDrawer;
