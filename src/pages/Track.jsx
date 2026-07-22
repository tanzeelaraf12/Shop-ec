import { Search, Package, Truck, CheckCircle, Clock, MapPin } from 'lucide-react'
import { useState } from 'react'

const Track = () => {
  const [orderId, setOrderId] = useState('')
  const [trackingResult, setTrackingResult] = useState(null)

  const handleTrack = (e) => {
    e.preventDefault()
    // Simulated tracking data
    if (orderId) {
      setTrackingResult({
        orderId: orderId,
        status: 'In Transit',
        estimatedDelivery: 'July 25, 2026',
        currentLocation: 'Distribution Center, New York',
        steps: [
          { status: 'completed', title: 'Order Placed', date: 'July 18, 2026', description: 'Your order has been confirmed' },
          { status: 'completed', title: 'Order Processing', date: 'July 19, 2026', description: 'Your order is being prepared' },
          { status: 'completed', title: 'Shipped', date: 'July 20, 2026', description: 'Your order has been shipped' },
          { status: 'current', title: 'In Transit', date: 'July 21, 2026', description: 'Your order is on its way' },
          { status: 'pending', title: 'Out for Delivery', date: 'Estimated: July 24, 2026', description: 'Your order will be delivered soon' },
          { status: 'pending', title: 'Delivered', date: 'Estimated: July 25, 2026', description: 'Order delivered to your address' }
        ]
      })
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-600" />
      case 'current':
        return <Truck className="w-6 h-6 text-brand animate-pulse" />
      case 'pending':
        return <Clock className="w-6 h-6 text-gray-400" />
      default:
        return <Clock className="w-6 h-6 text-gray-400" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 border-green-500'
      case 'current':
        return 'bg-brand/10 border-brand'
      case 'pending':
        return 'bg-gray-100 border-gray-300'
      default:
        return 'bg-gray-100 border-gray-300'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 page-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Track Your Order</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enter your order ID to get real-time updates on your shipment
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <form onSubmit={handleTrack} className="flex gap-4">
            <div className="flex-grow">
              <input
                type="text"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="Enter your Order ID (e.g., ORD-12345)"
                className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand focus:border-transparent transition-all text-lg"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-brand text-white px-8 py-4 rounded-xl font-semibold hover:bg-brand-dark transition-all hover:scale-105 flex items-center gap-2 button-press"
            >
              <Search className="w-5 h-5" />
              Track
            </button>
          </form>
        </div>

        {trackingResult && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Order #{trackingResult.orderId}</h3>
                  <div className="flex items-center gap-2 text-brand">
                    <Truck className="w-5 h-5" />
                    <span className="font-semibold">{trackingResult.status}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600 mb-2">Estimated Delivery</div>
                  <div className="text-xl font-bold text-gray-900">{trackingResult.estimatedDelivery}</div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-brand" />
                <div>
                  <span className="text-sm text-gray-600">Current Location: </span>
                  <span className="font-semibold text-gray-900">{trackingResult.currentLocation}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-8">Order Timeline</h3>
              
              <div className="space-y-6">
                {trackingResult.steps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${getStatusColor(step.status)}`}>
                        {getStatusIcon(step.status)}
                      </div>
                      {index < trackingResult.steps.length - 1 && (
                        <div className={`w-0.5 h-16 mt-2 ${step.status === 'completed' ? 'bg-green-500' : 'bg-gray-300'}`} />
                      )}
                    </div>
                    <div className="flex-grow pb-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <h4 className={`text-lg font-semibold ${step.status === 'current' ? 'text-brand' : 'text-gray-900'}`}>
                          {step.title}
                        </h4>
                        <span className="text-sm text-gray-500">{step.date}</span>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {!trackingResult && (
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center card-hover">
                <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-brand" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Enter Order ID</h3>
                <p className="text-gray-600 text-sm">Find your order ID in your confirmation email</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg text-center card-hover">
                <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-brand" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Track Shipment</h3>
                <p className="text-gray-600 text-sm">Get real-time updates on your order status</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg text-center card-hover">
                <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-brand" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Stay Updated</h3>
                <p className="text-gray-600 text-sm">Receive notifications at every step</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Track
