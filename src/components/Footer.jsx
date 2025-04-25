import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Construct</h3>
            <p className="text-gray-400 mb-6">
              Building excellence since 2005. We are committed to providing quality construction services for all your
              needs.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">2565 Ocean Parkway, Brooklyn, NY 11235</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">(197) 4009989</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">raymanconstruction537@gmail.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter to receive updates and news.</p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded"
              />
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Construct. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
