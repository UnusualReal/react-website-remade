import React, { useState, useEffect } from 'react';
import './ImageBackground.css';

const images = [
  "imgs/nissan_00000.png",
  "imgs/unusualbmw 3.png",
  "imgs/unusualbmw 2.png",
  "imgs/unusualbmw 1.png",
];

const ImageBackground = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background-container">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`bg-${index}`}
          className={`bg-image ${index === currentIndex ? "visible" : ""}`}
        />
      ))}
    </div>
  );
};

export default ImageBackground;
