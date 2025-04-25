import { Wrench, PaintBucket, Ruler, HardHat } from "lucide-react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServicesPage = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-50 via-white to-yellow-100 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[800px]"
        style={{ backgroundImage: "url('/images/services-hero.webp')" }}
      >
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="container mx-auto px-4 relative z-20 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-yellow-400">Services</span>
          </h1>
          <p className="text-lg max-w-2xl">
            Comprehensive construction solutions tailored to your specific needs
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">What We Offer</h2>
            <p className="text-gray-600 text-lg">
              At Construct, we provide a wide range of construction services to meet all your building needs. From
              initial planning to final completion, our team of experienced professionals is dedicated to delivering
              high-quality results that exceed your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Wrench className="h-16 w-16 text-yellow-500" />}
              title="Renovations"
              description="Modernize and upgrade existing structures while maintaining their character."
            />
            <ServiceCard
              icon={<PaintBucket className="h-16 w-16 text-yellow-500" />}
              title="Interior Finishing"
              description="Complete your space with our interior finishing services. From painting and flooring to cabinetry and fixtures, we pay attention to every detail to create a polished final product."
            />
            <ServiceCard
              icon={<Ruler className="h-16 w-16 text-yellow-500" />}
              title="Project Planning"
              description="Comprehensive project planning and management from start to finish."
            />
            <ServiceCard
              icon={<HardHat className="h-16 w-16 text-yellow-500" />}
              title="Construction Consulting"
              description="Benefit from our expertise in construction with our consulting services. We provide advice on feasibility, cost estimation, material selection, and other aspects of your construction project."
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
