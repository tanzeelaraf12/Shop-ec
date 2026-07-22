import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">ShopEase</h3>
            <p className="text-gray-400 text-sm">
              Your one-stop destination for premium electronics and accessories. Quality products, unbeatable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors text-sm">Products</Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-white transition-colors text-sm">Cart</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="hover:text-white transition-colors text-sm">Headphones</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors text-sm">Speakers</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors text-sm">Keyboards</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors text-sm">Mouse</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4" />
                <span>support@shopease.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4" />
                <span>123 Tech Street, Digital City</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} ShopEase. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-2 md:mt-0">
            Designed & Developed by Tanzeela Rafique
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
