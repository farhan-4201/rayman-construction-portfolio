import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-50 via-white to-yellow-100 min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <div className="bg-gradient-to-br from-yellow-50 via-white to-yellow-100 min-h-screen">
      <AboutSection />
      </div>
      <ServicesSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
