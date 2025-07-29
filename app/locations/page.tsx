"use client";

import { MapPin, Clock, Phone, Mail, Building } from "lucide-react";
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
      staggerChildren: 0.1
    }
  }
}

const countUpAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
}

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-16 lg:py-24 bg-gradient-to-r from-blue-700 to-indigo-800 text-white"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-3xl lg:text-5xl font-serif font-bold mb-6">Our Location</h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Visit us at our main office and production facility in Industrial Area 2, Ajman, UAE.
          </p>
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-3 gap-8 text-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={countUpAnimation}>
              <div className="text-2xl font-bold text-blue-700 mb-2">1</div>
              <div className="text-sm text-slate-600">Location</div>
            </motion.div>
            <motion.div variants={countUpAnimation}>
              <div className="text-2xl font-bold text-blue-700 mb-2">24/7</div>
              <div className="text-sm text-slate-600">Support</div>
            </motion.div>
            <motion.div variants={countUpAnimation}>
              <div className="text-2xl font-bold text-blue-700 mb-2">3+</div>
              <div className="text-sm text-slate-600">Years Experience</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Ajman Location Card */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Our Ajman Location</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We are located in Industrial Area 2, Ajman, UAE. Visit us for all your printing and packaging needs.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="group bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Building className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Ajman</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Industrial Area 2, Main office & production facility
              </p>
              <motion.div 
                className="space-y-2 mb-4"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div variants={fadeInUp} className="flex items-center text-slate-600 text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                  <span>Industrial Area 2, Ajman, UAE</span>
                </motion.div>
                <motion.div variants={fadeInUp} className="flex items-center text-slate-600 text-sm">
                  <Clock className="h-4 w-4 mr-2 text-blue-600" />
                  <span>Open 24/7</span>
                </motion.div>
                <motion.div variants={fadeInUp} className="flex items-center text-slate-600 text-sm">
                  <Phone className="h-4 w-4 mr-2 text-blue-600" />
                  <span>0506116675</span>
                </motion.div>
                <motion.div variants={fadeInUp} className="flex items-center text-slate-600 text-sm">
                  <Mail className="h-4 w-4 mr-2 text-blue-600" />
                  <span>digitalfirst@digitalfirstprint.com</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Services Available</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our Ajman location offers our complete range of services.
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
              <div className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <span className="text-white font-bold">🖨️</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Printing Services</h3>
              <p className="text-slate-600">Digital & offset printing</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <div className="bg-indigo-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <span className="text-white font-bold">🎁</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Custom Gifts</h3>
              <p className="text-slate-600">Personalized gift items</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <div className="bg-purple-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <span className="text-white font-bold">📸</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Packaging & Printing</h3>
              <p className="text-slate-600">Professional Packaging & Printing</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <span className="text-white font-bold">🚗</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Signage</h3>
              <p className="text-slate-600">Banners & vehicle wraps</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
} 