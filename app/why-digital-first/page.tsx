import Link from "next/link"
import { Award, Clock, MapPin, Users, Shield, Zap, Star, CheckCircle } from "lucide-react"

export default function WhyDigitalFirstPage() {
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
              <Link href="/locations" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Locations</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Why Choose Digital First?</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Discover what makes us the preferred choice for printing and design solutions 
            across the UAE and Canada.
          </p>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Sets Us Apart</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've built our reputation on excellence, innovation, and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Experience */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">38+ Years Experience</h3>
              <p className="text-gray-600 mb-6">
                Nearly four decades of expertise in the printing industry, making us one of the most trusted names in the region.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Industry veterans since 1987</li>
                <li>• Proven track record</li>
                <li>• Deep market knowledge</li>
                <li>• Established reputation</li>
              </ul>
            </div>

            {/* Technology */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Latest Technology</h3>
              <p className="text-gray-600 mb-6">
                State-of-the-art equipment and cutting-edge technology for superior quality results.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Advanced printing equipment</li>
                <li>• Digital workflow systems</li>
                <li>• Quality control technology</li>
                <li>• Continuous innovation</li>
              </ul>
            </div>

            {/* Convenience */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">50+ Locations</h3>
              <p className="text-gray-600 mb-6">
                Extensive network of locations across Dubai, Abu Dhabi, Sharjah, and Canada for your convenience.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Easy accessibility</li>
                <li>• Multiple service points</li>
                <li>• Local expertise</li>
                <li>• Consistent quality</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits of Choosing Digital First</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the advantages that make us the preferred choice for businesses and individuals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Fast Turnaround</h3>
              <p className="text-gray-600">Quick delivery times with guaranteed quality</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Quality Guaranteed</h3>
              <p className="text-gray-600">Premium quality with satisfaction guarantee</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Expert Team</h3>
              <p className="text-gray-600">Professional staff with years of experience</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-orange-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Star className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Customer Focus</h3>
              <p className="text-gray-600">Dedicated to customer satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Experience the Difference?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who choose Digital First for their printing and design needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/locations" className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Find Location
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
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
                  <span className="text-sm">info@digitalfirst.com</span>
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