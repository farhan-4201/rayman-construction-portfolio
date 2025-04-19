import React from 'react'

const TeamPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200"></div>
          <h2 className="text-xl font-semibold mb-2">John Doe</h2>
          <p className="text-gray-600">Project Manager</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200"></div>
          <h2 className="text-xl font-semibold mb-2">Jane Smith</h2>
          <p className="text-gray-600">Lead Architect</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200"></div>
          <h2 className="text-xl font-semibold mb-2">Mike Johnson</h2>
          <p className="text-gray-600">Construction Supervisor</p>
        </div>
      </div>
    </div>
  )
}

export default TeamPage
