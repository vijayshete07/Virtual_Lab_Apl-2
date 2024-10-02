// src/components/HeroSection.js
import React from 'react';
import ImageSlider from './ImageSlider'; // Import the ImageSlider component
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <ImageSlider /> {/* Use ImageSlider here */}
      <div className="hero-content">
        <h1>Welcome to Virtual Labs</h1>
        <p>Experience labs like never before</p>
        <a href="#labs" className="btn">Explore Labs</a>
      </div>
    </div>
  );
}

export default HeroSection;
