import React from 'react'

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg text-gray-700 mb-6">
          We are a passionate team dedicated to delivering high-quality construction services.
          With years of experience in the industry, we take pride in our commitment to excellence
          and customer satisfaction.
        </p>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            To provide innovative construction solutions while maintaining the highest standards
            of quality, safety, and sustainability in every project we undertake.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
