import { Heart, Users, Target, Award } from 'lucide-react'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 page-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About ShopEase</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted destination for quality products and exceptional shopping experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
            <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-brand" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              At ShopEase, we're committed to providing our customers with high-quality products at competitive prices. 
              We believe in making shopping convenient, enjoyable, and accessible to everyone.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
            <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-brand" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become the most trusted and customer-centric e-commerce platform, known for quality, 
              reliability, and exceptional service that exceeds expectations.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
            <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-brand" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Team</h3>
            <p className="text-gray-600 leading-relaxed">
              Our dedicated team of professionals works tirelessly to ensure you have the best shopping experience. 
              From product selection to customer support, we're here for you.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
            <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-brand" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-600 leading-relaxed">
              Integrity, quality, customer satisfaction, and innovation are at the core of everything we do. 
              We strive to build lasting relationships with our customers.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-brand-light via-brand to-brand-dark rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-xl text-blue-100 mb-8">
            Be part of our growing community of satisfied customers
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
