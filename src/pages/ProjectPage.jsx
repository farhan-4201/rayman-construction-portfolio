import React from 'react'

const ProjectPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Add project cards here */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Project 1</h2>
          <p className="text-gray-600">Description of project 1 goes here.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Project 2</h2>
          <p className="text-gray-600">Description of project 2 goes here.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Project 3</h2>
          <p className="text-gray-600">Description of project 3 goes here.</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectPage
