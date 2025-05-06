import React, { useState, useEffect, useCallback } from "react";

const HeroSection = () => {
  const images = ["slider-1.jpg.webp", "slider-2.jpg.webp"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [goToNext]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slider Image */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-opacity duration-500"
      />

      {/* Previous Button */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent border-2 border-yellow-500 text-yellow-500 p-3 rounded-full shadow-lg hover:bg-yellow-500 hover:text-white transition-all"
      >
        ⬅
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent border-2 border-yellow-500 text-yellow-500 p-3 rounded-full shadow-lg hover:bg-yellow-500 hover:text-white transition-all"
      >
        ➡
      </button>
    </div>
  );
};

export default HeroSection;
