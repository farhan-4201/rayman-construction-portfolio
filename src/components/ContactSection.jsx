import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    content: '(197) 4009989',
    link: 'tel:+15551234567'
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@constructcompany.com',
    link: 'mailto:info@constructcompany.com'
  },
  {
    icon: MapPin,
    title: 'Address',
    content: '123 Construction Ave, Building City, ST 12345',
    link: 'https://maps.google.com'
  }
]

const ContactSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a construction project in mind? We'd love to hear from you.
            Contact us today for a free consultation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                {React.createElement(item.icon, { className: "w-6 h-6 text-blue-600" })}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.content}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactSection
