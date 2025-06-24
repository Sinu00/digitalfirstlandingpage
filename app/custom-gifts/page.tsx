import Link from "next/link"
import { Gift, Heart, Star, Palette } from "lucide-react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Image from 'next/image'
import type { Metadata } from "next";

// Helper to slugify product names
function slugify(name: string) {
  return name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export const metadata: Metadata = {
  title: "Custom Gifts | Personalized Printing & Engraving | Digital First UAE & Canada",
  description: "Create unforgettable moments with personalized gifts from Digital First. Custom mugs, t-shirts, embroidery, and more. Fast delivery across UAE and Canada.",
  openGraph: {
    title: "Custom Gifts | Personalized Printing & Engraving | Digital First UAE & Canada",
    description: "Create unforgettable moments with personalized gifts from Digital First. Custom mugs, t-shirts, embroidery, and more. Fast delivery across UAE and Canada.",
    url: "https://digitalfirst.com/custom-gifts",
    siteName: "Digital First",
    images: [
      {
        url: "/digitalfirstlogo.jpg",
        width: 400,
        height: 400,
        alt: "Digital First Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Gifts | Personalized Printing & Engraving | Digital First UAE & Canada",
    description: "Create unforgettable moments with personalized gifts from Digital First. Custom mugs, t-shirts, embroidery, and more. Fast delivery across UAE and Canada.",
    images: ["/digitalfirstlogo.jpg"],
  },
};

export default function CustomGiftsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
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
              <Link key={product.name} href={`/custom-gifts/${slugify(product.name)}`} className="w-full">
                <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 flex flex-col items-center cursor-pointer">
                  <Image
                    src={product.img}
                    alt={product.name}
                    width={400}
                    height={224}
                    className="w-full h-40 md:h-48 lg:h-56 object-cover rounded-lg mb-4 border border-slate-100 bg-slate-100"
                  />
                  <h3 className="text-lg font-serif font-bold text-slate-900 mb-2 text-center group-hover:text-blue-700 transition-colors">
                    {product.name}
                  </h3>
                </div>
              </Link>
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

      <Footer />
    </div>
  )
} 