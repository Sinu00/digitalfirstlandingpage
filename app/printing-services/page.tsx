import Link from "next/link"
import { Clock, Shield, Award, FileText, Palette, ArrowRight, Phone, Mail } from "lucide-react"

export default function PrintingServicesPage() {
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
              <Link href="/" className="text-slate-600 hover:text-blue-700 font-medium transition-colors text-sm">
                Home
              </Link>
              <Link href="/printing-services" className="text-blue-700 font-medium text-sm">Printing Services</Link>
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
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">Printing Services</h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Professional digital and offset printing solutions for all your business and personal needs. 
            Quality guaranteed with fast turnaround times.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">
              Our Printing Products & Services
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A complete range of print, design, and finishing solutions for every business and personal need.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Business Cards', img: '/printing-services/business-cards.jpg' },
              { name: 'Corporate Identity', img: '/printing-services/corporate-identity.jpg' },
              { name: 'Flyers & Brochures', img: '/printing-services/flyers-brochures.jpg' },
              { name: 'Binding Services', img: '/printing-services/binding-services.jpg' },
              { name: 'Passport Size Photo', img: '/printing-services/passport-size-photo.jpg' },
              { name: 'Customised Mugs', img: '/printing-services/customised-mugs.jpg' },
              { name: 'Rubber Stamp', img: '/printing-services/rubber-stamp.jpg' },
              { name: 'Printing on Gift Items', img: '/printing-services/printing-on-gift-items.jpg' },
              { name: 'Foiling', img: '/printing-services/foiling.jpg' },
              { name: 'Spot UV', img: '/printing-services/spot-uv.jpg' },
              { name: 'Thermal Embossing', img: '/printing-services/thermal-embossing.jpg' },
              { name: 'Large Format Printing', img: '/printing-services/large-format-printing.jpg' },
              { name: 'Large Format Scanning', img: '/printing-services/large-format-scanning.jpg' },
              { name: 'Photocopy Services', img: '/printing-services/photocopy-services.jpg' },
              { name: 'Customised Calendar', img: '/printing-services/customised-calendar.jpg' },
              { name: 'Menu Cards', img: '/printing-services/menu-cards.jpg' },
              { name: 'Autocad Plotting', img: '/printing-services/autocad-plotting.jpg' },
              { name: 'Wedding Cards', img: '/printing-services/wedding-cards.jpg' },
              { name: 'Personalized Greeting', img: '/printing-services/personalized-greeting.jpg' },
              { name: 'Foam Board Mounting', img: '/printing-services/foam-board-mounting.jpg' },
              { name: 'Flex Printing', img: '/printing-services/flex-printing.jpg' },
              { name: 'Tent Cards', img: '/printing-services/tent-cards.jpg' },
              { name: 'Book Marks', img: '/printing-services/book-marks.jpg' },
              { name: 'Hang Tags', img: '/printing-services/hang-tags.jpg' },
              { name: 'Roll-Up Stand', img: '/printing-services/roll-up-stand.jpg' },
              { name: 'PVC ID Card Printing', img: '/printing-services/pvc-id-card-printing.jpg' },
              { name: 'Canvas & Streching', img: '/printing-services/canvas-streching.jpg' },
              { name: 'Papper Bags', img: '/printing-services/papper-bags.jpg' },
              { name: 'CD - DVD Writing', img: '/printing-services/cd-dvd-writing.jpg' },
            ].map((service) => (
              <div key={service.name} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 flex flex-col items-center">
                <img
                  src={service.img}
                  alt={service.name}
                  className="w-20 h-20 object-cover rounded-lg mb-4 border border-slate-100 bg-slate-100"
                />
                <h3 className="text-lg font-serif font-bold text-slate-900 mb-2 text-center">{service.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Why Choose Our Printing Services?</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with decades of experience to deliver exceptional results every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Fast Turnaround</h3>
              <p className="text-slate-600 text-sm">Same day to 48-hour delivery options available</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-indigo-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Premium Quality</h3>
              <p className="text-slate-600 text-sm">Highest quality materials and printing standards</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-purple-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Secure Printing</h3>
              <p className="text-slate-600 text-sm">Confidential document handling and secure printing</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-emerald-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Latest Technology</h3>
              <p className="text-slate-600 text-sm">State-of-the-art printing equipment and technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-700 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s bring your vision to life with our professional printing services.
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