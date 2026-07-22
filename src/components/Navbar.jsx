import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const { cartCount } = useCart()
  const [bounce, setBounce] = useState(false)
  const prevCartCount = useState(0)[0]

  useEffect(() => {
    if (cartCount > prevCartCount) {
      setBounce(true)
      setTimeout(() => setBounce(false), 300)
    }
  }, [cartCount, prevCartCount])

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img 
              src="/shopease-logo.png" 
              alt="ShopEase Logo" 
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold text-brand">ShopEase</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-brand transition-colors font-medium hover:scale-105 transform transition-all"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-gray-700 hover:text-brand transition-colors font-medium hover:scale-105 transform transition-all"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-brand transition-colors font-medium hover:scale-105 transform transition-all"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-brand transition-colors font-medium hover:scale-105 transform transition-all"
            >
              Contact
            </Link>
            <Link
              to="/track"
              className="text-gray-700 hover:text-brand transition-colors font-medium hover:scale-105 transform transition-all"
            >
              Track
            </Link>
            <Link to="/cart" className="relative group">
              <ShoppingCart className={`w-6 h-6 text-gray-700 hover:text-brand transition-colors ${bounce ? 'animate-bounce-custom' : ''}`} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand text-white text-xs rounded-full w-5 h-5 flex items-center justify-center badge-pop">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
