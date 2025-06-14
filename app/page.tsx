import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Phone, Mail, MapPin, Clock, Printer, Palette, Camera, Gift, FileText } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 font-bold text-2xl rounded-lg shadow-lg">
                DIGITAL FIRST
              </div>
              <div className="ml-3 text-gray-700 text-sm font-medium">Print & Design Solutions</div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium flex items-center transition-colors">
                Home <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <Link href="/printing-services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Printing Services
              </Link>
              <Link href="/custom-gifts" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Custom Gifts
              </Link>
              <Link href="/photo-studio" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Photo Studio
              </Link>
              <Link href="/signage" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Signage
              </Link>
              <Link href="/locations" className="text-gray-700 hover:text-blue-600 font-medium flex items-center transition-colors">
                Locations <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
            </nav>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center text-blue-600">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">+971 58 987 5122</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  Your Complete
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Digital</span>
                  <br />
                  Printing Solution
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  From concept to completion, we deliver premium printing and design services with cutting-edge technology and unmatched quality.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/printing-services" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  Get Started
                </Link>
                <Link href="/locations" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Find Location
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">38+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white shadow-2xl">
                <div className="text-center space-y-4">
                  <div className="bg-white/20 rounded-lg p-4 inline-block">
                    <Clock className="h-8 w-8 mx-auto" />
                  </div>
                  <div className="space-y-2">
                    <div className="font-bold text-2xl">NOW OPEN</div>
                    <h2 className="text-xl font-semibold">AZIZI RIVIERA</h2>
                    <h3 className="text-lg">DUBAI</h3>
                  </div>
                  <p className="text-blue-100">
                    Unit No. 25, Azizi Riviera3, Al Markada<br />
                    Nad Al Sheba 1, Dubai
                  </p>
                  <div className="flex justify-center space-x-6 text-sm">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      +971 58 987 5122
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      azizi3@digitalfirst.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Can We Help You?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of digital printing and design services tailored to meet your every need.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Print Service */}
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Printer className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                I want to
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">print</span>
              </h3>
              <h4 className="font-semibold text-gray-800 mb-4">Digital & Offset Printing</h4>
              <p className="text-gray-600 leading-relaxed">
                State-of-the-art digital and offset printing facilities under one roof. Guaranteed delivery on time with premium quality at competitive rates.
              </p>
              <Link href="/printing-services" className="inline-block mt-6 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Learn More →
              </Link>
            </div>

            {/* Self-Print Service */}
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                I want to
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">self-print</span>
              </h3>
              <h4 className="font-semibold text-gray-800 mb-4">Mobile Printing</h4>
              <p className="text-gray-600 leading-relaxed">
                Contactless printing service with secure self-printing stations. Print directly from your mobile, tablet, or laptop with complete privacy.
              </p>
              <Link href="/mobile-printing" className="inline-block mt-6 text-green-600 font-semibold hover:text-green-700 transition-colors">
                Learn More →
              </Link>
            </div>

            {/* Design Service */}
            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Palette className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                I want to
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">design</span>
              </h3>
              <h4 className="font-semibold text-gray-800 mb-4">Graphic Design Studio</h4>
              <p className="text-gray-600 leading-relaxed">
                Professional design services for logos, invitations, marketing materials, business cards, and more. One-stop solution for all your design needs.
              </p>
              <Link href="/design-studio" className="inline-block mt-6 text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                Learn More →
              </Link>
            </div>

            {/* Curious Service */}
            <div className="group bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                I'm just
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">curious</span>
              </h3>
              <h4 className="font-semibold text-gray-800 mb-4">Learn More About Us</h4>
              <p className="text-gray-600 leading-relaxed">
                Discover our story, explore our services, or get help with your printing needs. Our expert team is available 24/7 to assist you.
              </p>
              <Link href="/about" className="inline-block mt-6 text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Digital First?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With over three decades of experience, we've built a reputation for excellence, innovation, and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Fast Turnaround</h3>
              <p className="text-gray-600">Quick delivery times with guaranteed quality, no matter the volume of your order.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-indigo-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Printer className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Latest Technology</h3>
              <p className="text-gray-600">State-of-the-art digital and offset printing equipment for superior results.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">50+ Locations</h3>
              <p className="text-gray-600">Convenient locations across Dubai, Abu Dhabi, Sharjah, and Canada.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Visit your nearest Digital First location or contact us today to discuss your printing and design needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/locations" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Find a Location
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact Us
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
                <li><Link href="/design-studio" className="hover:text-white transition-colors">Design Studio</Link></li>
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