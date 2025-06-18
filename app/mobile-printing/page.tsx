import Link from "next/link"
import { Smartphone, Shield, Clock, MapPin, Phone, Mail, Wifi, Lock } from "lucide-react"

export default function MobilePrintingPage() {
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
              <Link href="/" className="text-slate-600 hover:text-blue-700 font-medium transition-colors text-sm">
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
              <Link href="/locations" className="text-slate-600 hover:text-blue-700 font-medium transition-colors text-sm">
                Locations
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
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-serif font-bold mb-6">Mobile Printing Services</h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Print directly from your mobile, tablet, or laptop with our secure self-printing stations. 
            Contactless, convenient, and completely private.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Why Choose Mobile Printing?</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Experience the convenience of printing on-the-go with our advanced mobile printing solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Contactless */}
            <div className="group bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Contactless Printing</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Print without physical contact. Upload your documents remotely and collect them safely.
              </p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  Remote document upload
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  Secure file transfer
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  No physical contact needed
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  Safe collection process
                </li>
              </ul>
            </div>

            {/* Privacy */}
            <div className="group bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-indigo-600 to-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Lock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Complete Privacy</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Your documents are secure and private. No one else can access your files.
              </p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3"></div>
                  Encrypted file transfer
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3"></div>
                  Secure storage
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3"></div>
                  Private printing
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3"></div>
                  Auto-deletion after pickup
                </li>
              </ul>
            </div>

            {/* Convenience */}
            <div className="group bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-slate-600 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">24/7 Convenience</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Print anytime, anywhere. Our mobile printing service is available round the clock.
              </p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></div>
                  Available 24/7
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></div>
                  Multiple locations
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></div>
                  Quick setup
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></div>
                  Instant printing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">How Mobile Printing Works</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Simple steps to print from your mobile device or computer.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Upload</h3>
              <p className="text-slate-600">Upload your documents via our secure portal or mobile app</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-indigo-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Configure</h3>
              <p className="text-slate-600">Select your printing options and preferences</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-slate-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Print</h3>
              <p className="text-slate-600">Your documents are printed automatically</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <span className="text-white font-bold text-2xl">4</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Collect</h3>
              <p className="text-slate-600">Pick up your prints from our secure collection point</p>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Formats */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Supported File Formats</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Print from virtually any device with support for all major file formats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Documents</h3>
              <ul className="space-y-3 text-slate-600 text-sm">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  PDF Files
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  Microsoft Word (.doc, .docx)
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  Microsoft Excel (.xls, .xlsx)
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  Microsoft PowerPoint (.ppt, .pptx)
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  Text Files (.txt)
                </li>
              </ul>
            </div>

            <div className="group bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Images</h3>
              <ul className="space-y-3 text-slate-600 text-sm">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3"></div>
                  JPEG (.jpg, .jpeg)
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3"></div>
                  PNG (.png)
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3"></div>
                  TIFF (.tiff)
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3"></div>
                  BMP (.bmp)
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3"></div>
                  GIF (.gif)
                </li>
              </ul>
            </div>

            <div className="group bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Design Files</h3>
              <ul className="space-y-3 text-slate-600 text-sm">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></div>
                  Adobe Photoshop (.psd)
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></div>
                  Adobe Illustrator (.ai)
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></div>
                  Adobe InDesign (.indd)
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></div>
                  CorelDRAW (.cdr)
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></div>
                  SVG (.svg)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Features */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900">Digital First Mobile App</h2>
              <p className="text-lg text-slate-600">
                Download our mobile app for the ultimate printing convenience. Available for iOS and Android devices.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-700 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Smartphone className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-slate-900">Easy Upload</h3>
                    <p className="text-slate-600 text-sm">Upload documents directly from your phone&apos;s gallery or cloud storage</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-700 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Wifi className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-slate-900">Cloud Integration</h3>
                    <p className="text-slate-600 text-sm">Connect with Google Drive, Dropbox, iCloud, and more</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-slate-700 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-slate-900">Location Finder</h3>
                    <p className="text-slate-600 text-sm">Find the nearest Digital First location for pickup</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-700 to-indigo-800 rounded-xl p-8 text-white text-center shadow-lg">
              <div className="space-y-4">
                <div className="bg-white/20 rounded-lg p-4 inline-block">
                  <Smartphone className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-2xl font-serif font-bold">Download Now</h3>
                <p className="text-blue-100">
                  Available on App Store and Google Play
                </p>
                <div className="flex justify-center space-x-4">
                  <div className="bg-white/20 rounded-lg px-4 py-2">
                    <span className="font-semibold">iOS</span>
                  </div>
                  <div className="bg-white/20 rounded-lg px-4 py-2">
                    <span className="font-semibold">Android</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-700 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">Ready to Start Mobile Printing?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s bring your vision to life with our professional mobile printing services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/locations" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
              Find Location
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
              Get Started
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