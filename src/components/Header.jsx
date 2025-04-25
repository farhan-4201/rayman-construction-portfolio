"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Phone, Mail, MapPin } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let timeout;
    const handleMouseMove = (e) => {
      if (e.clientY < 100) {
        setIsVisible(true);
        clearTimeout(timeout);
      } else {
        timeout = setTimeout(() => setIsVisible(false), 1000);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      } ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-yellow-500 hover:text-yellow-600 transition-colors">
            Rayman
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link
            to="/"
            className="font-medium hover:text-yellow-500 transition-colors hover:underline"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="font-medium hover:text-yellow-500 transition-colors hover:underline"
          >
            About
          </Link>
          <Link
            to="/services"
            className="font-medium hover:text-yellow-500 transition-colors hover:underline"
          >
            Services
          </Link>
          <Link
            to="/projects"
            className="font-medium hover:text-yellow-500 transition-colors hover:underline"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="font-medium hover:text-yellow-500 transition-colors hover:underline"
          >
            Contact
          </Link>
        </nav>

        {/* Contact Info - Desktop */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex items-center">
            <Phone className="h-4 w-4 text-yellow-500 mr-2" />
            <span className="text-sm">197 4009989</span>
          </div>
          <Link to="/contact">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded transition-transform transform hover:scale-105">
              Get a Quote
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md"
          onClick={toggleMenu}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-lg font-medium hover:text-yellow-500 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-lg font-medium hover:text-yellow-500 transition-colors"
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-lg font-medium hover:text-yellow-500 transition-colors"
              >
                Services
              </Link>
              <Link
                to="/projects"
                className="text-lg font-medium hover:text-yellow-500 transition-colors"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="text-lg font-medium hover:text-yellow-500 transition-colors"
              >
                Contact
              </Link>
            </nav>
            <div className="mt-6 space-y-4 py-4 border-t">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-yellow-500 mr-3" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-yellow-500 mr-3" />
                <span>info@constructcompany.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-yellow-500 mr-3" />
                <span>123 Construction Way, Building City</span>
              </div>
              <Link to="/contact">
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded transition-transform transform hover:scale-105">
                  Get a Quote
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
