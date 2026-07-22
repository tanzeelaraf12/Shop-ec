import { useCart } from '../context/CartContext'
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart()

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 page-transition">
        <div className="text-center animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center animate-float">
            <ShoppingBag className="w-16 h-16 text-gray-300" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">Looks like you haven't added any items yet</p>
          <Link
            to="/products"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-all hover:scale-105 button-press"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  const shippingCost = cartTotal >= 50 ? 0 : 5.99
  const tax = cartTotal * 0.08
  const total = cartTotal + shippingCost + tax

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 page-transition">
      <h1 className="text-4xl font-bold text-gray-900 mb-2 animate-fade-in">Shopping Cart</h1>
      <p className="text-gray-600 mb-8 animate-fade-in delay-100">You have {cart.length} item{cart.length !== 1 ? 's' : ''} in your cart</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item, index) => (
            <div
              key={`${item.id}-${item.selectedColor}`}
              className="bg-white rounded-xl shadow-md p-4 flex items-center gap-4 card-hover animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
            >
              <Link to={`/products/${item.id}`} className="flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg image-zoom"
                />
              </Link>
              <div className="flex-1">
                <Link
                  to={`/products/${item.id}`}
                  className="text-lg font-semibold text-gray-900 hover:text-indigo-600 transition-colors"
                >
                  {item.name}
                </Link>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-gray-500">Color:</span>
                  <span 
                    className="w-4 h-4 rounded-full border-2 border-gray-300"
                    style={{ backgroundColor: item.selectedColor?.toLowerCase() || 'gray' }}
                    title={item.selectedColor}
                  />
                  <span className="text-sm font-medium text-gray-700">{item.selectedColor}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.selectedColor, item.quantity - 1)}
                  className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors flex items-center justify-center button-press"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center font-semibold">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.selectedColor, item.quantity + 1)}
                  className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors flex items-center justify-center button-press"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-indigo-600">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id, item.selectedColor)}
                className="text-red-500 hover:text-red-700 transition-colors p-2 hover:bg-red-50 rounded-lg button-press"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 h-fit animate-fade-in delay-300">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span className={shippingCost === 0 ? 'text-green-600 font-medium' : ''}>
                {shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}
              </span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between text-xl font-bold text-gray-900">
              <span>Total</span>
              <span className="text-indigo-600">${total.toFixed(2)}</span>
            </div>
          </div>
          <Link
            to="/checkout"
            className="block w-full bg-indigo-600 text-white py-3 rounded-lg text-center font-semibold hover:bg-indigo-700 transition-all hover:scale-105 button-press"
          >
            Proceed to Checkout
          </Link>
          <Link
            to="/products"
            className="block w-full mt-3 text-center text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            Continue Shopping
          </Link>
          {shippingCost > 0 && (
            <p className="text-sm text-gray-500 mt-4 text-center">
              Add ${(50 - cartTotal).toFixed(2)} more for free shipping!
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart
