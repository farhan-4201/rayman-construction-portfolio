const TestimonialCard = ({ quote, author, position, avatar }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-16 h-16 mb-4">
            <img
              src={avatar || "/images/avatar-placeholder.jpg"}
              alt={author}
              className="rounded-full object-cover border-2 border-yellow-500"
            />
          </div>
          <p className="text-gray-600 italic mb-4">"{quote}"</p>
          <h4 className="font-bold">{author}</h4>
          <p className="text-sm text-gray-500">{position}</p>
        </div>
      </div>
    )
  }
  
  const TestimonialsSection = () => {
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Construct delivered our office building on time and within budget. Their attention to detail and quality of work exceeded our expectations."
              author="John Smith"
              position="CEO, Tech Innovations"
              avatar="/images/testimonial1.jpg"
            />
            <TestimonialCard
              quote="We hired Construct for our home renovation project and couldn't be happier with the results. Their team was professional, skilled, and a pleasure to work with."
              author="Sarah Johnson"
              position="Homeowner"
              avatar="/images/testimonial2.jpg"
            />
            <TestimonialCard
              quote="As a property developer, I've worked with many construction companies, but Construct stands out for their reliability and exceptional craftsmanship."
              author="Michael Brown"
              position="Director, Urban Developments"
              avatar="/images/testimonial3.jpg"
            />
          </div>
        </div>
      </section>
    )
  }
  
  export default TestimonialsSection
  