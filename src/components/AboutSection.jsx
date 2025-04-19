import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'

const AboutSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Our Company</h2>
            <p className="text-gray-600 mb-6">
              With over 20 years of experience in the construction industry, we have
              established ourselves as a trusted partner for both residential and
              commercial projects. Our commitment to quality and customer satisfaction
              sets us apart from the competition.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Professional and experienced team',
                'High-quality materials and workmanship',
                'On-time project completion',
                'Competitive pricing',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Learn More
            </Link>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
              alt="Construction site"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
