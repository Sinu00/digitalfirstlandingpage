import Link from "next/link"
import { Smartphone, Printer, Shield, Clock, MapPin, Phone, Mail, Wifi, Lock } from "lucide-react"

export default function MobilePrintingPage() {
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
          <h1 className="text-5xl font-bold mb-6">Mobile Printing Services</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Print directly from your mobile, tablet, or laptop with our secure self-printing stations. 
            Contactless, convenient, and completely private.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Mobile Printing?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the convenience of printing on-the-go with our advanced mobile printing solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Contactless */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contactless Printing</h3>
              <p className="text-gray-600 mb-6">
                Print without physical contact. Upload your documents remotely and collect them safely.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Remote document upload</li>
                <li>• Secure file transfer</li>
                <li>• No physical contact needed</li>
                <li>• Safe collection process</li>
              </ul>
            </div>

            {/* Privacy */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Privacy</h3>
              <p className="text-gray-600 mb-6">
                Your documents are secure and private. No one else can access your files.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Encrypted file transfer</li>
                <li>• Secure storage</li>
                <li>• Private printing</li>
                <li>• Auto-deletion after pickup</li>
              </ul>
            </div>

            {/* Convenience */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Convenience</h3>
              <p className="text-gray-600 mb-6">
                Print anytime, anywhere. Our mobile printing service is available round the clock.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Available 24/7</li>
                <li>• Multiple locations</li>
                <li>• Quick setup</li>
                <li>• Instant printing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Mobile Printing Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to print from your mobile device or computer.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Upload</h3>
              <p className="text-gray-600">Upload your documents via our secure portal or mobile app</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Configure</h3>
              <p className="text-gray-600">Select your printing options and preferences</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Print</h3>
              <p className="text-gray-600">Your documents are printed automatically</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-orange-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-2xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Collect</h3>
              <p className="text-gray-600">Pick up your prints from our secure collection point</p>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Formats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Supported File Formats</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Print from virtually any device with support for all major file formats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Documents</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• PDF Files</li>
                <li>• Microsoft Word (.doc, .docx)</li>
                <li>• Microsoft Excel (.xls, .xlsx)</li>
                <li>• Microsoft PowerPoint (.ppt, .pptx)</li>
                <li>• Text Files (.txt)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Images</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• JPEG (.jpg, .jpeg)</li>
                <li>• PNG (.png)</li>
                <li>• TIFF (.tiff)</li>
                <li>• BMP (.bmp)</li>
                <li>• GIF (.gif)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Design Files</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Adobe Photoshop (.psd)</li>
                <li>• Adobe Illustrator (.ai)</li>
                <li>• Adobe InDesign (.indd)</li>
                <li>• CorelDRAW (.cdr)</li>
                <li>• SVG (.svg)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Features */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">Digital First Mobile App</h2>
              <p className="text-xl text-gray-600">
                Download our mobile app for the ultimate printing convenience. Available for iOS and Android devices.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <Smartphone className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Easy Upload</h3>
                    <p className="text-gray-600">Upload documents directly from your phone's gallery or cloud storage</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <Wifi className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Cloud Integration</h3>
                    <p className="text-gray-600">Connect with Google Drive, Dropbox, iCloud, and more</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Location Finder</h3>
                    <p className="text-gray-600">Find the nearest Digital First location for pickup</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-white text-center">
              <div className="space-y-4">
                <div className="bg-white/20 rounded-lg p-4 inline-block">
                  <Smartphone className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold">Download Now</h3>
                <p className="text-indigo-100">
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Mobile Printing?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Experience the convenience of printing from anywhere, anytime with Digital First mobile printing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/locations" className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Find Location
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Get Started
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