import Link from "next/link"
import { Award, Brain, Target, Users, Zap, Shield, Star, CheckCircle } from "lucide-react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function DigitalFirstExpertisePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-serif font-bold mb-6">The Digital First Expertise</h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Discover our specialized knowledge, industry expertise, and innovative solutions 
            that set us apart in the digital printing and design industry.
          </p>
        </div>
      </section>

      {/* Core Expertise Areas */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Our Core Expertise</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Decades of experience combined with cutting-edge technology and innovative solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Digital Printing Expertise */}
            <div className="group bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Digital Printing Mastery</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Advanced digital printing techniques with precision color management and quality control.
              </p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  Color Management Systems
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  Variable Data Printing
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  High-Resolution Output
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  Quality Control Protocols
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  Workflow Optimization
                </li>
              </ul>
            </div>

            {/* Design Expertise */}
            <div className="group bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-indigo-600 to-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Creative Design Excellence</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Professional design services with creative vision and technical precision.
              </p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3"></div>
                  Brand Identity Development
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3"></div>
                  Marketing Material Design
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3"></div>
                  Print-Ready Artwork
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3"></div>
                  Creative Direction
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3"></div>
                  Design Consultation
                </li>
              </ul>
            </div>

            {/* Technology Expertise */}
            <div className="group bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-slate-600 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Technology Innovation</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                State-of-the-art equipment and cutting-edge technology solutions.
              </p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></div>
                  Latest Printing Equipment
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></div>
                  Digital Workflow Systems
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></div>
                  Automation Solutions
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></div>
                  Quality Monitoring
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></div>
                  Process Optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Knowledge */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Industry Knowledge & Experience</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              3+ years of industry experience across multiple sectors and markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Market Leadership</h3>
              <p className="text-slate-600">Leading position in UAE printing industry</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-indigo-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Expert Team</h3>
              <p className="text-slate-600">Skilled professionals with deep expertise</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-slate-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Quality Standards</h3>
              <p className="text-slate-600">International quality standards</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Innovation</h3>
              <p className="text-slate-600">Continuous innovation and improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Solutions */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Specialized Solutions</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Tailored solutions for specific industries and requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Corporate Solutions</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">Large-scale printing projects</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">Brand consistency management</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">Corporate identity packages</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">Marketing campaign support</span>
                </li>
              </ul>
            </div>

            <div className="group bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Event & Exhibition</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-3 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">Large format printing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-3 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">Exhibition graphics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-3 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">Event branding</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-3 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">Promotional materials</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Certifications & Recognition</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our expertise is recognized through various certifications and industry awards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Quality Certifications</h3>
              <p className="text-slate-600">ISO certified quality management systems</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-indigo-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Industry Awards</h3>
              <p className="text-slate-600">Recognition for excellence in printing</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-slate-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Environmental Standards</h3>
              <p className="text-slate-600">Eco-friendly printing practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-700 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">Experience Our Expertise</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let our team of experts help you with your printing and design needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
              Consult Our Experts
            </Link>
            <Link href="/locations" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
              Visit Our Studio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 