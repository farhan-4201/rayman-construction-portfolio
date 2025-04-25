import React, { useState } from "react";

const ProjectCard = ({ title, category }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{category}</p>
    </div>
  );
};

const ProjectPage = () => {
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

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">Our Projects</h1>
      <p className="text-gray-600 text-center mb-8">
        We had done 5 major projects in 4 different cities like Brooklyn, Queens, Staten Island, and New Jersey State.
      </p>

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
  );
};

export default ProjectPage;
