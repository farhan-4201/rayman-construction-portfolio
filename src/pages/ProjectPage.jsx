import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer bg-yellow-500 text-white rounded-full p-2 shadow-lg hover:bg-yellow-600"
      onClick={onClick}
    >
      ➡
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer bg-yellow-500 text-white rounded-full p-2 shadow-lg hover:bg-yellow-600"
      onClick={onClick}
    >
      ⬅
    </div>
  );
};

const ProjectPage = () => {
  const images = [
    "/interior8.jpeg",
    "/interior1.jpeg",
    "/interior2.jpeg",
    "/interior3.jpeg",
    "/interior4.jpeg",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6">
          Our Projects
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Explore our projects across major cities and see the quality of our work.
        </p>

        {/* Image Slider */}
        <div className="relative mb-12">
          <Slider {...sliderSettings}>
            {images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image}
                  alt={`Project ${index + 1}`}
                  className="w-full h-96 object-cover"
                  loading="lazy" // Lazy loading added
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
