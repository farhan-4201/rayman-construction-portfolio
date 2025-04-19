import React from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Robert Wilson',
    role: 'Business Owner',
    content: 'Working with this construction company was a fantastic experience. They delivered our office building project on time and within budget. Their attention to detail and professionalism was impressive.',
    rating: 5
  },
  {
    name: 'Sarah Thompson',
    role: 'Property Developer',
    content: "I've worked with many construction firms, but this team stands out. Their communication was excellent throughout the project, and the quality of work exceeded our expectations.",
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Architect',
    content: 'As an architect, I appreciate their technical expertise and collaborative approach. They bring solutions to the table and execute the vision perfectly. A reliable partner for any construction project.',
    rating: 5
  }
]

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection 