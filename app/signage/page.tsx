import Link from "next/link"
import { Palette, Clock, Shield, Award } from "lucide-react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Image from 'next/image'

export default function SignagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">Signage Solutions</h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Make your brand stand out with professional signage solutions. 
            From banners to vehicle wraps, we create impactful visual experiences.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive signage solutions to elevate your brand&apos;s visibility and impact.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Outdoor Signage',
                img: '/signage/outdoor-signage.jpg',
                desc: 'Desco Signage provides you with durable and high-impact outdoor signage designed to elevate your brand&apos;s visibility and attract attention from any distance.'
              },
              {
                name: 'Indoor Signage',
                img: '/signage/indoor-signage.jpg',
                desc: 'Desco Signage provides custom indoor signage that enhances your interiors, creating a welcoming and informative atmosphere that aligns with your brand identity.'
              },
              {
                name: '3D Signage',
                img: '/signage/3d-signage.jpg',
                desc: 'Desco Signage provides you with unique 3D signage that adds depth and dimension, making your brand visually compelling and unforgettable.'
              },
              {
                name: 'Wall Branding',
                img: '/signage/wall-branding.jpg',
                desc: 'Desco Signage provides you with stunning wall graphics that transform blank walls into powerful storytelling spaces.'
              },
              {
                name: 'Vehicle Graphics',
                img: '/signage/vehicle-graphics.jpg',
                desc: 'Desco Signage provides you with vibrant vehicle graphics that turn your vehicles into moving advertisements, maximizing brand exposure wherever they go.'
              },
              {
                name: 'Exhibition Stands',
                img: '/signage/exhibition-stands.jpg',
                desc: 'Desco Signage provides custom designed exhibition stands that make a powerful impression at events, helping you showcase your brand&apos;s uniqueness and professionalism.'
              },
            ].map((service) => (
              <div key={service.name} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
                <Image
                  src={service.img}
                  alt={service.name}
                  width={400}
                  height={224}
                  className="w-full h-40 md:h-48 lg:h-56 object-cover rounded-lg mb-4 border border-slate-100 bg-slate-100"
                />
                <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">{service.name}</h3>
                <p className="text-slate-600 text-sm mb-2">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Why Choose Our Signage Services?</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Professional signage solutions with premium materials and expert installation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Palette className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Custom Design</h3>
              <p className="text-slate-600 text-sm">Tailored designs that match your brand identity</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-indigo-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Weather Resistant</h3>
              <p className="text-slate-600 text-sm">UV-resistant and weatherproof materials</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-purple-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Quick Turnaround</h3>
              <p className="text-slate-600 text-sm">Fast production and installation times</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Quality Guaranteed</h3>
              <p className="text-slate-600 text-sm">Premium quality materials and workmanship</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Our Signage Process</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From concept to installation, we handle every step of your signage project.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-6">
              <div className="bg-gradient-to-r from-blue-700 to-indigo-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl shadow-lg">
                1
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900">Consultation</h3>
              <p className="text-slate-600 leading-relaxed">
                We discuss your requirements, location, and design preferences to create the perfect solution.
              </p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="bg-gradient-to-r from-indigo-700 to-purple-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl shadow-lg">
                2
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900">Design</h3>
              <p className="text-slate-600 leading-relaxed">
                Our design team creates custom artwork that perfectly represents your brand and message.
              </p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="bg-gradient-to-r from-purple-700 to-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl shadow-lg">
                3
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900">Production</h3>
              <p className="text-slate-600 leading-relaxed">
                We use high-quality materials and state-of-the-art equipment to produce your signage.
              </p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl shadow-lg">
                4
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900">Installation</h3>
              <p className="text-slate-600 leading-relaxed">
                Our professional installation team ensures your signage is perfectly positioned and secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-700 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">Ready to Make Your Mark?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let us help you create impactful signage that gets your message noticed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
              Get Quote
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