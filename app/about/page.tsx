import Link from "next/link"
import { Award, Clock, Users, Shield, Zap, Star, Phone, Mail } from "lucide-react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-serif font-bold mb-6">About Digital First</h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            For over 3 years, we&apos;ve been the trusted partner for printing and design solutions 
            across the UAE and Canada.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900">Our Story</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Founded in 1987, Digital First began as a small printing shop with a big vision: to revolutionize 
                the printing industry through technology and innovation. What started as a single location has 
                grown into a network of over 50 branches across the UAE and Canada.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Today, we&apos;re proud to be one of the region&apos;s leading digital printing and design companies, 
                serving thousands of satisfied customers with cutting-edge technology and exceptional service.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-700 to-indigo-800 rounded-xl p-8 text-white text-center shadow-lg">
              <div className="space-y-4">
                <div className="bg-white/20 rounded-lg p-4 inline-block">
                  <Award className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-2xl font-serif font-bold">3+ Years of Excellence</h3>
                <p className="text-blue-100">
                  Decades of experience in digital printing and design
                </p>
                <div className="flex justify-center space-x-4">
                  <div className="bg-white/20 rounded-lg px-4 py-2">
                    <span className="font-semibold">50+ Locations</span>
                  </div>
                  <div className="bg-white/20 rounded-lg px-4 py-2">
                    <span className="font-semibold">Expert Team</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Our Mission & Values</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We&apos;re committed to delivering excellence in every project while maintaining the highest standards of quality and service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Innovation */}
            <div className="group bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Innovation</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Continuously embracing new technologies and creative solutions to meet evolving customer needs.
              </p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  Latest technology adoption
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  Creative problem solving
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  Process optimization
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  Future-focused approach
                </li>
              </ul>
            </div>

            {/* Quality */}
            <div className="group bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-indigo-600 to-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Quality</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Maintaining the highest standards of quality in every project, from concept to final delivery.
              </p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3"></div>
                  Premium materials
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3"></div>
                  Quality control processes
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3"></div>
                  Attention to detail
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3"></div>
                  Customer satisfaction
                </li>
              </ul>
            </div>

            {/* Customer Focus */}
            <div className="group bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-slate-600 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Customer Focus</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Putting our customers first with personalized service and dedicated support throughout their journey.
              </p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></div>
                  Personalized service
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></div>
                  Dedicated support
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></div>
                  Quick response times
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></div>
                  Long-term partnerships
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Our Expert Team</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Meet the professionals who make Digital First the trusted choice for printing and design solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Design Experts</h3>
              <p className="text-slate-600">Creative professionals with years of experience</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-indigo-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Quality Specialists</h3>
              <p className="text-slate-600">Ensuring every project meets our high standards</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-slate-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Service Team</h3>
              <p className="text-slate-600">Dedicated to providing exceptional customer service</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Technical Experts</h3>
              <p className="text-slate-600">Mastering the latest printing technologies</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-700 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">Ready to Work With Us?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience the Digital First difference with our professional printing and design services.
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