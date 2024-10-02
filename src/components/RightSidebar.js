// src/components/RightSidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './RightSidebar.css'; // Custom styles for the right sidebar

function RightSidebar() {
  return (
    <div className="right-sidebar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/lab">Lab</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default RightSidebar;
