import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Car, Building, Globe } from "lucide-react"

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
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
              <Link href="/custom-gifts" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Custom Gifts</Link>
              <Link href="/photo-studio" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Photo Studio</Link>
              <Link href="/signage" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Signage</Link>
              <Link href="/locations" className="text-blue-600 font-medium">Locations</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Locations</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            With over 50 locations across Dubai, Abu Dhabi, Sharjah, and Canada, 
            there's always a Digital First center near you.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Locations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">38+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Your Nearest Location</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our locations by region and find the Digital First center closest to you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dubai */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Dubai</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Multiple locations across Dubai serving all your printing and design needs.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-3" />
                  <span>25+ Locations</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-3" />
                  <span>24/7 Service Available</span>
                </div>
              </div>
              <Link href="/locations/dubai" className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                View Dubai Locations
              </Link>
            </div>

            {/* Abu Dhabi */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Abu Dhabi</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Our original location since 1987, serving Abu Dhabi with excellence.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-3" />
                  <span>15+ Locations</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-3" />
                  <span>Extended Hours</span>
                </div>
              </div>
              <Link href="/locations/abu-dhabi" className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                View Abu Dhabi Locations
              </Link>
            </div>

            {/* Sharjah */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Sharjah</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Growing network of locations serving the Sharjah community.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-3" />
                  <span>8+ Locations</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-3" />
                  <span>Business Hours</span>
                </div>
              </div>
              <Link href="/locations/sharjah" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                View Sharjah Locations
              </Link>
            </div>

            {/* Canada */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-red-600 to-orange-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Canada</h3>
              </div>
              <p className="text-gray-600 mb-6">
                International expansion bringing Digital First services to Canada.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-3" />
                  <span>5+ Locations</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-3" />
                  <span>Local Hours</span>
                </div>
              </div>
              <Link href="/locations/canada" className="inline-block bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                View Canada Locations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Location */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Location</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our newest location in Azizi Riviera, Dubai - now open and ready to serve you.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-white/20 rounded-lg p-4 inline-block mb-6">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Azizi Riviera - Dubai</h3>
                <p className="text-blue-100 mb-6">
                  Unit No. 25, Azizi Riviera3, Al Markada<br />
                  Nad Al Sheba 1, Dubai
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3" />
                    <span>+971 58 987 5122</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3" />
                    <span>azizi3@digitalfirst.com</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-3" />
                    <span>Open 24/7</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-lg p-6">
                  <div className="text-4xl font-bold mb-2">NOW OPEN</div>
                  <div className="text-xl">Visit Today!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Services Available at All Locations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every Digital First location offers our complete range of services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-4">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">🖨️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Printing Services</h3>
              <p className="text-gray-600 text-sm">Digital & offset printing</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">🎁</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Custom Gifts</h3>
              <p className="text-gray-600 text-sm">Personalized gift items</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">📸</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Photo Studio</h3>
              <p className="text-gray-600 text-sm">Professional photography</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">🚗</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Signage</h3>
              <p className="text-gray-600 text-sm">Banners & vehicle wraps</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Find Your Nearest Digital First</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Visit any of our locations and experience our professional services firsthand.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Us
            </Link>
            <Link href="/printing-services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Our Services
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
                  <Phone className="h-4 w-4 mr-2" />
                  +971 58 987 5122
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  info@digitalfirst.com
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