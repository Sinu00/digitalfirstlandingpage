import Link from "next/link"
import { Gift, Heart, Star, Palette, Camera, Package, Truck } from "lucide-react"

export default function CustomGiftsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 font-bold text-2xl rounded-lg shadow-lg">
                DIGITAL FIRST
              </div>
              <div className="ml-3 text-gray-700 text-sm font-medium">Print & Design Solutions</div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</Link>
              <Link href="/printing-services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Printing Services</Link>
              <Link href="/custom-gifts" className="text-blue-600 font-medium">Custom Gifts</Link>
              <Link href="/photo-studio" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Photo Studio</Link>
              <Link href="/signage" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Signage</Link>
              <Link href="/locations" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Locations</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Custom Gifts</h1>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto">
            Create unforgettable moments with personalized gifts that speak from the heart. 
            From custom mugs to photo albums, we bring your ideas to life.
          </p>
        </div>
      </section>

      {/* Gift Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Personalized Gift Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our wide range of customizable gift options for every occasion and recipient.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Photo Gifts */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Photo Gifts</h3>
              <p className="text-gray-600 mb-6">
                Transform your precious memories into beautiful personalized gifts that last a lifetime.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Custom Photo Mugs</li>
                <li>• Photo Albums & Frames</li>
                <li>• Personalized Calendars</li>
                <li>• Canvas Prints</li>
                <li>• Photo Books</li>
              </ul>
            </div>

            {/* Textile Gifts */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Package className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Textile Gifts</h3>
              <p className="text-gray-600 mb-6">
                Comfortable and stylish personalized clothing and accessories for everyone.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Custom T-Shirts</li>
                <li>• Personalized Hoodies</li>
                <li>• Embroidered Caps</li>
                <li>• Custom Bags</li>
                <li>• Personalized Towels</li>
              </ul>
            </div>

            {/* Home & Office */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Home & Office</h3>
              <p className="text-gray-600 mb-6">
                Add a personal touch to your living and working spaces with custom items.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Custom Mugs & Cups</li>
                <li>• Personalized Stationery</li>
                <li>• Custom Mouse Pads</li>
                <li>• Personalized Keychains</li>
                <li>• Custom Coasters</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfect for Every Occasion</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether it's a birthday, anniversary, wedding, or just because, we have the perfect personalized gift.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-4">
              <div className="bg-pink-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Birthdays</h3>
              <p className="text-gray-600">Make their special day unforgettable</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-red-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Star className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Anniversaries</h3>
              <p className="text-gray-600">Celebrate love with personalized gifts</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Gift className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Weddings</h3>
              <p className="text-gray-600">Unique gifts for the happy couple</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Palette className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Corporate</h3>
              <p className="text-gray-600">Professional branded gifts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creating your perfect personalized gift is simple and fun with our easy process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-6">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Choose Your Gift</h3>
              <p className="text-gray-600">
                Browse our extensive collection of customizable gifts and select the perfect item for your recipient.
              </p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Customize & Design</h3>
              <p className="text-gray-600">
                Add your personal touch with photos, text, or designs using our easy-to-use customization tools.
              </p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Receive Your Gift</h3>
              <p className="text-gray-600">
                We'll create your personalized gift with care and deliver it to you or directly to your recipient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Start Creating Your Perfect Gift</h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Visit our design studio or browse our online catalog to create something truly special.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/design-studio" className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Design Studio
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors">
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 font-bold text-xl rounded mb-4 inline-block">
                DIGITAL FIRST
              </div>
              <p className="text-gray-400">
                Your complete digital printing and design solution with over 38 years of excellence.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/printing-services" className="hover:text-white transition-colors">Printing Services</Link></li>
                <li><Link href="/custom-gifts" className="hover:text-white transition-colors">Custom Gifts</Link></li>
                <li><Link href="/photo-studio" className="hover:text-white transition-colors">Photo Studio</Link></li>
                <li><Link href="/signage" className="hover:text-white transition-colors">Signage</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Locations</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/locations/dubai" className="hover:text-white transition-colors">Dubai</Link></li>
                <li><Link href="/locations/abu-dhabi" className="hover:text-white transition-colors">Abu Dhabi</Link></li>
                <li><Link href="/locations/sharjah" className="hover:text-white transition-colors">Sharjah</Link></li>
                <li><Link href="/locations/canada" className="hover:text-white transition-colors">Canada</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <span className="text-sm">+971 58 987 5122</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm">gifts@digitalfirst.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Digital First. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 