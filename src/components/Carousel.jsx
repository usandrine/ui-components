import React, { useState } from "react";
import "../styles/Carousel.css";

const images = [
  "https://via.placeholder.com/600x300/FF5733/FFFFFF?text=Slide+1",
  "https://via.placeholder.com/600x300/33FF57/FFFFFF?text=Slide+2",
  "https://via.placeholder.com/600x300/3357FF/FFFFFF?text=Slide+3"
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button className="prev" onClick={prevSlide}>❮</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel-image" />
      <button className="next" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default Carousel;
