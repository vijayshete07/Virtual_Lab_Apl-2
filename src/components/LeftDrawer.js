import React, { useState } from 'react';
import {
  Drawer, List, ListItem, ListItemText, IconButton, ListItemIcon, Divider
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';            
import InfoIcon from '@mui/icons-material/Info';            
import ContactMailIcon from '@mui/icons-material/ContactMail';  
import ScienceIcon from '@mui/icons-material/Science';      
import MenuIcon from '@mui/icons-material/Menu';            
import './LeftDrawer.css';                                  

function LeftDrawer() {
  const [open, setOpen] = useState(false);

  // Function to toggle drawer
  const toggleDrawer = (isOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(isOpen);
  };

  return (
    <div>
      {/* Menu Icon to toggle the drawer */}
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>

      {/* Left-side Drawer */}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{ className: 'drawer-paper' }} // Add custom styling if needed
      >
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          style={{ width: '250px' }} // Set drawer width
        >
          <List>
            {/* Home Menu Item */}
            <ListItem button>
              <ListItemIcon>
                <HomeIcon className="menu-icon" style={{ fontSize: '40px' }} /> {/* Icon size increased */}
              </ListItemIcon>
              <ListItemText primary="Home" className="menu-text" />
            </ListItem>

            {/* About Menu Item */}
            <ListItem button>
              <ListItemIcon>
                <InfoIcon className="menu-icon" style={{ fontSize: '40px' }} /> {/* Icon size increased */}
              </ListItemIcon>
              <ListItemText primary="About" className="menu-text" />
            </ListItem>

            {/* Contact Menu Item */}
            <ListItem button>
              <ListItemIcon>
                <ContactMailIcon className="menu-icon" style={{ fontSize: '40px' }} /> {/* Icon size increased */}
              </ListItemIcon>
              <ListItemText primary="Contact" className="menu-text" />
            </ListItem>

            <Divider className="divider" /> {/* Divider for separating sections */}

            {/* Lab Menu Item */}
            <ListItem button>
              <ListItemIcon>
                <ScienceIcon className="menu-icon" style={{ fontSize: '40px' }} /> {/* Icon size increased */}
              </ListItemIcon>
              <ListItemText primary="Lab" className="menu-text" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default LeftDrawer;
