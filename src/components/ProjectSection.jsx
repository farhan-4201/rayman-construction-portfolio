"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const ProjectCard = ({ title, category, image }) => {
  return (
    <div className="overflow-hidden group rounded-lg shadow-md">
      <div className="relative overflow-hidden">
        <img
          src={image || "/images/project-placeholder.jpg"}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link
            to="/projects"
            className="bg-yellow-500 text-black p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            <ArrowRight className="h-5 w-5" />
            <span className="sr-only">View project</span>
          </Link>
        </div>
      </div>
      <div className="p-4">
        <span className="text-sm text-yellow-500 font-medium">{category}</span>
        <h3 className="font-bold text-lg mt-1">{title}</h3>
      </div>
    </div>
  )
}

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Modern Office Complex",
      category: "Commercial",
      image: "/images/project1.jpg",
    },
    {
      id: 2,
      title: "Luxury Residential Tower",
      category: "Residential",
      image: "/images/project2.jpg",
    },
    {
      id: 3,
      title: "Manufacturing Facility",
      category: "Industrial",
      image: "/images/project3.jpg",
    },
    {
      id: 4,
      title: "Shopping Mall Renovation",
      category: "Commercial",
      image: "/images/project4.jpg",
    },
    {
      id: 5,
      title: "Custom Family Home",
      category: "Residential",
      image: "/images/project5.jpg",
    },
    {
      id: 6,
      title: "Warehouse Complex",
      category: "Industrial",
      image: "/images/project6.jpg",
    },
  ]

  const filteredProjects =
    activeTab === "all" ? projects : projects.filter((project) => project.category.toLowerCase() === activeTab)

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Our Projects</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our portfolio of completed projects that showcase our expertise and commitment to quality.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              className={`px-4 py-2 rounded ${activeTab === "all" ? "bg-yellow-500 text-black" : "bg-gray-200"}`}
              onClick={() => setActiveTab("all")}
            >
              All
            </button>
            <button
              className={`px-4 py-2 rounded ${activeTab === "commercial" ? "bg-yellow-500 text-black" : "bg-gray-200"}`}
              onClick={() => setActiveTab("commercial")}
            >
              Commercial
            </button>
            <button
              className={`px-4 py-2 rounded ${activeTab === "residential" ? "bg-yellow-500 text-black" : "bg-gray-200"}`}
              onClick={() => setActiveTab("residential")}
            >
              Residential
            </button>
            <button
              className={`px-4 py-2 rounded ${activeTab === "industrial" ? "bg-yellow-500 text-black" : "bg-gray-200"}`}
              onClick={() => setActiveTab("industrial")}
            >
              Industrial
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} title={project.title} category={project.category} image={project.image} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
