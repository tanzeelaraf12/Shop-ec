import { products } from '../data/products'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { ShoppingCart, Star, Check } from 'lucide-react'
import { useState, useMemo } from 'react'

const Products = () => {
  const { addToCart } = useCart()
  const [selectedColors, setSelectedColors] = useState({})
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = useMemo(() => {
    const cats = ['All', ...new Set(products.map(p => p.category))]
    return cats
  }, [])

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') return products
    return products.filter(p => p.category === selectedCategory)
  }, [selectedCategory])

  const handleAddToCart = (product, e) => {
    e.preventDefault()
    const selectedColor = selectedColors[product.id]
    if (!selectedColor) {
      alert('Please select a color first')
      return
    }
    addToCart(product, selectedColor)
  }

  const handleColorSelect = (productId, color) => {
    setSelectedColors((prev) => ({ ...prev, [productId]: color }))
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
      <h1 className="text-4xl font-bold text-gray-900 mb-2 animate-fade-in">Electronics</h1>
      <p className="text-gray-600 mb-8 animate-fade-in delay-100">Discover our curated collection of premium electronics</p>
      
      <div className="flex flex-wrap gap-3 mb-8 animate-fade-in delay-100">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all button-press ${
              selectedCategory === category
                ? 'bg-indigo-600 text-white shadow-lg scale-105'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md overflow-hidden card-hover animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
          >
            <div className="relative overflow-hidden">
              <Link to={`/products/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover image-zoom"
                />
              </Link>
              {product.badge && (
                <span className={`absolute top-3 left-3 ${getBadgeColor(product.badge)} text-white text-xs font-bold px-3 py-1 rounded-full badge-pop`}>
                  {product.badge}
                </span>
              )}
              {product.originalPrice && (
                <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full badge-pop">
                  -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </span>
              )}
            </div>
            <div className="p-4">
              <Link to={`/products/${product.id}`}>
                <h3 className="text-lg font-semibold text-gray-900 hover:text-indigo-600 transition-colors">
                  {product.name}
                </h3>
              </Link>
              <p className="text-gray-500 text-sm mt-1">{product.category}</p>
              <div className="flex items-center mt-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-gray-200'}`}
                    />
                  ))}
                </div>
                <span className="text-gray-600 text-sm ml-2">
                  {product.rating} ({product.reviews})
                </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-2xl font-bold text-indigo-600">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              <div className="mt-3">
                <p className="text-sm font-medium text-gray-700 mb-2">Select Color:</p>
                <div className="flex items-center gap-2 flex-wrap">
                  {product.colors.map((color, i) => (
                    <button
                      key={i}
                      onClick={() => handleColorSelect(product.id, color)}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${
                        selectedColors[product.id] === color
                          ? 'border-indigo-600 scale-110 ring-2 ring-indigo-300'
                          : 'border-gray-200 hover:border-gray-400'
                      }`}
                      style={{ backgroundColor: color.toLowerCase() }}
                      title={color}
                    />
                  ))}
                </div>
                {selectedColors[product.id] && (
                  <p className="text-sm text-indigo-600 mt-2 font-medium">
                    Selected: {selectedColors[product.id]}
                  </p>
                )}
              </div>
              <button
                onClick={(e) => handleAddToCart(product, e)}
                disabled={!selectedColors[product.id]}
                className={`w-full mt-4 py-2 rounded-lg transition-colors button-press flex items-center justify-center gap-2 group ${
                  selectedColors[product.id]
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <ShoppingCart className="w-4 h-4 group-hover:animate-bounce-custom" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
