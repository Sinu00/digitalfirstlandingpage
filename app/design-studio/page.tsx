import Link from "next/link"
import { Palette, Brush, Layers, Sparkles, Eye, Zap } from "lucide-react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Design Studio | Creative Graphic Design Services | Digital First UAE & Canada",
  description: "Bring your ideas to life with Digital First's creative design studio. Professional graphic design, branding, and custom artwork for print and digital projects.",
  openGraph: {
    title: "Design Studio | Creative Graphic Design Services | Digital First UAE & Canada",
    description: "Bring your ideas to life with Digital First's creative design studio. Professional graphic design, branding, and custom artwork for print and digital projects.",
    url: "https://digitalfirstprint.com/design-studio",
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
    title: "Design Studio | Creative Graphic Design Services | Digital First UAE & Canada",
    description: "Bring your ideas to life with Digital First's creative design studio. Professional graphic design, branding, and custom artwork for print and digital projects.",
    images: ["/digitalfirstlogo.jpg"],
  },
}

export default function DesignStudioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-serif font-bold mb-6">Design Studio</h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Transform your ideas into stunning visual designs. Our creative team brings your vision to life 
            with professional graphic design services.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Logo Design */}
            <div className="group bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Palette className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Logo Design</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Professional logo design that captures your brand identity and makes a lasting impression.
              </p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  Brand Identity Design
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  Logo Variations
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  Color Schemes
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  Brand Guidelines
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  Vector Formats
                </li>
              </ul>
            </div>

            {/* Marketing Materials */}
            <div className="group bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-indigo-600 to-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Brush className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Marketing Materials</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Comprehensive marketing collateral to promote your business effectively.
              </p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3"></div>
                  Business Cards
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3"></div>
                  Brochures & Flyers
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3"></div>
                  Social Media Graphics
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3"></div>
                  Email Templates
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3"></div>
                  Presentation Design
                </li>
              </ul>
            </div>

            {/* Invitations & Events */}
            <div className="group bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-slate-600 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Invitations & Events</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Beautiful designs for special occasions and corporate events.
              </p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></div>
                  Wedding Invitations
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></div>
                  Corporate Events
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></div>
                  Birthday Cards
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></div>
                  Announcements
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></div>
                  Event Programs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Our Design Process</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We follow a proven process to deliver exceptional design results every time.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-6">
              <div className="bg-gradient-to-r from-blue-700 to-indigo-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl shadow-lg">
                1
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Discovery</h3>
              <p className="text-slate-600">
                We understand your needs, target audience, and brand requirements to create the perfect design strategy.
              </p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="bg-gradient-to-r from-indigo-700 to-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl shadow-lg">
                2
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Concept</h3>
              <p className="text-slate-600">
                Our designers create multiple concepts and present you with various options to choose from.
              </p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="bg-gradient-to-r from-slate-700 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl shadow-lg">
                3
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Refinement</h3>
              <p className="text-slate-600">
                We refine the chosen concept based on your feedback to perfect every detail.
              </p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl shadow-lg">
                4
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Delivery</h3>
              <p className="text-slate-600">
                Final files are delivered in all required formats, ready for print and digital use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Design */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Why Choose Our Design Studio?</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Professional design services with creative expertise and technical excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Creative Vision</h3>
              <p className="text-slate-600">Unique and innovative design concepts</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-indigo-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Fast Turnaround</h3>
              <p className="text-slate-600">Quick delivery without compromising quality</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-slate-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Layers className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Multiple Formats</h3>
              <p className="text-slate-600">Files delivered in all required formats</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-700 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">Ready to Create Something Amazing?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let our design team bring your vision to life with professional creativity.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
              Start Your Project
            </Link>
            <Link href="/locations" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
              Visit Studio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 