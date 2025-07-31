import Link from "next/link"
import { Clock, Phone, Mail, Shield, Zap, Star, CheckCircle } from "lucide-react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "24/7 Emergency Printing Services | Digital First UAE & Canada",
  description: "Get urgent printing services any time, day or night. Digital First offers 24/7 emergency printing for documents, marketing materials, and signage across the UAE and Canada.",
  openGraph: {
    title: "24/7 Emergency Printing Services | Digital First UAE & Canada",
    description: "Get urgent printing services any time, day or night. Digital First offers 24/7 emergency printing for documents, marketing materials, and signage across the UAE and Canada.",
    url: "https://digitalfirst.com/24hrs-printing",
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
    title: "24/7 Emergency Printing Services | Digital First UAE & Canada",
    description: "Get urgent printing services any time, day or night. Digital First offers 24/7 emergency printing for documents, marketing materials, and signage across the UAE and Canada.",
    images: ["/digitalfirstlogo.jpg"],
  },
};

export default function TwentyFourHoursPrintingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-serif font-bold mb-6">24/7 Emergency Printing Services</h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            When you need it done right now. Our emergency printing services are available 24/7 
            for urgent projects that can&apos;t wait.
          </p>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Emergency Printing Solutions</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We understand that sometimes you need printing services outside of regular business hours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Urgent Documents */}
            <div className="group bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Urgent Documents</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Emergency printing for contracts, reports, presentations, and other critical documents.
              </p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  Legal documents
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  Business contracts
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  Emergency reports
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  Presentation materials
                </li>
              </ul>
            </div>

            {/* Marketing Materials */}
            <div className="group bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-indigo-600 to-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Marketing Materials</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Last-minute marketing materials for events, campaigns, and promotional activities.
              </p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3"></div>
                  Event banners
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3"></div>
                  Promotional flyers
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3"></div>
                  Business cards
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3"></div>
                  Brochures
                </li>
              </ul>
            </div>

            {/* Signage & Graphics */}
            <div className="group bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-slate-600 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Signage & Graphics</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Emergency signage, posters, and large format printing for immediate needs.
              </p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></div>
                  Emergency signs
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></div>
                  Event posters
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></div>
                  Display graphics
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></div>
                  Vehicle graphics
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Available Services */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Available 24/7 Services</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our emergency printing services cover all your urgent printing needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Digital Printing</h3>
              <p className="text-slate-600">High-quality digital printing</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-indigo-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Large Format</h3>
              <p className="text-slate-600">Banners, posters, and signage</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-slate-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Binding</h3>
              <p className="text-slate-600">Professional binding services</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Finishing</h3>
              <p className="text-slate-600">Lamination and finishing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900">Emergency Contact</h2>
              <p className="text-lg text-slate-600">
                Need emergency printing services? Contact us immediately and we&apos;ll get your project done right away.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-700 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-slate-900">Emergency Hotline</h3>
                    <p className="text-slate-600 text-sm">+971 50 611 6675</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-700 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-slate-900">Email Support</h3>
                    <p className="text-slate-600 text-sm">digitalfirst@digitalfirstprint.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-slate-700 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-slate-900">Priority Service</h3>
                    <p className="text-slate-600 text-sm">Express processing and delivery</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-700 to-indigo-800 rounded-xl p-8 text-white text-center shadow-lg">
              <div className="space-y-4">
                <div className="bg-white/20 rounded-lg p-4 inline-block">
                  <Clock className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-2xl font-serif font-bold">24/7 Available</h3>
                <p className="text-blue-100">
                  Emergency printing services available round the clock
                </p>
                <div className="flex justify-center space-x-4">
                  <div className="bg-white/20 rounded-lg px-4 py-2">
                    <span className="font-semibold">Fast Turnaround</span>
                  </div>
                  <div className="bg-white/20 rounded-lg px-4 py-2">
                    <span className="font-semibold">Quality Guaranteed</span>
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
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">Need Emergency Printing?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Don&apos;t let urgent deadlines hold you back. Contact us now for immediate assistance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
              Contact Now
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