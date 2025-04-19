import React from 'react'
import { Link } from 'react-router-dom'

const projects = [
  {
    title: 'Modern Office Complex',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    description: 'A state-of-the-art office building with sustainable features.'
  },
  {
    title: 'Luxury Apartments',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    description: 'High-end residential complex with modern amenities.'
  },
  {
    title: 'Shopping Mall',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1519420573924-65fcd45245f8?auto=format&fit=crop&w=800&q=80',
    description: 'Large-scale retail development with entertainment facilities.'
  }
]

const ProjectsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <Link to="/projects" className="text-blue-600 hover:text-blue-700">
            View All Projects →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">{project.category}</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection 