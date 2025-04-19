import React from 'react'
import { Building, Home, Warehouse, Wrench, PaintBucket, Ruler } from 'lucide-react'

const services = [
  {
    icon: Building,
    title: 'Commercial Construction',
    description: 'Office buildings, retail spaces, and industrial facilities built to your specifications.'
  },
  {
    icon: Home,
    title: 'Residential Construction',
    description: 'Custom homes and residential developments with attention to detail and quality.'
  },
  {
    icon: Warehouse,
    title: 'Industrial Projects',
    description: 'Manufacturing plants, warehouses, and industrial facilities designed for efficiency.'
  },
  {
    icon: Wrench,
    title: 'Renovations',
    description: 'Modernize and upgrade existing structures while maintaining their character.'
  },
  {
    icon: PaintBucket,
    title: 'Interior Finishing',
    description: 'High-quality interior work including painting, flooring, and custom installations.'
  },
  {
    icon: Ruler,
    title: 'Project Planning',
    description: 'Comprehensive project planning and management from start to finish.'
  }
]

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of construction services to meet all your building needs.
            Our experienced team ensures quality and reliability in every project.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-block p-3 bg-blue-100 rounded-lg mb-4">
                {React.createElement(service.icon, { className: "w-6 h-6 text-blue-600" })}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
