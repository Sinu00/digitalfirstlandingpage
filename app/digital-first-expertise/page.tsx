import Link from "next/link"
import { Award, Brain, Target, Users, Zap, Shield, Star, CheckCircle } from "lucide-react"

export default function DigitalFirstExpertisePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 font-bold text-2xl rounded-lg shadow-lg">
                DIGITAL FIRST
              </div>
              <div className="ml-3 text-gray-700 text-sm font-medium">Print & Design Solutions</div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</Link>
              <Link href="/printing-services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Printing Services</Link>
              <Link href="/custom-gifts" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Custom Gifts</Link>
              <Link href="/photo-studio" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Photo Studio</Link>
              <Link href="/signage" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Signage</Link>
              <Link href="/locations" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Locations</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">The Digital First Expertise</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Discover our specialized knowledge, industry expertise, and innovative solutions 
            that set us apart in the digital printing and design industry.
          </p>
        </div>
      </section>

      {/* Core Expertise Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Decades of experience combined with cutting-edge technology and innovative solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Digital Printing Expertise */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Printing Mastery</h3>
              <p className="text-gray-600 mb-6">
                Advanced digital printing techniques with precision color management and quality control.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Color Management Systems</li>
                <li>• Variable Data Printing</li>
                <li>• High-Resolution Output</li>
                <li>• Quality Control Protocols</li>
                <li>• Workflow Optimization</li>
              </ul>
            </div>

            {/* Design Expertise */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Creative Design Excellence</h3>
              <p className="text-gray-600 mb-6">
                Professional design services with creative vision and technical precision.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Brand Identity Development</li>
                <li>• Marketing Material Design</li>
                <li>• Print-Ready Artwork</li>
                <li>• Creative Direction</li>
                <li>• Design Consultation</li>
              </ul>
            </div>

            {/* Technology Expertise */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology Innovation</h3>
              <p className="text-gray-600 mb-6">
                State-of-the-art equipment and cutting-edge technology solutions.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Latest Printing Equipment</li>
                <li>• Digital Workflow Systems</li>
                <li>• Automation Solutions</li>
                <li>• Quality Monitoring</li>
                <li>• Process Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Knowledge */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Knowledge & Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              38+ years of industry experience across multiple sectors and markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-indigo-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Market Leadership</h3>
              <p className="text-gray-600">Leading position in UAE printing industry</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Expert Team</h3>
              <p className="text-gray-600">Skilled professionals with deep expertise</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Quality Standards</h3>
              <p className="text-gray-600">International quality standards</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Star className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Innovation</h3>
              <p className="text-gray-600">Continuous innovation and improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialized Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for specific industries and requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Corporate Solutions</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Large-scale printing projects</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Brand consistency management</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Corporate identity packages</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Marketing campaign support</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Event & Exhibition</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Large format printing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Exhibition graphics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Event branding</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Promotional materials</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Recognition</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise is recognized through various certifications and industry awards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Quality Certifications</h3>
              <p className="text-gray-600">ISO certified quality management systems</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Industry Awards</h3>
              <p className="text-gray-600">Recognition for excellence in printing</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Environmental Standards</h3>
              <p className="text-gray-600">Eco-friendly printing practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Experience Our Expertise</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Let our team of experts help you with your printing and design needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Consult Our Experts
            </Link>
            <Link href="/locations" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
              Visit Our Studio
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 font-bold text-xl rounded mb-4 inline-block">
                DIGITAL FIRST
              </div>
              <p className="text-gray-400">
                Your complete digital printing and design solution with over 38 years of excellence.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/printing-services" className="hover:text-white transition-colors">Printing Services</Link></li>
                <li><Link href="/custom-gifts" className="hover:text-white transition-colors">Custom Gifts</Link></li>
                <li><Link href="/photo-studio" className="hover:text-white transition-colors">Photo Studio</Link></li>
                <li><Link href="/signage" className="hover:text-white transition-colors">Signage</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Locations</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/locations/dubai" className="hover:text-white transition-colors">Dubai</Link></li>
                <li><Link href="/locations/abu-dhabi" className="hover:text-white transition-colors">Abu Dhabi</Link></li>
                <li><Link href="/locations/sharjah" className="hover:text-white transition-colors">Sharjah</Link></li>
                <li><Link href="/locations/canada" className="hover:text-white transition-colors">Canada</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <span className="text-sm">+971 58 987 5122</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm">info@digitalfirst.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Digital First. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 