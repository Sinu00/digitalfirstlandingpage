import Link from "next/link"
import { Clock, Printer, Zap, Shield, MapPin, Phone, Mail } from "lucide-react"

export default function TwentyFourHoursPrintingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100">
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
              <Link href="/locations" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Locations</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">24/7 Printing Services</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Emergency printing services available round the clock. 
            When you need it done now, we're here for you 24 hours a day, 7 days a week.
          </p>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Emergency Printing Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Available 24/7 for urgent printing needs, emergency documents, and last-minute projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Urgent Documents */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Urgent Documents</h3>
              <p className="text-gray-600 mb-6">
                Emergency printing for important documents that can't wait.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Legal Documents</li>
                <li>• Business Contracts</li>
                <li>• Emergency Reports</li>
                <li>• Time-Sensitive Materials</li>
                <li>• Last-Minute Presentations</li>
              </ul>
            </div>

            {/* Express Printing */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Express Printing</h3>
              <p className="text-gray-600 mb-6">
                Lightning-fast printing services for when every minute counts.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Same Hour Service</li>
                <li>• Priority Processing</li>
                <li>• Rush Orders</li>
                <li>• Emergency Pickup</li>
                <li>• Instant Quotes</li>
              </ul>
            </div>

            {/* 24/7 Support */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600 mb-6">
                Round-the-clock customer support and technical assistance.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Always Available</li>
                <li>• Expert Assistance</li>
                <li>• Technical Support</li>
                <li>• Emergency Contact</li>
                <li>• Live Chat Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Available Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">24/7 Available Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All our services are available 24 hours a day, 7 days a week for your convenience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-4">
              <div className="bg-red-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Printer className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Digital Printing</h3>
              <p className="text-gray-600">High-quality digital printing</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-orange-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-2xl">📄</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Document Printing</h3>
              <p className="text-gray-600">Business documents & reports</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-2xl">📸</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Photo Printing</h3>
              <p className="text-gray-600">Emergency photo services</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Design Services</h3>
              <p className="text-gray-600">Urgent design work</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Emergency Contact</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Need urgent printing? Contact us immediately for 24/7 emergency services.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  <Phone className="h-8 w-8 text-red-600 mr-3" />
                  <span className="text-2xl font-bold text-gray-900">+971 58 987 5122</span>
                </div>
                <p className="text-gray-600">24/7 Emergency Hotline</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  <Mail className="h-8 w-8 text-red-600 mr-3" />
                  <span className="text-xl font-bold text-gray-900">emergency@digitalfirst.com</span>
                </div>
                <p className="text-gray-600">Emergency Email Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Need Emergency Printing?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Don't wait - our 24/7 printing services are here when you need them most.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/locations" className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Find 24/7 Location
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
              Emergency Contact
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
                  <span className="text-sm">emergency@digitalfirst.com</span>
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