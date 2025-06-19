import Link from "next/link"
import { Gift, Heart, Star, Palette, Camera, Package, ArrowRight, Phone, Mail } from "lucide-react"

export default function CustomGiftsPage() {
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
              <Link href="/custom-gifts" className="text-blue-700 font-medium text-sm">Custom Gifts</Link>
              <Link href="/photo-studio" className="text-slate-600 hover:text-blue-700 font-medium transition-colors text-sm">Photo Studio</Link>
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
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">Custom Gifts</h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Create unforgettable moments with personalized gifts that speak from the heart. 
            From custom mugs to photo albums, we bring your ideas to life.
          </p>
        </div>
      </section>

      {/* Gift Products Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Personalized Gift Products</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Choose from our wide range of customizable gift products for every occasion and recipient.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'T Shirt Printing', img: '/custom-gifts/t-shirt-printing.jpg' },
              { name: 'Hoodie Printing', img: '/custom-gifts/hoodie-printing.jpg' },
              { name: 'Embroidery Shirts & T-Shirts', img: '/custom-gifts/embroidery-shirts.jpg' },
              { name: 'Custom Patch', img: '/custom-gifts/custom-patch.jpg' },
              { name: 'Abaya Embroidery', img: '/custom-gifts/abaya-embroidery.jpg' },
              { name: 'Fashion Embroidery', img: '/custom-gifts/fashion-embroidery.jpg' },
              { name: 'Apron', img: '/custom-gifts/apron.jpg' },
              { name: 'Cap Printing', img: '/custom-gifts/cap-printing.jpg' },
              { name: 'Embroidery Towel', img: '/custom-gifts/embroidery-towel.jpg' },
              { name: 'Bathrobe', img: '/custom-gifts/bathrobe.jpg' },
              { name: 'Table Cloths', img: '/custom-gifts/table-cloths.jpg' },
              { name: 'Table Runner', img: '/custom-gifts/table-runner.jpg' },
              { name: 'Pillow Cover', img: '/custom-gifts/pillow-cover.jpg' },
              { name: 'Safety Jacket', img: '/custom-gifts/safety-jacket.jpg' },
              { name: 'Safety Helmet', img: '/custom-gifts/safety-helmet.jpg' },
              { name: 'Safety Coverall', img: '/custom-gifts/safety-coverall.jpg' },
              { name: 'Glass Printing', img: '/custom-gifts/glass-printing.jpg' },
              { name: 'Print on Ceramics', img: '/custom-gifts/print-on-ceramics.jpg' },
              { name: 'Ceramic Plates Engraving', img: '/custom-gifts/ceramic-plates-engraving.jpg' },
              { name: 'Cutlery Engraving', img: '/custom-gifts/cutlery-engraving.jpg' },
              { name: 'Knife Engraving', img: '/custom-gifts/knife-engraving.jpg' },
              { name: 'Pen Engraving', img: '/custom-gifts/pen-engraving.jpg' },
              { name: 'Wooden Engraving', img: '/custom-gifts/wooden-engraving.jpg' },
              { name: 'Bottle Printing', img: '/custom-gifts/bottle-printing.jpg' },
              { name: 'Trophy Engraving', img: '/custom-gifts/trophy-engraving.jpg' },
              { name: 'Key Duplication', img: '/custom-gifts/key-duplication.jpg' },
              { name: 'Cotton Bag', img: '/custom-gifts/cotton-bag.jpg' },
              { name: 'Note Book Printing', img: '/custom-gifts/note-book-printing.jpg' },
              { name: 'Mug Printing', img: '/custom-gifts/mug-printing.jpg' },
              { name: 'Name Badge', img: '/custom-gifts/name-badge.jpg' },
              { name: 'Corporate Kit', img: '/custom-gifts/corporate-kit.jpg' },
              { name: 'USB', img: '/custom-gifts/usb.jpg' },
              { name: 'Lanyard', img: '/custom-gifts/lanyard.jpg' },
              { name: 'Custom Ribbon', img: '/custom-gifts/custom-ribbon.jpg' },
              { name: 'Custom Flag', img: '/custom-gifts/custom-flag.jpg' },
              { name: 'Key Chain', img: '/custom-gifts/key-chain.jpg' },
              { name: 'Name Plate', img: '/custom-gifts/name-plate.jpg' },
            ].map((product) => (
              <div key={product.name} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 flex flex-col items-center">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-lg mb-4 border border-slate-100 bg-slate-100"
                />
                <h3 className="text-base font-serif font-bold text-slate-900 mb-2 text-center">{product.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Perfect for Every Occasion</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Whether it&apos;s a birthday, anniversary, wedding, or just because, we have the perfect personalized gift.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-4">
              <div className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Birthdays</h3>
              <p className="text-slate-600 text-sm">Make their special day unforgettable</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-indigo-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Anniversaries</h3>
              <p className="text-slate-600 text-sm">Celebrate love with personalized gifts</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-purple-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Gift className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Weddings</h3>
              <p className="text-slate-600 text-sm">Unique gifts for the happy couple</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Palette className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Corporate</h3>
              <p className="text-slate-600 text-sm">Professional branded gifts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Creating your perfect personalized gift is simple and fun with our easy process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-6">
              <div className="bg-gradient-to-r from-blue-700 to-indigo-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl shadow-lg">
                1
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900">Choose Your Gift</h3>
              <p className="text-slate-600 leading-relaxed">
                Browse our extensive collection of customizable gifts and select the perfect item for your recipient.
              </p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="bg-gradient-to-r from-indigo-700 to-purple-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl shadow-lg">
                2
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900">Customize & Design</h3>
              <p className="text-slate-600 leading-relaxed">
                Add your personal touch with photos, text, or designs using our easy-to-use customization tools.
              </p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="bg-gradient-to-r from-purple-700 to-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl shadow-lg">
                3
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900">Receive Your Gift</h3>
              <p className="text-slate-600 leading-relaxed">
                We&apos;ll create your personalized gift with care and deliver it to you or directly to your recipient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-700 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">Start Creating Your Perfect Gift</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Visit our design studio or browse our online catalog to create something truly special.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/design-studio" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
              Design Studio
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
              Get Quote
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