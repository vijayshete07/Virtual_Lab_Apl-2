// src/components/Footer.js
import React from 'react';
import { AppBar, Typography } from '@mui/material';

function Footer() {
  return (
    <AppBar position="static" style={{ backgroundColor: '#1976d2', marginTop: 'auto' }}> {/* Dark Blue Color */}
      <Typography variant="body2" color="inherit" align="center" style={{ padding: '10px' }}>
        © 2024 Virtual Labs. All rights reserved.
      </Typography>
    </AppBar>
  );
}

export default Footer;
