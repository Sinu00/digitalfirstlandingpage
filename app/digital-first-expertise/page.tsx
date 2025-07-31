"use client";

import Link from "next/link"
import { Award, Brain, Target, Users, Zap, Shield, Star, CheckCircle, Heart, Palette } from "lucide-react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { motion } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function DigitalFirstExpertisePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <Header />
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 shadow-lg"
          >
            <Palette className="h-10 w-10 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-5xl font-serif font-bold mb-6"
          >
            The Digital First Expertise
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-pink-100 max-w-3xl mx-auto"
          >
            Discover our specialized knowledge, industry expertise, and innovative solutions 
            that set us apart in the digital printing and design industry.
          </motion.p>
        </div>
      </section>

      {/* Core Expertise Areas */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-white via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full mb-6 shadow-lg">
              <Brain className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Our Core Expertise</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Decades of experience combined with cutting-edge technology and innovative solutions.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Digital Printing Expertise */}
            <motion.div 
              variants={fadeInUp}
              className="group bg-gradient-to-br from-white to-pink-50 rounded-xl p-6 border-2 border-pink-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:border-pink-400"
            >
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Digital Printing Mastery</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Advanced digital printing techniques with precision color management and quality control.
              </p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mr-3"></div>
                  Color Management Systems
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mr-3"></div>
                  Variable Data Printing
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mr-3"></div>
                  High-Resolution Output
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mr-3"></div>
                  Quality Control Protocols
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mr-3"></div>
                  Workflow Optimization
                </li>
              </ul>
            </motion.div>

            {/* Design Expertise */}
            <motion.div 
              variants={fadeInUp}
              className="group bg-gradient-to-br from-white to-green-50 rounded-xl p-6 border-2 border-green-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:border-green-400"
            >
              <div className="bg-gradient-to-br from-green-500 to-teal-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Creative Design Excellence</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Professional design services with creative vision and technical precision.
              </p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mr-3"></div>
                  Brand Identity Development
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mr-3"></div>
                  Marketing Material Design
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mr-3"></div>
                  Print-Ready Artwork
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mr-3"></div>
                  Creative Direction
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mr-3"></div>
                  Design Consultation
                </li>
              </ul>
            </motion.div>

            {/* Technology Expertise */}
            <motion.div 
              variants={fadeInUp}
              className="group bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 border-2 border-blue-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:border-blue-400"
            >
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Technology Innovation</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                State-of-the-art equipment and cutting-edge technology solutions.
              </p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-3"></div>
                  Latest Printing Equipment
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-3"></div>
                  Digital Workflow Systems
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-3"></div>
                  Automation Solutions
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-3"></div>
                  Quality Monitoring
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-3"></div>
                  Process Optimization
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industry Knowledge */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mb-6 shadow-lg">
              <Award className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Industry Knowledge & Experience</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              3+ years of industry experience across multiple sectors and markets.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Market Leadership</h3>
              <p className="text-slate-600">Leading position in UAE printing industry</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <div className="bg-gradient-to-br from-green-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Expert Team</h3>
              <p className="text-slate-600">Skilled professionals with deep expertise</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Quality Standards</h3>
              <p className="text-slate-600">International quality standards</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Innovation</h3>
              <p className="text-slate-600">Continuous innovation and improvement</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Specialized Solutions */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-6 shadow-lg">
              <Target className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Specialized Solutions</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Tailored solutions for specific industries and requirements.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              variants={fadeInUp}
              className="group bg-gradient-to-br from-white to-pink-50 rounded-xl p-6 border-2 border-pink-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:border-pink-400"
            >
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Corporate Solutions</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-pink-600 mr-3 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">Large-scale printing projects</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-pink-600 mr-3 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">Brand consistency management</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-pink-600 mr-3 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">Corporate identity packages</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-pink-600 mr-3 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">Marketing campaign support</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="group bg-gradient-to-br from-white to-green-50 rounded-xl p-6 border-2 border-green-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:border-green-400"
            >
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Event & Exhibition</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">Large format printing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">Exhibition graphics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">Event branding</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">Promotional materials</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mb-6 shadow-lg">
              <Star className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Certifications & Recognition</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our expertise is recognized through various certifications and industry awards.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Quality Certifications</h3>
              <p className="text-slate-600">ISO certified quality management systems</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <div className="bg-gradient-to-br from-green-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Industry Awards</h3>
              <p className="text-slate-600">Recognition for excellence in printing</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Environmental Standards</h3>
              <p className="text-slate-600">Eco-friendly printing practices</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 shadow-lg"
          >
            <Heart className="h-10 w-10 text-white" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4"
          >
            Experience Our Expertise
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-pink-100 mb-8 max-w-2xl mx-auto"
          >
            Let our team of experts help you with your printing and design needs.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/contact" className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors shadow-lg">
              Consult Our Experts
            </Link>
            <Link href="/locations" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition-colors">
              Visit Our Studio
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 