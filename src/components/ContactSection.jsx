import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    content: '(197) 4009989',
    link: 'tel:+15551234567',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'raymanconstruction537@gmail.com',
    link: 'mailto:raymanconstruction537@gmail.com',
  },
  {
    icon: MapPin,
    title: 'Address',
    content: '2565 Ocean Parkway, Brooklyn, NY 11235',
    link: 'https://maps.google.com',
  },
];

const ContactSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Get in Touch</h2>
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
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:scale-105"
            >
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                {React.createElement(item.icon, { className: "w-8 h-8 text-blue-600" })}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.content}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
