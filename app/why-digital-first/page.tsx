"use client";

import Link from "next/link"
import { Award, Clock, MapPin, Users, Shield, Zap, Star, Heart, Target } from "lucide-react"
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

export default function WhyDigitalFirstPage() {
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
            <Target className="h-10 w-10 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-5xl font-serif font-bold mb-6"
          >
            Why Choose Digital First?
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-pink-100 max-w-3xl mx-auto"
          >
            Discover what makes us the preferred choice for printing and design solutions 
            across UAE.
          </motion.p>
        </div>
      </section>

      {/* Key Advantages */}
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
              <Star className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">What Sets Us Apart</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We&apos;ve built our reputation on excellence, innovation, and customer satisfaction.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Experience */}
            <motion.div 
              variants={fadeInUp}
              className="group bg-gradient-to-br from-white to-pink-50 rounded-xl p-6 border-2 border-pink-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:border-pink-400"
            >
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">3+ Years Experience</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Nearly four decades of expertise in the printing industry, making us one of the most trusted names in the region.
              </p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mr-3"></div>
                  Industry veterans since 2022
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mr-3"></div>
                  Proven track record
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mr-3"></div>
                  Deep market knowledge
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mr-3"></div>
                  Established reputation
                </li>
              </ul>
            </motion.div>

            {/* Technology */}
            <motion.div 
              variants={fadeInUp}
              className="group bg-gradient-to-br from-white to-green-50 rounded-xl p-6 border-2 border-green-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:border-green-400"
            >
              <div className="bg-gradient-to-br from-green-500 to-teal-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Latest Technology</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                State-of-the-art equipment and cutting-edge technology for superior quality results.
              </p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mr-3"></div>
                  Advanced printing equipment
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mr-3"></div>
                  Digital workflow systems
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mr-3"></div>
                  Quality control technology
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mr-3"></div>
                  Continuous innovation
                </li>
              </ul>
            </motion.div>

            {/* Convenience */}
            <motion.div 
              variants={fadeInUp}
              className="group bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 border-2 border-blue-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:border-blue-400"
            >
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Our Location</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Visit us at Digital First Printing & Packaging, Industrial Area 2, Ajman, UAE.
              </p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-3"></div>
                  Conveniently located in Ajman
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-3"></div>
                  Easy access and parking
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-3"></div>
                  Friendly, local service
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-3"></div>
                  Consistent quality at our main branch
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
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
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Benefits of Choosing Digital First</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Experience the advantages that make us the preferred choice for businesses and individuals.
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
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Fast Turnaround</h3>
              <p className="text-slate-600">Quick delivery times with guaranteed quality</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <div className="bg-gradient-to-br from-green-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Quality Guaranteed</h3>
              <p className="text-slate-600">Premium quality with satisfaction guarantee</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Expert Team</h3>
              <p className="text-slate-600">Professional staff with years of experience</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Customer Focus</h3>
              <p className="text-slate-600">Dedicated to customer satisfaction</p>
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
            Ready to Experience the Difference?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-pink-100 mb-8 max-w-2xl mx-auto"
          >
            Join thousands of satisfied customers who choose Digital First for their printing and design needs.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/locations" className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors shadow-lg">
              Find Location
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition-colors">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 