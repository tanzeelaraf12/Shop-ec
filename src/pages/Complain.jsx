import { AlertTriangle, FileText, Clock, CheckCircle, Phone, Mail } from 'lucide-react'
import { useState } from 'react'

const Complain = () => {
  const [formData, setFormData] = useState({
    orderNumber: '',
    email: '',
    category: '',
    description: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Your complaint has been submitted successfully! We will review it and get back to you within 24-48 hours.')
    setFormData({ orderNumber: '', email: '', category: '', description: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 page-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">File a Complaint</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're sorry to hear you had an issue. Please let us know so we can make it right.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center card-hover">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Submit Details</h3>
            <p className="text-gray-600 text-sm">Provide your order information and describe the issue</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center card-hover">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-brand" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Quick Review</h3>
            <p className="text-gray-600 text-sm">Our team reviews your complaint within 24-48 hours</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center card-hover">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Resolution</h3>
            <p className="text-gray-600 text-sm">We work to resolve your issue and provide a solution</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Complaint Form</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Order Number</label>
                  <input
                    type="text"
                    name="orderNumber"
                    value={formData.orderNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                    placeholder="ORD-12345"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Complaint Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                >
                  <option value="">Select a category</option>
                  <option value="product">Product Issue</option>
                  <option value="shipping">Shipping Problem</option>
                  <option value="payment">Payment Issue</option>
                  <option value="refund">Refund Request</option>
                  <option value="quality">Quality Concern</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-all resize-none"
                  placeholder="Please describe your issue in detail..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand text-white py-3 px-6 rounded-lg font-semibold hover:bg-brand-dark transition-all hover:scale-105 flex items-center justify-center gap-2 button-press"
              >
                <AlertTriangle className="w-5 h-5" />
                Submit Complaint
              </button>
            </form>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 mb-2">Need immediate assistance?</h4>
            <p className="text-gray-600 mb-4">
              For urgent issues, please contact our customer support team directly:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+15551234567" className="flex items-center gap-2 text-brand hover:underline">
                <Phone className="w-4 h-4" />
                +1 (555) 123-4567
              </a>
              <a href="mailto:support@shopease.com" className="flex items-center gap-2 text-brand hover:underline">
                <Mail className="w-4 h-4" />
                support@shopease.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Complain
