import React from 'react';
import HeroSection from './HeroSection'; // Import HeroSection here

function Home() {
  return (
    <div>
      <HeroSection /> {/* Use HeroSection inside Home */}
      <h1>Welcome to Home Page</h1>
    </div>
  );
}

export default Home;
