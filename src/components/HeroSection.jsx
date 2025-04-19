import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="relative bg-gray-900 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=2000&q=80"
          alt="Construction site"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative container mx-auto px-4 py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Building Tomorrow's World Today
          </h1>
          <p className="text-xl mb-8">
            We specialize in delivering exceptional construction services with a focus on quality,
            safety, and innovation. Let us bring your vision to life.
          </p>
          <div className="flex gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/projects"
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-md font-medium transition-colors"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
