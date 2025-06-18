import Link from "next/link"
import { ArrowRight, Phone, Mail, MapPin, Clock, Award, Shield, Users, Star } from "lucide-react"

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
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-blue-700 font-medium text-sm">Home</Link>
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
              <Link href="/locations" className="text-slate-600 hover:text-blue-700 font-medium transition-colors text-sm">
                Locations
              </Link>
            </nav>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center text-blue-700">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">+97 00 00 000</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl lg:text-4xl font-serif font-bold mb-6 leading-tight">
                Your Complete Digital Printing & Design Solution
              </h1>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                With over 3 years of excellence, we deliver premium printing services, custom gifts, 
                professional photography, and innovative signage solutions across the UAE and Canada.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/printing-services" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
                  Explore Services
                </Link>
                <Link href="/contact" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
                  Get Quote
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">3+ Years</h3>
                    <p className="text-blue-100 text-sm">Industry Experience</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">10,000+</h3>
                    <p className="text-blue-100 text-sm">Happy Clients</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">Premium</h3>
                    <p className="text-blue-100 text-sm">Quality Service</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">Fast</h3>
                    <p className="text-blue-100 text-sm">Turnaround</p>
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
              Our Services
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From digital printing to custom gifts, we offer comprehensive solutions for all your business and personal needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Printing Services */}
            <Link href="/printing-services" className="group">
              <div className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group-hover:border-blue-300">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-white text-2xl font-bold">P</div>
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Printing Services</h3>
                <p className="text-slate-600 mb-4">
                  Digital and offset printing for all your business needs. From business cards to large format banners.
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>

            {/* Custom Gifts */}
            <Link href="/custom-gifts" className="group">
              <div className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group-hover:border-blue-300">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-white text-2xl font-bold">G</div>
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Custom Gifts</h3>
                <p className="text-slate-600 mb-4">
                  Personalized gifts and promotional items. Perfect for corporate events and special occasions.
                </p>
                <div className="flex items-center text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>

            {/* Photo Studio */}
            <Link href="/photo-studio" className="group">
              <div className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group-hover:border-blue-300">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-white text-2xl font-bold">P</div>
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Photo Studio</h3>
                <p className="text-slate-600 mb-4">
                  Professional photography services. Portraits, corporate events, and product photography.
                </p>
                <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>

            {/* Signage */}
            <Link href="/signage" className="group">
              <div className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group-hover:border-blue-300">
                <div className="bg-gradient-to-r from-orange-600 to-red-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-white text-2xl font-bold">S</div>
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Signage</h3>
                <p className="text-slate-600 mb-4">
                  Indoor and outdoor signage solutions. Vehicle wraps, banners, and custom displays.
                </p>
                <div className="flex items-center text-orange-600 font-semibold group-hover:text-orange-700 transition-colors">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-6">
                Trusted by Businesses for Over 3 Years
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Digital First has been at the forefront of the printing and design industry, serving thousands 
                of satisfied customers across the UAE and Canada. Our commitment to quality, innovation, and 
                customer satisfaction has made us the preferred choice for businesses and individuals alike.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We&apos;re proud to offer state-of-the-art technology combined with decades of expertise, 
                ensuring every project meets the highest standards of excellence.
              </p>
              <Link href="/about" className="inline-flex items-center bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-blue-700" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Quality Guaranteed</h3>
                  <p className="text-slate-600 text-sm">Every project meets our high standards</p>
                </div>
                <div className="text-center">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-emerald-700" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Secure & Reliable</h3>
                  <p className="text-slate-600 text-sm">Your data and projects are safe with us</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-purple-700" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Fast Delivery</h3>
                  <p className="text-slate-600 text-sm">Quick turnaround times guaranteed</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-orange-700" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Expert Team</h3>
                  <p className="text-slate-600 text-sm">Experienced professionals at your service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">
              Visit Our Locations
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We&apos;re conveniently located across the UAE and Canada, ready to serve your printing and design needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/locations/dubai" className="group">
              <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group-hover:border-blue-300">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">Dubai</h3>
                <p className="text-slate-600 text-sm">Main office and production facility</p>
              </div>
            </Link>
            
            <Link href="/locations/abu-dhabi" className="group">
              <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group-hover:border-blue-300">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">Abu Dhabi</h3>
                <p className="text-slate-600 text-sm">Capital city branch</p>
              </div>
            </Link>
            
            <Link href="/locations/sharjah" className="group">
              <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group-hover:border-blue-300">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">Sharjah</h3>
                <p className="text-slate-600 text-sm">Cultural capital location</p>
              </div>
            </Link>
            
            <Link href="/locations/canada" className="group">
              <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group-hover:border-blue-300">
                <div className="bg-gradient-to-r from-orange-600 to-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">Canada</h3>
                <p className="text-slate-600 text-sm">International expansion</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-700 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s bring your vision to life with our professional printing and design services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
              Get Started
            </Link>
            <Link href="/locations" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
              Find Location
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
                Your complete digital printing and design solution with over 3 years of excellence.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-sm">Services</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link href="/printing-services" className="hover:text-white transition-colors">Printing Services</Link></li>
                <li><Link href="/custom-gifts" className="hover:text-white transition-colors">Custom Gifts</Link></li>
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
                  +97 00 00 000
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