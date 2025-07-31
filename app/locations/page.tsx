"use client";

import { MapPin, Clock, Phone, Mail, Building, Heart, Zap } from "lucide-react";
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { motion } from "framer-motion"



const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}



const slideInFromLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
}

const slideInFromRight = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
}

const bounceIn = {
  initial: { opacity: 0, scale: 0.3, y: 50 },
  animate: { opacity: 1, scale: 1, y: 0 },
  transition: { 
    duration: 0.8, 
    ease: [0.68, -0.55, 0.265, 1.55],
    type: "spring",
    stiffness: 100
  }
}

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <Header />
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-16 lg:py-24 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 text-white"
      >
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 shadow-lg"
          >
            <Building className="h-10 w-10 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-3xl lg:text-5xl font-serif font-bold mb-6"
          >
            Our Location
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-lg text-pink-100 max-w-3xl mx-auto"
          >
            Visit us at our main office and production facility in Industrial Area 2, Ajman, UAE.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-white via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-3 gap-8 text-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              variants={bounceIn}
              className="bg-gradient-to-br from-white to-pink-50 rounded-xl p-6 border-2 border-pink-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                className="text-3xl font-bold text-pink-600 mb-2"
              >
                1
              </motion.div>
              <div className="text-sm text-slate-600">Location</div>
            </motion.div>
            <motion.div 
              variants={bounceIn}
              className="bg-gradient-to-br from-white to-purple-50 rounded-xl p-6 border-2 border-purple-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                className="text-3xl font-bold text-purple-600 mb-2"
              >
                24/7
              </motion.div>
              <div className="text-sm text-slate-600">Support</div>
            </motion.div>
            <motion.div 
              variants={bounceIn}
              className="bg-gradient-to-br from-white to-orange-50 rounded-xl p-6 border-2 border-orange-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                className="text-3xl font-bold text-orange-600 mb-2"
              >
                3+
              </motion.div>
              <div className="text-sm text-slate-600">Years Experience</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Ajman Location Card */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-6 shadow-lg"
            >
              <MapPin className="h-10 w-10 text-white" />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4"
            >
              Our Ajman Location
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-slate-600 max-w-3xl mx-auto"
            >
              We are located in Industrial Area 2, Ajman, UAE. Visit us for all your printing and packaging needs.
            </motion.p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="group bg-gradient-to-br from-white to-blue-50 rounded-xl p-8 border-2 border-blue-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:border-blue-400">
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                className="bg-gradient-to-br from-blue-500 to-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg"
              >
                <Building className="h-8 w-8 text-white" />
              </motion.div>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-2xl font-serif font-bold text-slate-900 mb-4"
              >
                Ajman
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-slate-600 leading-relaxed text-lg mb-6"
              >
                Industrial Area 2, Main office & production facility
              </motion.p>
              <motion.div 
                className="space-y-4 mb-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div 
                  variants={slideInFromLeft}
                  className="flex items-center text-slate-600 text-lg"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="bg-gradient-to-br from-pink-500 to-purple-600 p-2 rounded-lg mr-4 shadow-md"
                  >
                    <MapPin className="h-5 w-5 text-white" />
                  </motion.div>
                  <span>Industrial Area 2, Ajman, UAE</span>
                </motion.div>
                <motion.div 
                  variants={slideInFromRight}
                  className="flex items-center text-slate-600 text-lg"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="bg-gradient-to-br from-green-500 to-teal-500 p-2 rounded-lg mr-4 shadow-md"
                  >
                    <Clock className="h-5 w-5 text-white" />
                  </motion.div>
                  <span>Open 24/7</span>
                </motion.div>
                <motion.div 
                  variants={slideInFromLeft}
                  className="flex items-center text-slate-600 text-lg"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="bg-gradient-to-br from-blue-500 to-indigo-500 p-2 rounded-lg mr-4 shadow-md"
                  >
                    <Phone className="h-5 w-5 text-white" />
                  </motion.div>
                  <span>0506116675</span>
                </motion.div>
                <motion.div 
                  variants={slideInFromRight}
                  className="flex items-center text-slate-600 text-lg"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="bg-gradient-to-br from-orange-500 to-red-500 p-2 rounded-lg mr-4 shadow-md"
                  >
                    <Mail className="h-5 w-5 text-white" />
                  </motion.div>
                  <span>digitalfirst@digitalfirstprint.com</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mb-6 shadow-lg"
            >
              <Zap className="h-10 w-10 text-white" />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4"
            >
              Services Available
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-slate-600 max-w-3xl mx-auto"
            >
              Our Ajman location offers our complete range of services.
            </motion.p>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div 
              variants={bounceIn}
              className="text-center space-y-4 group"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-gradient-to-br from-pink-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg"
              >
                <span className="text-white font-bold text-xl">🖨️</span>
              </motion.div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Printing Services</h3>
              <p className="text-slate-600">Digital & offset printing</p>
            </motion.div>
            <motion.div 
              variants={bounceIn}
              className="text-center space-y-4 group"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-gradient-to-br from-green-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg"
              >
                <span className="text-white font-bold text-xl">🎁</span>
              </motion.div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Custom Gifts</h3>
              <p className="text-slate-600">Personalized gift items</p>
            </motion.div>
            <motion.div 
              variants={bounceIn}
              className="text-center space-y-4 group"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-gradient-to-br from-blue-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg"
              >
                <span className="text-white font-bold text-xl">📸</span>
              </motion.div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Packaging & Printing</h3>
              <p className="text-slate-600">Professional Packaging & Printing</p>
            </motion.div>
            <motion.div 
              variants={bounceIn}
              className="text-center space-y-4 group"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-gradient-to-br from-orange-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg"
              >
                <span className="text-white font-bold text-xl">🚗</span>
              </motion.div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Signage</h3>
              <p className="text-slate-600">Banners & vehicle wraps</p>
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4"
          >
            Ready to Visit Us?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg text-pink-100 mb-8 max-w-2xl mx-auto"
          >
            Come visit our facility and see our state-of-the-art printing equipment in action.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:0506116675" 
              className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors shadow-lg"
            >
              Call Now
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:digitalfirst@digitalfirstprint.com" 
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition-colors"
            >
              Email Us
            </motion.a>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
} 