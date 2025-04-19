import React from 'react'
import { Building2, Shield, Clock, Award } from 'lucide-react'

const features = [
  {
    icon: Building2,
    title: 'Quality Construction',
    description: 'We use premium materials and follow industry best practices for lasting results.'
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Our team prioritizes safety in every project, ensuring secure working conditions.'
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We complete projects within agreed timelines without compromising quality.'
  },
  {
    icon: Award,
    title: 'Expert Team',
    description: 'Our skilled professionals bring years of experience to every project.'
  }
]

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                {React.createElement(feature.icon, { className: "w-6 h-6 text-blue-600" })}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection 