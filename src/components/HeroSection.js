// src/components/HeroSection.js
import React from 'react';
import ImageSlider from './ImageSlider'; // Import the ImageSlider component
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <ImageSlider /> {/* Use ImageSlider here */}
      <div className="hero-content">
         {/* Centered paragraph */}
        
      </div>
    </div>
  );
}

export default HeroSection;
