import { products } from '../data/products'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { ShoppingCart, Star, Heart, Eye, Zap, Sparkles } from 'lucide-react'
import { useState, useMemo } from 'react'

const Products = () => {
  const { addToCart } = useCart()
  const [selectedColors, setSelectedColors] = useState({})
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [hoveredProduct, setHoveredProduct] = useState(null)
  const [wishlist, setWishlist] = useState(new Set())

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

  const toggleWishlist = (productId, e) => {
    e.preventDefault()
    e.stopPropagation()
    setWishlist((prev) => {
      const newWishlist = new Set(prev)
      if (newWishlist.has(productId)) {
        newWishlist.delete(productId)
      } else {
        newWishlist.add(productId)
      }
      return newWishlist
    })
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50 page-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">Premium Collection</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Electronics
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our curated collection of premium electronics with cutting-edge technology
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in delay-100">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-3 rounded-full font-semibold transition-all button-press flex items-center gap-2 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xl scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
              }`}
            >
              {category === 'All' && <Zap className="w-4 h-4" />}
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden card-hover animate-fade-in transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <Link to={`/products/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover image-zoom transition-transform duration-500 group-hover:scale-110"
                  />
                </Link>
                
                {/* Quick Actions Overlay */}
                <div className={`absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3`}>
                  <button
                    onClick={(e) => toggleWishlist(product.id, e)}
                    className={`p-3 rounded-full transition-all transform hover:scale-110 ${
                      wishlist.has(product.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white text-gray-700 hover:text-red-500'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${wishlist.has(product.id) ? 'fill-current' : ''}`} />
                  </button>
                  <Link
                    to={`/products/${product.id}`}
                    className="p-3 rounded-full bg-white text-gray-700 hover:text-indigo-600 transition-all transform hover:scale-110"
                  >
                    <Eye className="w-5 h-5" />
                  </Link>
                </div>

                {product.badge && (
                  <span className={`absolute top-4 left-4 ${getBadgeColor(product.badge)} text-white text-xs font-bold px-4 py-2 rounded-full badge-pop shadow-lg`}>
                    {product.badge}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-2 rounded-full badge-pop shadow-lg">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                )}
              </div>
              
              <div className="p-6">
                <Link to={`/products/${product.id}`}>
                  <h3 className="text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-indigo-600 text-sm font-medium mt-1">{product.category}</p>
                
                <div className="flex items-center mt-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-gray-200'}`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm ml-2 font-medium">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                
                <div className="flex items-center gap-3 mt-3">
                  <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                
                <div className="mt-4">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Select Color:</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    {product.colors.map((color, i) => (
                      <button
                        key={i}
                        onClick={() => handleColorSelect(product.id, color)}
                        className={`w-9 h-9 rounded-full border-2 transition-all transform hover:scale-110 ${
                          selectedColors[product.id] === color
                            ? 'border-indigo-600 scale-110 ring-4 ring-indigo-200 shadow-lg'
                            : 'border-gray-300 hover:border-indigo-400'
                        }`}
                        style={{ backgroundColor: color.toLowerCase() }}
                        title={color}
                      />
                    ))}
                  </div>
                  {selectedColors[product.id] && (
                    <p className="text-sm text-indigo-600 mt-2 font-semibold flex items-center gap-1">
                      <Check className="w-4 h-4" />
                      Selected: {selectedColors[product.id]}
                    </p>
                  )}
                </div>
                
                <button
                  onClick={(e) => handleAddToCart(product, e)}
                  disabled={!selectedColors[product.id]}
                  className={`w-full mt-5 py-3 rounded-xl font-semibold transition-all button-press flex items-center justify-center gap-2 group ${
                    selectedColors[product.id]
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart className="w-5 h-5 group-hover:animate-bounce-custom" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
