import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const images = [
    "slider-1.jpg.webp",
    "slider-2.jpg.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-opacity duration-500"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Rayman Construction
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-6">
          Building Dreams, Renovating Realities — Trusted Experts in Construction & Renovation Services.
        </p>
        <Link
          to="/contact"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full transition duration-300"
        >
          Get a Free Quote
        </Link>
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={goToPrev}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white/40 text-black px-2 py-1 rounded-full hover:bg-white transition"
      >
        &#10094;
      </button>

      {/* Right Arrow */}
      <button
        onClick={() =>
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white/40 text-black px-2 py-1 rounded-full hover:bg-white transition"
      >
        &#10095;
      </button>
    </div>
  );
};

export default HeroSection;
