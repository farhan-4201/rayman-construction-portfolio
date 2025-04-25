"use client";

import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectCard = ({ title, category }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{category}</p>
    </div>
  );
};

const ProjectsSection = () => {
  const [activeCity, setActiveCity] = useState("Brooklyn");

  const projectsByCity = {
    Brooklyn: [
      {
        id: 1,
        title: "Modern Office Complex",
        category: "Commercial",
      },
      {
        id: 2,
        title: "Luxury Residential Tower",
        category: "Residential",
      },
    ],
    Queens: [
      {
        id: 3,
        title: "Shopping Mall Renovation",
        category: "Commercial",
      },
      {
        id: 4,
        title: "Custom Family Home",
        category: "Residential",
      },
    ],
    "Staten Island": [
      {
        id: 5,
        title: "Warehouse Complex",
        category: "Industrial",
      },
    ],
    "New Jersey State": [
      {
        id: 6,
        title: "Manufacturing Facility",
        category: "Industrial",
      },
    ],
  };

  const images = [
    "/rayman/interior1.jpeg",
    "/rayman/interior2.jpeg",
    "/rayman/interior3.jpeg",
    "/rayman/interior4.jpeg",
    "/rayman/interior5.jpeg",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our featured projects showcasing our expertise and commitment to quality.
          </p>
        </div>

        {/* Slider */}
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img
                src={image}
                alt={`Project ${index + 1}`}
                className="w-full h-96 object-cover"
              />
            </div>
          ))}
        </Slider>

        {/* City Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {Object.keys(projectsByCity).map((city) => (
              <button
                key={city}
                className={`px-4 py-2 rounded ${
                  activeCity === city ? "bg-yellow-500 text-black" : "bg-gray-200"
                } hover:bg-yellow-400 transition-colors`}
                onClick={() => setActiveCity(city)}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Projects List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsByCity[activeCity].map((project) => (
            <ProjectCard key={project.id} title={project.title} category={project.category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
