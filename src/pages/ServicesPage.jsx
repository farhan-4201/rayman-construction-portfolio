import { Building2, Hammer, Users, HardHat, Ruler, PaintBucket, Truck, Wrench } from "lucide-react"

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

const ServicesPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <img src="/images/services-hero.jpg" alt="Our Services" className="w-full h-[400px] object-cover" />
        <div className="container mx-auto px-4 relative z-20 flex flex-col items-center justify-center h-[400px] text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg max-w-2xl">Comprehensive construction solutions tailored to your specific needs</p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
            <p className="text-gray-600">
              At Construct, we provide a wide range of construction services to meet all your building needs. From
              initial planning to final completion, our team of experienced professionals is dedicated to delivering
              high-quality results that exceed your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Building2 className="h-16 w-16 text-yellow-500" />}
              title="Commercial Construction"
              description="We specialize in building commercial spaces that are functional, aesthetically pleasing, and aligned with your business objectives. From office buildings to retail spaces, we deliver projects that meet your needs and budget."
            />
            <ServiceCard
              icon={<Hammer className="h-16 w-16 text-yellow-500" />}
              title="Residential Construction"
              description="Build your dream home with our expert residential construction services. Whether you're looking for a custom home, a renovation, or an addition, our team will bring your vision to life with quality craftsmanship."
            />
            <ServiceCard
              icon={<Users className="h-16 w-16 text-yellow-500" />}
              title="Project Management"
              description="Our experienced project managers ensure your construction project runs smoothly from start to finish. We handle scheduling, budgeting, resource allocation, and quality control to deliver successful outcomes."
            />
            <ServiceCard
              icon={<Ruler className="h-16 w-16 text-yellow-500" />}
              title="Architectural Design"
              description="Our architectural design services combine creativity with functionality to create spaces that are both beautiful and practical. We work closely with you to understand your needs and preferences."
            />
            <ServiceCard
              icon={<HardHat className="h-16 w-16 text-yellow-500" />}
              title="Construction Consulting"
              description="Benefit from our expertise in construction with our consulting services. We provide advice on feasibility, cost estimation, material selection, and other aspects of your construction project."
            />
            <ServiceCard
              icon={<PaintBucket className="h-16 w-16 text-yellow-500" />}
              title="Interior Finishing"
              description="Complete your space with our interior finishing services. From painting and flooring to cabinetry and fixtures, we pay attention to every detail to create a polished final product."
            />
            <ServiceCard
              icon={<Truck className="h-16 w-16 text-yellow-500" />}
              title="Site Preparation"
              description="Proper site preparation is crucial for a successful construction project. Our services include clearing, excavation, grading, and other necessary work to prepare your site for building."
            />
            <ServiceCard
              icon={<Wrench className="h-16 w-16 text-yellow-500" />}
              title="Maintenance & Repairs"
              description="Keep your property in top condition with our maintenance and repair services. We address issues promptly and efficiently to prevent small problems from becoming major ones."
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">Our Process</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-12"></div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-500"></div>

              <div className="relative z-10 mb-12">
                <div className="flex items-center">
                  <div className="bg-yellow-500 rounded-full h-12 w-12 flex items-center justify-center text-black font-bold text-xl">
                    1
                  </div>
                  <div className="ml-6 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">Initial Consultation</h3>
                    <p className="text-gray-600">
                      We begin by understanding your vision, requirements, and budget. This helps us establish clear
                      objectives and expectations for your project.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mb-12">
                <div className="flex items-center">
                  <div className="bg-yellow-500 rounded-full h-12 w-12 flex items-center justify-center text-black font-bold text-xl">
                    2
                  </div>
                  <div className="ml-6 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">Planning & Design</h3>
                    <p className="text-gray-600">
                      Our team develops detailed plans and designs for your project, incorporating your feedback and
                      making adjustments as needed to ensure the final design meets your approval.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mb-12">
                <div className="flex items-center">
                  <div className="bg-yellow-500 rounded-full h-12 w-12 flex items-center justify-center text-black font-bold text-xl">
                    3
                  </div>
                  <div className="ml-6 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">Permitting & Approvals</h3>
                    <p className="text-gray-600">
                      We handle all necessary permits and approvals, navigating the regulatory requirements to ensure
                      your project complies with local building codes and regulations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mb-12">
                <div className="flex items-center">
                  <div className="bg-yellow-500 rounded-full h-12 w-12 flex items-center justify-center text-black font-bold text-xl">
                    4
                  </div>
                  <div className="ml-6 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">Construction</h3>
                    <p className="text-gray-600">
                      Our skilled team executes the construction phase with precision and attention to detail, adhering
                      to the highest standards of quality and safety throughout the process.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center">
                  <div className="bg-yellow-500 rounded-full h-12 w-12 flex items-center justify-center text-black font-bold text-xl">
                    5
                  </div>
                  <div className="ml-6 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">Final Inspection & Handover</h3>
                    <p className="text-gray-600">
                      We conduct a thorough inspection to ensure everything meets our quality standards before handing
                      over the completed project to you, along with all necessary documentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-black">Ready to Start Your Project?</h2>
          <p className="text-black text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your construction needs and how we can help bring your vision to life.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
            Get a Free Quote
          </button>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
