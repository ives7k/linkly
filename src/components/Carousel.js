"use client"
import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Ensure the first image is visible when the component mounts
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true); // Start animation
      setTimeout(() => {
        goToNext();
        setIsAnimating(false); // End animation
      }, 1000); // Match this duration with your CSS animation duration
    }, 3000); // Change image every 5 seconds, including animation time

    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel-container mx-auto relative" style={{ height: '500px', width: '290px' }}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`rounded-3xl border-2 border-primary-100 shadow-soft hover:shadow-glow absolute transition-opacity duration-1000 ${currentIndex === index ? 'opacity-100' : 'opacity-0'} ${isAnimating ? 'z-10' : 'z-0'}`}
          style={{ height: '500px', width: '290px', objectFit: 'cover' }}
        />
      ))}
    </div>
  );
};

export default Carousel;
