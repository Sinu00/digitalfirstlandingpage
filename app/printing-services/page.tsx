import Link from "next/link"
import { Clock, Shield, Award, FileText } from "lucide-react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Image from 'next/image'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Printing Services | Digital & Offset Printing | Digital First UAE & Canada",
  description: "Professional digital and offset printing solutions for business and personal needs. Fast turnaround, premium quality, and expert support across UAE and Canada.",
  openGraph: {
    title: "Printing Services | Digital & Offset Printing | Digital First UAE & Canada",
    description: "Professional digital and offset printing solutions for business and personal needs. Fast turnaround, premium quality, and expert support across UAE and Canada.",
    url: "https://digitalfirst.com/printing-services",
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
    title: "Printing Services | Digital & Offset Printing | Digital First UAE & Canada",
    description: "Professional digital and offset printing solutions for business and personal needs. Fast turnaround, premium quality, and expert support across UAE and Canada.",
    images: ["/digitalfirstlogo.jpg"],
  },
};

export default function PrintingServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
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
              { name: 'Business Cards', img: '/printing-services/Business-Cards.jpg', slug: 'business-cards' },
              { name: 'Corporate Identity', img: '/printing-services/Corporate-Identity.jpg', slug: 'corporate-identity' },
              { name: 'Flyers & Brochures', img: '/printing-services/Flyers-Brochures.jpg', slug: 'flyers-brochures' },
              { name: 'Binding Services', img: '/printing-services/Binding-Services.jpg', slug: 'binding-services' },
              { name: 'Passport Size Photo', img: '/printing-services/Passport-Size-Photo.jpg', slug: 'passport-size-photo' },
              { name: 'Customised Mugs', img: '/printing-services/Customised-Mugs.jpg', slug: 'customised-mugs' },
              { name: 'Rubber Stamp', img: '/printing-services/Rubber-Stamp.jpg', slug: 'rubber-stamp' },
              { name: 'Printing on Gift Items', img: '/printing-services/Printing-on-Gift-Items.jpg', slug: 'printing-on-gift-items' },
              { name: 'Foiling', img: '/printing-services/foiling.jpg', slug: 'foiling' },
              { name: 'Spot UV', img: '/printing-services/Spot-UV.jpg', slug: 'spot-uv' },
              { name: 'Thermal Embossing', img: '/printing-services/Thermal-Embossing.jpg', slug: 'thermal-embossing' },
              { name: 'Large Format Printing', img: '/printing-services/Large-Format-Printing.jpg', slug: 'large-format-printing' },
              { name: 'Large Format Scanning', img: '/printing-services/Large-Format-Scanning.jpg', slug: 'large-format-scanning' },
              { name: 'Photocopy Services', img: '/printing-services/Photocopy-Services.jpg', slug: 'photocopy-services' },
              { name: 'Customised Calendar', img: '/printing-services/Customised-Calendar.jpg', slug: 'customised-calendar' },
              { name: 'Menu Cards', img: '/printing-services/Menu-Cards.jpg', slug: 'menu-cards' },
              { name: 'Autocad Plotting', img: '/printing-services/Autocad-Plotting.jpg', slug: 'autocad-plotting' },
              { name: 'Wedding Cards', img: '/printing-services/Wedding-Cards.jpg', slug: 'wedding-cards' },
              { name: 'Personalized Greeting', img: '/printing-services/Personalized-Greeting.jpg', slug: 'personalized-greeting' },
              { name: 'Foam Board Mounting', img: '/printing-services/Foam-Board-Mounting.jpg', slug: 'foam-board-mounting' },
              { name: 'Flex Printing', img: '/printing-services/Flex-Printing.jpg', slug: 'flex-printing' },
              { name: 'Tent Cards', img: '/printing-services/Tent-Cards.jpg', slug: 'tent-cards' },
              { name: 'Book Marks', img: '/printing-services/Book-Marks.jpg', slug: 'book-marks' },
              { name: 'Hang Tags', img: '/printing-services/Hang-Tags.jpg', slug: 'hang-tags' },
              { name: 'Roll-Up Stand', img: '/printing-services/Roll-Up-Stand.jpg', slug: 'roll-up-stand' },
              { name: 'PVC ID Card Printing', img: '/printing-services/PVC-ID-Card-Printing.jpg', slug: 'pvc-id-card-printing' },
              { name: 'Canvas & Streching', img: '/printing-services/Canvas-Streching.jpg', slug: 'canvas-streching' },
              { name: 'Papper Bags', img: '/printing-services/Papper-Bags.jpg', slug: 'papper-bags' },
              { name: 'CD - DVD Writing', img: '/printing-services/CD-DVD-Writing.jpg', slug: 'cd-dvd-writing' },
            ].map((service) => (
              <Link key={service.name} href={`/printing-services/${service.slug}`} className="w-full">
                <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 flex flex-col items-center cursor-pointer">
                  <Image
                    src={service.img}
                    alt={service.name}
                    width={400}
                    height={224}
                    className="w-full h-40 md:h-48 lg:h-56 object-cover rounded-lg mb-4 border border-slate-100 bg-slate-100"
                  />
                  <h3 className="text-lg font-serif font-bold text-slate-900 mb-2 text-center">{service.name}</h3>
              </div>
              </Link>
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

      <Footer />
    </div>
  )
} 