"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Menu, Phone, Mail, MapPin } from "lucide-react"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-yellow-500">Construct</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link to="/" className="font-medium hover:text-yellow-500 transition-colors">
            Home
          </Link>
          <Link to="/about" className="font-medium hover:text-yellow-500 transition-colors">
            About
          </Link>
          <Link to="/services" className="font-medium hover:text-yellow-500 transition-colors">
            Services
          </Link>
          <Link to="/projects" className="font-medium hover:text-yellow-500 transition-colors">
            Projects
          </Link>
          <Link to="/team" className="font-medium hover:text-yellow-500 transition-colors">
            Team
          </Link>
          <Link to="/contact" className="font-medium hover:text-yellow-500 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Contact Info - Desktop */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex items-center">
            <Phone className="h-4 w-4 text-yellow-500 mr-2" />
            <span className="text-sm">(123) 456-7890</span>
          </div>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded">Get a Quote</button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2 rounded-md" onClick={toggleMenu}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-lg font-medium hover:text-yellow-500 transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-lg font-medium hover:text-yellow-500 transition-colors">
                About
              </Link>
              <Link to="/services" className="text-lg font-medium hover:text-yellow-500 transition-colors">
                Services
              </Link>
              <Link to="/projects" className="text-lg font-medium hover:text-yellow-500 transition-colors">
                Projects
              </Link>
              <Link to="/team" className="text-lg font-medium hover:text-yellow-500 transition-colors">
                Team
              </Link>
              <Link to="/contact" className="text-lg font-medium hover:text-yellow-500 transition-colors">
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
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
