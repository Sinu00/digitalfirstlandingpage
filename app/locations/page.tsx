import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Building, Globe, ChevronDown, ArrowRight } from "lucide-react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-serif font-bold mb-6">Our Locations</h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            With over 50 locations across Dubai, Abu Dhabi, Sharjah, and Canada, 
            there&apos;s always a Digital First center near you.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-700 mb-2">50+</div>
              <div className="text-sm text-slate-600">Locations</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-700 mb-2">4</div>
              <div className="text-sm text-slate-600">Countries</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-700 mb-2">24/7</div>
              <div className="text-sm text-slate-600">Support</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-700 mb-2">3+</div>
              <div className="text-sm text-slate-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Find Your Nearest Location</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Browse our locations by region and find the Digital First center closest to you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Dubai */}
            <div className="group bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Building className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Dubai</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Multiple locations across Dubai serving all your printing and design needs.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-slate-600 text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                  <span>25+ Locations</span>
                </div>
                <div className="flex items-center text-slate-600 text-sm">
                  <Clock className="h-4 w-4 mr-2 text-blue-600" />
                  <span>24/7 Service Available</span>
                </div>
              </div>
              <Link href="/locations/dubai" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm">
                View Dubai Locations <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>

            {/* Abu Dhabi */}
            <div className="group bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-indigo-600 to-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Building className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Abu Dhabi</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Our original location since 1987, serving Abu Dhabi with excellence.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-slate-600 text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-indigo-600" />
                  <span>15+ Locations</span>
                </div>
                <div className="flex items-center text-slate-600 text-sm">
                  <Clock className="h-4 w-4 mr-2 text-indigo-600" />
                  <span>Extended Hours</span>
                </div>
              </div>
              <Link href="/locations/abu-dhabi" className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors text-sm">
                View Abu Dhabi Locations <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>

            {/* Sharjah */}
            <div className="group bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-slate-600 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Building className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Sharjah</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Growing network of locations serving the Sharjah community.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-slate-600 text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-slate-600" />
                  <span>8+ Locations</span>
                </div>
                <div className="flex items-center text-slate-600 text-sm">
                  <Clock className="h-4 w-4 mr-2 text-slate-600" />
                  <span>Business Hours</span>
                </div>
              </div>
              <Link href="/locations/sharjah" className="inline-flex items-center text-slate-600 font-semibold hover:text-slate-700 transition-colors text-sm">
                View Sharjah Locations <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>

            {/* Canada */}
            <div className="group bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-blue-700 to-indigo-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Canada</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                International expansion bringing Digital First services to Canada.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-slate-600 text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-blue-700" />
                  <span>5+ Locations</span>
                </div>
                <div className="flex items-center text-slate-600 text-sm">
                  <Clock className="h-4 w-4 mr-2 text-blue-700" />
                  <span>Local Hours</span>
                </div>
              </div>
              <Link href="/locations/canada" className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800 transition-colors text-sm">
                View Canada Locations <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Location */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Featured Location</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our newest location in Azizi Riviera, Dubai - now open and ready to serve you.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-700 to-indigo-800 rounded-xl p-8 text-white shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-white/20 rounded-lg p-4 inline-block mb-6">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">Azizi Riviera - Dubai</h3>
                <p className="text-blue-100 mb-6 text-sm">
                  Unit No. 25, Azizi Riviera3, Al Markada<br />
                  Nad Al Sheba 1, Dubai
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-3" />
                    <span>+97 00 00 000</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-3" />
                    <span>azizi3@digitalfirst.com</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-3" />
                    <span>Open 24/7</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-lg p-6">
                  <div className="text-3xl font-serif font-bold mb-2">NOW OPEN</div>
                  <div className="text-lg">Visit Today!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Services Available at All Locations</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Every Digital First location offers our complete range of services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <span className="text-white font-bold">🖨️</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Printing Services</h3>
              <p className="text-slate-600">Digital & offset printing</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-indigo-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <span className="text-white font-bold">🎁</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Custom Gifts</h3>
              <p className="text-slate-600">Personalized gift items</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-purple-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <span className="text-white font-bold">📸</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Photo Studio</h3>
              <p className="text-slate-600">Professional photography</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <span className="text-white font-bold">🚗</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Signage</h3>
              <p className="text-slate-600">Banners & vehicle wraps</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-700 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">Find Your Nearest Digital First</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Visit any of our locations and experience our professional services firsthand.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
              Contact Us
            </Link>
            <Link href="/printing-services" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 