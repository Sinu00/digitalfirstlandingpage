import Link from "next/link"
import { ArrowRight, MapPin, Clock, Award, Shield, Users, Star } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import type { Metadata } from "next"
import HeroSlider from "../components/HeroSlider"

export const metadata: Metadata = {
  title: "Digital First Printing & Packaging | Industrial Area 2, Ajman, UAE",
  description: "Digital First Printing & Packaging, Industrial Area 2, Ajman, UAE. Your trusted partner for digital printing and packaging solutions.",
  openGraph: {
    title: "Digital First | Print & Design Solutions UAE, Dubai, Abu Dhabi, Sharjah, Canada",
    description: "Digital First offers premium digital printing, graphic design, and custom solutions across Dubai, Abu Dhabi, Sharjah, and Canada. 3+ years of excellence. Get a quote today!",
    url: "https://digitalfirst.com/",
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
    title: "Digital First | Print & Design Solutions UAE, Dubai, Abu Dhabi, Sharjah, Canada",
    description: "Digital First offers premium digital printing, graphic design, and custom solutions across Dubai, Abu Dhabi, Sharjah, and Canada. 3+ years of excellence. Get a quote today!",
    images: ["/digitalfirstlogo.jpg"],
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      {/* Hero Section */}
      <HeroSlider>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1
              className="text-3xl lg:text-4xl font-serif font-bold mb-6 leading-tight text-white"
            >
              Digital First Printing & Packaging Industry
            </h1>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              With over 3 years of excellence, we deliver premium printing services, custom gifts, 
              innovative packaging & commercial printing solutions across the UAE.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/printing-services" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
                Explore Services
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
                Get Quote
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">3+ Years</h3>
                  <p className="text-blue-100 text-sm">Industry Experience</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">10,000+</h3>
                  <p className="text-blue-100 text-sm">Happy Clients</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Premium</h3>
                  <p className="text-blue-100 text-sm">Quality Service</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Fast</h3>
                  <p className="text-blue-100 text-sm">Turnaround</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HeroSlider>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From digital printing to custom gifts, we offer comprehensive solutions for all your business and personal needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Printing Services */}
            <Link href="/printing-services" className="group">
              <div className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group-hover:border-blue-300">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-white text-2xl font-bold">P</div>
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Printing Services</h3>
                <p className="text-slate-600 mb-4">
                  Digital and offset printing for all your business needs. From business cards to large format banners.
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>

            {/* Custom Gifts */}
            <Link href="/custom-gifts" className="group">
              <div className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group-hover:border-blue-300">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-white text-2xl font-bold">G</div>
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Custom Gifts</h3>
                <p className="text-slate-600 mb-4">
                  Personalized gifts and promotional items. Perfect for corporate events and special occasions.
                </p>
                <div className="flex items-center text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>

            {/* Photo Studio */}
            <Link href="/packaging-printing" className="group">
              <div className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group-hover:border-blue-300">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-white text-2xl font-bold">P</div>
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Packaging & Printing</h3>
                <p className="text-slate-600 mb-4">
                  High-quality packaging and printing solutions to elevate your brand and products.
                </p>
                <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>

            {/* Signage */}
            <Link href="/signage" className="group">
              <div className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group-hover:border-blue-300">
                <div className="bg-gradient-to-r from-orange-600 to-red-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-white text-2xl font-bold">S</div>
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Signage</h3>
                <p className="text-slate-600 mb-4">
                  Indoor and outdoor signage solutions. Vehicle wraps, banners, and custom displays.
                </p>
                <div className="flex items-center text-orange-600 font-semibold group-hover:text-orange-700 transition-colors">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-6">
                Trusted by Businesses for Over 3 Years
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Digital First has been at the forefront of the printing and design industry, serving thousands 
                of satisfied customers across UAE. Our commitment to quality, innovation, and 
                customer satisfaction has made us the preferred choice for businesses and individuals alike.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We&apos;re proud to offer state-of-the-art technology combined with decades of expertise, 
                ensuring every project meets the highest standards of excellence.
              </p>
              <Link href="/about" className="inline-flex items-center bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-blue-700" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Quality Guaranteed</h3>
                  <p className="text-slate-600 text-sm">Every project meets our high standards</p>
                </div>
                <div className="text-center">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-emerald-700" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Secure & Reliable</h3>
                  <p className="text-slate-600 text-sm">Your data and projects are safe with us</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-purple-700" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Fast Delivery</h3>
                  <p className="text-slate-600 text-sm">Quick turnaround times guaranteed</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-orange-700" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Expert Team</h3>
                  <p className="text-slate-600 text-sm">Experienced professionals at your service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">
              Visit Our Location
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Visit us at our main office and production facility in Industrial Area 2, Ajman, UAE.
            </p>
          </div>
          <div className="flex justify-center">
            <Link href="/locations/ajman" className="group">
              <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group-hover:border-blue-300">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">Ajman</h3>
                <p className="text-slate-600 text-sm">Industrial Area 2, Main office & production facility</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-700 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s bring your vision to life with our professional printing and design services.
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