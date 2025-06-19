import Link from "next/link"
import { Camera, Phone, Mail, Clock, Shield, Award, ArrowRight } from "lucide-react"

export default function PhotoStudioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white px-3 py-2 font-serif font-bold text-xl rounded-md shadow-sm">
                DIGITAL FIRST
              </div>
             
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-slate-600 hover:text-blue-700 font-medium transition-colors text-sm">Home</Link>
              <Link href="/printing-services" className="text-slate-600 hover:text-blue-700 font-medium transition-colors text-sm">Printing Services</Link>
              <Link href="/custom-gifts" className="text-slate-600 hover:text-blue-700 font-medium transition-colors text-sm">Custom Gifts</Link>
              <Link href="/photo-studio" className="text-blue-700 font-medium text-sm">Photo Studio</Link>
              <Link href="/signage" className="text-slate-600 hover:text-blue-700 font-medium transition-colors text-sm">Signage</Link>
              <Link href="/locations" className="text-slate-600 hover:text-blue-700 font-medium transition-colors text-sm">Locations</Link>
            </nav>
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
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">Photo Studio</h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Professional photography services for all your documentation needs. 
            From passport photos to professional portraits, we capture your best moments.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">
              Professional Photography Services
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From passport photos to professional portraits, we provide high-quality photography services for all your needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Passport Size Photo', img: '/photo-studio/passport-size-photo.jpg' },
              { name: 'Infant ID Photo', img: '/photo-studio/infant-id-photo.jpg' },
              { name: 'Retouching', img: '/photo-studio/retouching.jpg' },
              { name: 'Colorization', img: '/photo-studio/colorization.jpg' },
              { name: 'Photo Restoration', img: '/photo-studio/photo-restoration.jpg' },
              { name: 'Photo Enhancement', img: '/photo-studio/photo-enhancement.jpg' },
              { name: 'Digitizing', img: '/photo-studio/digitizing.jpg' },
              { name: 'Profile Shoot', img: '/photo-studio/profile-shoot.jpg' },
              { name: 'Family Photoshoot', img: '/photo-studio/family-photoshoot.jpg' },
            ].map((service) => (
              <div key={service.name} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 flex flex-col items-center">
                <img
                  src={service.img}
                  alt={service.name}
                  className="w-20 h-20 object-cover rounded-lg mb-4 border border-slate-100 bg-slate-100"
                />
                <h3 className="text-base font-serif font-bold text-slate-900 mb-2 text-center">{service.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Why Choose Our Photo Studio?</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Professional photography services with state-of-the-art equipment and experienced photographers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Professional Equipment</h3>
              <p className="text-slate-600 text-sm">High-quality cameras and lighting for perfect results</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-indigo-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Quick Service</h3>
              <p className="text-slate-600 text-sm">Same day processing for urgent requirements</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-purple-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Verified Photos</h3>
              <p className="text-slate-600 text-sm">Official verification and validation services</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Quality Guaranteed</h3>
              <p className="text-slate-600 text-sm">Professional quality photos every time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Get Your Photos Today</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Visit our photo studio or contact us for inquiries and photo uploads.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Visit Our Studio</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Walk into any Digital First location and our professional photographers will help you get the perfect photo.
              </p>
              <Link href="/locations" className="inline-flex items-center bg-gradient-to-r from-blue-700 to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                Find Location <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Contact Us</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                For inquiries or to upload photos, contact our photo studio team.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-blue-700">
                  <Mail className="h-5 w-5 mr-3" />
                  <span className="text-sm">photos@digitalfirst.com</span>
                </div>
                <div className="flex items-center text-blue-700">
                  <Phone className="h-5 w-5 mr-3" />
                  <span className="text-sm">+97 00 00 000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-700 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">Ready for Your Perfect Photo?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Visit our photo studio today and let our professionals capture your best moments.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/locations" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
              Find Studio
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
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-2 font-serif font-bold text-lg rounded mb-4 inline-block">
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
                  photos@digitalfirst.com
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