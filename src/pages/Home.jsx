import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Zap, Shield, Truck } from 'lucide-react'

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 text-white min-h-screen page-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="animate-fade-in">
            <img 
              src="/ShopEase logo.png" 
              alt="ShopEase Logo" 
              className="h-24 w-auto mx-auto mb-6 animate-float"
            />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Welcome to <span className="text-yellow-300">ShopEase</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100 animate-fade-in delay-100">
              Discover amazing products at unbeatable prices
            </p>
            <Link
              to="/products"
              className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-indigo-50 transition-all hover:scale-105 hover:shadow-xl button-press animate-fade-in delay-200"
            >
              Shop Now <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center card-hover animate-slide-in delay-300">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8" />
            </div>
            <div className="text-5xl font-bold mb-2">500+</div>
            <div className="text-indigo-100">Products Available</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center card-hover animate-slide-in delay-400">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8" />
            </div>
            <div className="text-5xl font-bold mb-2">24/7</div>
            <div className="text-indigo-100">Customer Support</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center card-hover animate-slide-in delay-500">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8" />
            </div>
            <div className="text-5xl font-bold mb-2">Free</div>
            <div className="text-indigo-100">Shipping on Orders $50+</div>
          </div>
        </div>

        <div className="mt-20 text-center animate-fade-in delay-500">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <Shield className="w-5 h-5" />
            <span className="text-sm font-medium">100% Secure Checkout</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
