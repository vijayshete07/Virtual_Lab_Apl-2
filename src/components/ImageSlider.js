import React, { useEffect, useState } from 'react';
import './ImageSlider.css'; // Ensure you have appropriate CSS for styling

const images = [
  '/images/pexels-njeromin-18112365.jpg',
  '/images/pexels-njeromin-12149150.jpg',
  '/images/pexels-njeromin-14530325.jpg',
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slider-image" />
      <div className="slider-controls">
        <button className="slider-button" onClick={handlePrev}>❮</button>
        <button className="slider-button" onClick={handleNext}>❯</button>
      </div>
      <div className="dots-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
