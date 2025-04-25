import React, { useState } from "react";
import { Building2, Home, Factory } from "lucide-react";

const getIcon = (category) => {
  switch (category) {
    case "Commercial":
      return <Building2 className="w-5 h-5 mr-2 text-yellow-600" />;
    case "Residential":
      return <Home className="w-5 h-5 mr-2 text-blue-600" />;
    case "Industrial":
      return <Factory className="w-5 h-5 mr-2 text-gray-600" />;
    default:
      return null;
  }
};

const ProjectCard = ({ title, category }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 transition duration-300 transform hover:scale-105">
      <div className="flex items-center mb-2">
        {getIcon(category)}
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <span className="inline-block mt-2 px-3 py-1 text-sm font-medium bg-yellow-100 text-yellow-800 rounded-full">
        {category}
      </span>
    </div>
  );
};

const ProjectPage = () => {
  const [activeCity, setActiveCity] = useState("Brooklyn");

  const projectsByCity = {
    Brooklyn: [
      { id: 1, title: "Modern Office Complex", category: "Commercial" },
      { id: 2, title: "Luxury Residential Tower", category: "Residential" },
    ],
    Queens: [
      { id: 3, title: "Shopping Mall Renovation", category: "Commercial" },
      { id: 4, title: "Custom Family Home", category: "Residential" },
    ],
    "Staten Island": [
      { id: 5, title: "Warehouse Complex", category: "Industrial" },
    ],
    "New Jersey State": [
      { id: 6, title: "Manufacturing Facility", category: "Industrial" },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-4">
          Our Projects
        </h1>
        <p className="text-center text-gray-600 mb-10">
          We have completed 5 major projects in 4 different cities like Brooklyn, Queens, Staten Island, and New Jersey State.
        </p>

        {/* City Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.keys(projectsByCity).map((city) => (
            <button
              key={city}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCity === city
                  ? "bg-yellow-500 text-black shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-yellow-400"
              }`}
              onClick={() => setActiveCity(city)}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsByCity[activeCity].map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
