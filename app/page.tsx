import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Phone, Mail, MapPin, Clock, Printer, Palette, Camera, Gift, FileText, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white px-3 py-2 font-serif font-bold text-xl rounded-md shadow-sm">
                DIGITAL FIRST
              </div>
              <div className="ml-3 text-slate-600 text-sm font-medium hidden sm:block">Print & Design Solutions</div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-blue-700 hover:text-blue-800 font-medium transition-colors text-sm">
                Home
              </Link>
              <Link href="/printing-services" className="text-slate-600 hover:text-blue-700 font-medium transition-colors text-sm">
                Printing Services
              </Link>
              <Link href="/custom-gifts" className="text-slate-600 hover:text-blue-700 font-medium transition-colors text-sm">
                Custom Gifts
              </Link>
              <Link href="/photo-studio" className="text-slate-600 hover:text-blue-700 font-medium transition-colors text-sm">
                Photo Studio
              </Link>
              <Link href="/signage" className="text-slate-600 hover:text-blue-700 font-medium transition-colors text-sm">
                Signage
              </Link>
              <Link href="/locations" className="text-slate-600 hover:text-blue-700 font-medium flex items-center transition-colors text-sm">
                Locations <ChevronDown className="ml-1 h-3 w-3" />
              </Link>
            </nav>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center text-blue-700">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">+971 58 987 5122</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight">
                  Your Complete
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700"> Digital</span>
                  <br />
                  Printing Solution
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                  From concept to completion, we deliver premium printing and design services with cutting-edge technology and unmatched quality.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/printing-services" className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/locations" className="border-2 border-blue-700 text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Find Location
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-700">38+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-700">50+</div>
                  <div className="text-sm text-slate-600">Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-700">24/7</div>
                  <div className="text-sm text-slate-600">Support</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-700 to-indigo-800 rounded-xl p-8 text-white shadow-xl">
                <div className="text-center space-y-4">
                  <div className="bg-white/20 rounded-lg p-4 inline-block">
                    <Clock className="h-8 w-8 mx-auto" />
                  </div>
                  <div className="space-y-2">
                    <div className="font-bold text-xl">NOW OPEN</div>
                    <h2 className="text-lg font-semibold">AZIZI RIVIERA</h2>
                    <h3 className="text-base">DUBAI</h3>
                  </div>
                  <p className="text-blue-100 text-sm">
                    Unit No. 25, Azizi Riviera3, Al Markada<br />
                    Nad Al Sheba 1, Dubai
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
                    <div className="flex items-center justify-center">
                      <Phone className="h-4 w-4 mr-2" />
                      +971 58 987 5122
                    </div>
                    <div className="flex items-center justify-center">
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
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">
              How Can We Help You?
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of digital printing and design services tailored to meet your every need.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Print Service */}
            <div className="group bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Printer className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">
                I want to
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">print</span>
              </h3>
              <h4 className="font-semibold text-slate-800 mb-3 text-sm">Digital & Offset Printing</h4>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                State-of-the-art digital and offset printing facilities under one roof. Guaranteed delivery on time with premium quality at competitive rates.
              </p>
              <Link href="/printing-services" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm">
                Learn More <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>

            {/* Self-Print Service */}
            <div className="group bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-indigo-600 to-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">
                I want to
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-700">self-print</span>
              </h3>
              <h4 className="font-semibold text-slate-800 mb-3 text-sm">Mobile Printing</h4>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Contactless printing service with secure self-printing stations. Print directly from your mobile, tablet, or laptop with complete privacy.
              </p>
              <Link href="/mobile-printing" className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors text-sm">
                Learn More <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>

            {/* Design Service */}
            <div className="group bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-slate-600 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Palette className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">
                I want to
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-blue-600">design</span>
              </h3>
              <h4 className="font-semibold text-slate-800 mb-3 text-sm">Graphic Design Studio</h4>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Professional design services for logos, invitations, marketing materials, business cards, and more. One-stop solution for all your design needs.
              </p>
              <Link href="/design-studio" className="inline-flex items-center text-slate-600 font-semibold hover:text-slate-700 transition-colors text-sm">
                Learn More <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>

            {/* Curious Service */}
            <div className="group bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-blue-700 to-indigo-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">
                I'm just
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700">curious</span>
              </h3>
              <h4 className="font-semibold text-slate-800 mb-3 text-sm">Learn More About Us</h4>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Discover our story, explore our services, or get help with your printing needs. Our expert team is available 24/7 to assist you.
              </p>
              <Link href="/about" className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800 transition-colors text-sm">
                Learn More <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">
              Why Choose Digital First?
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              With over three decades of experience, we've built a reputation for excellence, innovation, and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Fast Turnaround</h3>
              <p className="text-slate-600">Quick delivery times with guaranteed quality, no matter the volume of your order.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-indigo-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Printer className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Latest Technology</h3>
              <p className="text-slate-600">State-of-the-art digital and offset printing equipment for superior results.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-slate-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">50+ Locations</h3>
              <p className="text-slate-600">Convenient locations across Dubai, Abu Dhabi, Sharjah, and Canada.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-700 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Visit your nearest Digital First location or contact us today to discuss your printing and design needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/locations" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
              Find a Location
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white px-3 py-2 font-serif font-bold text-xl rounded-md shadow-sm mb-4 inline-block">
                DIGITAL FIRST
              </div>
              <p className="text-slate-400 text-sm">
                Your complete digital printing and design solution with over 38 years of excellence.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-sm">Services</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link href="/printing-services" className="hover:text-white transition-colors">Printing Services</Link></li>
                <li><Link href="/design-studio" className="hover:text-white transition-colors">Design Studio</Link></li>
                <li><Link href="/photo-studio" className="hover:text-white transition-colors">Photo Studio</Link></li>
                <li><Link href="/signage" className="hover:text-white transition-colors">Signage</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-sm">Locations</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link href="/locations/dubai" className="hover:text-white transition-colors">Dubai</Link></li>
                <li><Link href="/locations/abu-dhabi" className="hover:text-white transition-colors">Abu Dhabi</Link></li>
                <li><Link href="/locations/sharjah" className="hover:text-white transition-colors">Sharjah</Link></li>
                <li><Link href="/locations/canada" className="hover:text-white transition-colors">Canada</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-sm">Contact</h3>
              <div className="space-y-2 text-slate-400 text-sm">
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
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2025 Digital First. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 