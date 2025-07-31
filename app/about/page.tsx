"use client";

import Link from "next/link"
import { Award, Clock, Users, Shield, Zap, Star, Heart, Building2 } from "lucide-react"
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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <Header />
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 shadow-lg"
          >
            <Building2 className="h-10 w-10 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-5xl font-serif font-bold mb-6"
          >
            About Digital First
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-pink-100 max-w-3xl mx-auto"
          >
            For over 3 years, we&apos;ve been the trusted partner for printing and design solutions 
            across UAE.
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-white via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900">Our Story</h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-lg text-slate-600 leading-relaxed"
              >
                Founded in 2022, Digital First began as a small printing shop with a big vision: to revolutionize 
                the printing industry through technology and innovation. Today, we are proud to serve our customers from our main office and production facility in Industrial Area 2, Ajman, UAE.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-slate-600 leading-relaxed"
              >
                We&apos;re proud to be one of the region&apos;s leading digital printing and packaging companies, 
                serving satisfied customers with cutting-edge technology and exceptional service.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 rounded-xl p-8 text-white text-center shadow-2xl border-2 border-white/20"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="space-y-4"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div variants={fadeInUp} className="bg-white/20 rounded-lg p-4 inline-block shadow-lg">
                  <Award className="h-12 w-12 mx-auto" />
                </motion.div>
                <motion.h3 variants={fadeInUp} className="text-2xl font-serif font-bold">3+ Years of Excellence</motion.h3>
                <motion.p variants={fadeInUp} className="text-pink-100">
                  Decades of experience in digital printing and design
                </motion.p>
                <motion.div variants={fadeInUp} className="flex justify-center space-x-4">
                  <div className="bg-white/20 rounded-lg px-4 py-2 shadow-md">
                    <span className="font-semibold">Ajman, UAE</span>
                  </div>
                  <div className="bg-white/20 rounded-lg px-4 py-2 shadow-md">
                    <span className="font-semibold">Expert Team</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full mb-6 shadow-lg">
              <Star className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Our Mission & Values</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We&apos;re committed to delivering excellence in every project while maintaining the highest standards of quality and service.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Innovation */}
            <motion.div 
              variants={fadeInUp}
              className="group bg-gradient-to-br from-white to-pink-50 rounded-xl p-6 border-2 border-pink-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:border-pink-400"
            >
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Innovation</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Continuously embracing new technologies and creative solutions to meet evolving customer needs.
              </p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mr-3"></div>
                  Latest technology adoption
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mr-3"></div>
                  Creative problem solving
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mr-3"></div>
                  Process optimization
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mr-3"></div>
                  Future-focused approach
                </li>
              </ul>
            </motion.div>

            {/* Quality */}
            <motion.div 
              variants={fadeInUp}
              className="group bg-gradient-to-br from-white to-green-50 rounded-xl p-6 border-2 border-green-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:border-green-400"
            >
              <div className="bg-gradient-to-br from-green-500 to-teal-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Quality</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Maintaining the highest standards of quality in every project, from concept to final delivery.
              </p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mr-3"></div>
                  Premium materials
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mr-3"></div>
                  Quality control processes
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mr-3"></div>
                  Attention to detail
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mr-3"></div>
                  Customer satisfaction
                </li>
              </ul>
            </motion.div>

            {/* Customer Focus */}
            <motion.div 
              variants={fadeInUp}
              className="group bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 border-2 border-blue-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:border-blue-400"
            >
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Customer Focus</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Putting our customers first with personalized service and dedicated support throughout their journey.
              </p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-3"></div>
                  Personalized service
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-3"></div>
                  Dedicated support
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-3"></div>
                  Quick response times
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-3"></div>
                  Long-term partnerships
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mb-6 shadow-lg">
              <Users className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Our Expert Team</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Meet the professionals who make Digital First the trusted choice for printing and design solutions.
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
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Design Experts</h3>
              <p className="text-slate-600">Creative professionals with years of experience</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <div className="bg-gradient-to-br from-green-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Quality Specialists</h3>
              <p className="text-slate-600">Ensuring every project meets our high standards</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Service Team</h3>
              <p className="text-slate-600">Dedicated to providing exceptional customer service</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Technical Experts</h3>
              <p className="text-slate-600">Mastering the latest printing technologies</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
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
            Ready to Work With Us?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-pink-100 mb-8 max-w-2xl mx-auto"
          >
            Experience the Digital First difference with our professional printing and design services.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/contact" className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors shadow-lg">
              Get Started
            </Link>
            <Link href="/locations" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition-colors">
              Find Location
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 