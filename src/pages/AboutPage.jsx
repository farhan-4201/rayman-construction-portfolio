import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6">
          About Us
        </h1>
        <p className="text-center text-gray-600 text-lg mb-12">
          We are a passionate team dedicated to delivering high-quality construction and design solutions with a focus on client satisfaction and modern innovation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-yellow-200 bg-yellow-50 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-yellow-400 transition duration-300 transform hover:scale-105">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To provide innovative and sustainable construction solutions while maintaining the highest standards of quality, safety, and efficiency in every project.
            </p>
          </div>

          <div className="border border-blue-200 bg-blue-50 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-400 transition duration-300 transform hover:scale-105">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To become a leading construction firm known for excellence in design, execution, and client relationships, building spaces that inspire and last.
            </p>
          </div>

          <div className="border border-green-200 bg-green-50 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-green-400 transition duration-300 transform hover:scale-105">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Our Core Values</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Integrity & Transparency</li>
              <li>Commitment to Excellence</li>
              <li>Client-Centered Approach</li>
              <li>Environmental Responsibility</li>
            </ul>
          </div>

          <div className="border border-gray-200 bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-gray-400 transition duration-300 transform hover:scale-105">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Why Choose Us?</h2>
            <p className="text-gray-700 leading-relaxed">
              We combine experience, innovation, and a deep understanding of client needs to deliver projects that go beyond expectations. Our proven track record of success across residential, commercial, and industrial sectors sets us apart.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
