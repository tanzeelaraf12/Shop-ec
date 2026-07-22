import { useParams, Link } from 'react-router-dom'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import { ArrowLeft, Star, ShoppingCart, Check, Package, Truck, Shield } from 'lucide-react'
import { useState } from 'react'

const ProductDetail = () => {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [selectedColor, setSelectedColor] = useState(0)
  const [addedToCart, setAddedToCart] = useState(false)
  const product = products.find((p) => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 page-transition">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
          <Link to="/products" className="text-indigo-600 hover:underline mt-4 inline-block">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    const selectedColorName = product.colors[selectedColor]
    addToCart(product, selectedColorName)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Best Seller':
        return 'bg-yellow-500'
      case 'New':
        return 'bg-green-500'
      case 'Popular':
        return 'bg-purple-500'
      case 'Sale':
        return 'bg-red-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 page-transition">
      <Link
        to="/products"
        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-8 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="animate-fade-in">
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-2xl shadow-2xl image-zoom"
            />
            {product.badge && (
              <span className={`absolute top-4 left-4 ${getBadgeColor(product.badge)} text-white text-sm font-bold px-4 py-2 rounded-full badge-pop`}>
                {product.badge}
              </span>
            )}
          </div>
          <div className="flex gap-2 mt-4">
            {[product.image, product.image, product.image].map((img, i) => (
              <div
                key={i}
                className="w-20 h-20 rounded-lg overflow-hidden border-2 border-transparent hover:border-indigo-500 transition-colors cursor-pointer"
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="animate-slide-in">
          <span className="inline-block bg-indigo-100 text-indigo-800 text-sm px-4 py-2 rounded-full mb-4">
            {product.category}
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {product.name}
          </h1>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-gray-200'}`}
                />
              ))}
            </div>
            <span className="text-gray-600">{product.rating} / 5</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">{product.reviews} reviews</span>
            <span className="text-gray-400">|</span>
            <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>

          <p className="text-gray-600 text-lg mb-6 leading-relaxed">{product.description}</p>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-4xl font-bold text-indigo-600">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <>
                <span className="text-xl text-gray-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
                <span className="bg-red-100 text-red-600 text-sm font-bold px-3 py-1 rounded-full">
                  Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </span>
              </>
            )}
          </div>

          {product.colors && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Color: {product.colors[selectedColor]}</h3>
              <div className="flex gap-2">
                {product.colors.map((color, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(i)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedColor === i ? 'border-indigo-600 scale-110' : 'border-gray-200 hover:border-gray-400'
                    }`}
                    style={{ backgroundColor: color.toLowerCase() }}
                    title={color}
                  />
                ))}
              </div>
            </div>
          )}

          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`w-full py-4 rounded-lg text-lg font-semibold transition-all button-press flex items-center justify-center gap-2 ${
              addedToCart
                ? 'bg-green-600 text-white'
                : product.inStock
                ? 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {addedToCart ? (
              <>
                <Check className="w-5 h-5" />
                Added to Cart!
              </>
            ) : (
              <>
                <ShoppingCart className="w-5 h-5" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </>
            )}
          </button>

          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="flex items-center gap-2 text-gray-600">
              <Truck className="w-5 h-5 text-indigo-600" />
              <span className="text-sm">Free Shipping</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Shield className="w-5 h-5 text-indigo-600" />
              <span className="text-sm">2 Year Warranty</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Package className="w-5 h-5 text-indigo-600" />
              <span className="text-sm">Easy Returns</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in delay-200">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Features</h2>
          <ul className="space-y-3">
            {product.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Specifications</h2>
          <div className="space-y-3">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                <span className="text-gray-600 font-medium">{key}</span>
                <span className="text-gray-900">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
