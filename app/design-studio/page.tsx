import Link from "next/link"
import { Palette, Brush, Layers, Sparkles, Eye, Zap } from "lucide-react"

export default function DesignStudioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
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
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Design Studio</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Transform your ideas into stunning visual designs. Our creative team brings your vision to life 
            with professional graphic design services.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Logo Design */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Palette className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Logo Design</h3>
              <p className="text-gray-600 mb-6">
                Professional logo design that captures your brand identity and makes a lasting impression.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Brand Identity Design</li>
                <li>• Logo Variations</li>
                <li>• Color Schemes</li>
                <li>• Brand Guidelines</li>
                <li>• Vector Formats</li>
              </ul>
            </div>

            {/* Marketing Materials */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Brush className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Marketing Materials</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive marketing collateral to promote your business effectively.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Business Cards</li>
                <li>• Brochures & Flyers</li>
                <li>• Social Media Graphics</li>
                <li>• Email Templates</li>
                <li>• Presentation Design</li>
              </ul>
            </div>

            {/* Invitations & Events */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Invitations & Events</h3>
              <p className="text-gray-600 mb-6">
                Beautiful designs for special occasions and corporate events.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Wedding Invitations</li>
                <li>• Corporate Events</li>
                <li>• Birthday Cards</li>
                <li>• Announcements</li>
                <li>• Event Programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Design Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven process to deliver exceptional design results every time.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-6">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Discovery</h3>
              <p className="text-gray-600">
                We understand your needs, target audience, and brand requirements to create the perfect design strategy.
              </p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Concept</h3>
              <p className="text-gray-600">
                Our designers create multiple concepts and present you with various options to choose from.
              </p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Refinement</h3>
              <p className="text-gray-600">
                We refine the chosen concept based on your feedback to perfect every detail.
              </p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl">
                4
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Delivery</h3>
              <p className="text-gray-600">
                Final files are delivered in all required formats, ready for print and digital use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Design */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Design Studio?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional design services with creative expertise and technical excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-indigo-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Eye className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Creative Vision</h3>
              <p className="text-gray-600">Unique and innovative design concepts</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Fast Turnaround</h3>
              <p className="text-gray-600">Quick delivery without compromising quality</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Layers className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Multiple Formats</h3>
              <p className="text-gray-600">Files delivered in all required formats</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Create Something Amazing?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Let our design team bring your vision to life with professional creativity.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Project
            </Link>
            <Link href="/locations" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
              Visit Studio
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
                  <span className="text-sm">design@digitalfirst.com</span>
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