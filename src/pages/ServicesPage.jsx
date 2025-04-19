import { Building2, Hammer, Users, HardHat, Ruler, PaintBucket, Truck, Wrench } from "lucide-react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServicesPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[800px]"
        style={{ backgroundImage: "url('/images/services-hero.webp')" }}
      >
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="container mx-auto px-4 relative z-20 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-yellow-500">Services</span>
          </h1>
          <p className="text-lg max-w-2xl">
            Comprehensive construction solutions tailored to your specific needs
          </p>
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
    </div>
  );
};

export default ServicesPage;
