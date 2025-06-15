import Link from "next/link"
import { Palette, Truck, MapPin, Clock, Shield, Award, FileText, Camera } from "lucide-react"

export default function SignagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
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
              <Link href="/signage" className="text-blue-600 font-medium">Signage</Link>
              <Link href="/locations" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Locations</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Signage Solutions</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Make your brand stand out with professional signage solutions. 
            From banners to vehicle wraps, we create impactful visual experiences.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Banners & Posters */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Palette className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Banners & Posters</h3>
              <p className="text-gray-600 mb-6">
                High-impact banners and posters for events, promotions, and outdoor advertising.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Event Banners</li>
                <li>• Promotional Posters</li>
                <li>• Exhibition Graphics</li>
                <li>• Trade Show Displays</li>
                <li>• Outdoor Advertising</li>
              </ul>
            </div>

            {/* Vehicle Wraps */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vehicle Wraps</h3>
              <p className="text-gray-600 mb-6">
                Transform your vehicle into a mobile advertising platform with professional wraps.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Full Vehicle Wraps</li>
                <li>• Partial Wraps</li>
                <li>• Window Graphics</li>
                <li>• Fleet Branding</li>
                <li>• Removable Graphics</li>
              </ul>
            </div>

            {/* Outdoor Signage */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Outdoor Signage</h3>
              <p className="text-gray-600 mb-6">
                Durable outdoor signage solutions designed to withstand the elements.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Store Front Signs</li>
                <li>• Building Wraps</li>
                <li>• Billboards</li>
                <li>• Directional Signs</li>
                <li>• LED Displays</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Signage Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional signage solutions with premium materials and expert installation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-orange-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Palette className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Custom Design</h3>
              <p className="text-gray-600">Tailored designs that match your brand identity</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-red-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Weather Resistant</h3>
              <p className="text-gray-600">UV-resistant and weatherproof materials</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Quick Turnaround</h3>
              <p className="text-gray-600">Fast production and installation times</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Quality Guaranteed</h3>
              <p className="text-gray-600">Premium quality materials and workmanship</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Signage Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to installation, we handle every step of your signage project.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-6">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Consultation</h3>
              <p className="text-gray-600">
                We discuss your requirements, location, and design preferences to create the perfect solution.
              </p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Design</h3>
              <p className="text-gray-600">
                Our design team creates custom artwork that perfectly represents your brand and message.
              </p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Production</h3>
              <p className="text-gray-600">
                We use high-quality materials and state-of-the-art equipment to produce your signage.
              </p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl">
                4
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Installation</h3>
              <p className="text-gray-600">
                Our professional installation team ensures your signage is perfectly positioned and secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Make Your Mark?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Let us help you create impactful signage that gets your message noticed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Quote
            </Link>
            <Link href="/locations" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
              Find Location
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
                  <span className="text-sm">signage@digitalfirst.com</span>
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