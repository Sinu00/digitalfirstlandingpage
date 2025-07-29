"use client";

import Link from "next/link"
import { ArrowRight, MapPin, Clock, Award, Shield, Users, Star, Phone, Mail } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import HeroSlider from "../components/HeroSlider"
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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      {/* Hero Section */}
      <HeroSlider>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl lg:text-4xl font-serif font-bold mb-6 leading-tight text-white">
              Digital First Printing & Packaging Industry
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg text-blue-100 mb-8 leading-relaxed"
            >
              With over 3 years of excellence, we deliver premium printing services, custom gifts, 
              innovative packaging & commercial printing solutions across the UAE.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/printing-services" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
                Explore Services
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
                Get Quote
              </Link>
            </motion.div>
          </motion.div>
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <motion.div 
                className="grid grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {/* Stats items */}
                <motion.div variants={fadeInUp} className="text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">3+ Years</h3>
                  <p className="text-blue-100 text-sm">Industry Experience</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">10,000+</h3>
                  <p className="text-blue-100 text-sm">Happy Clients</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Premium</h3>
                  <p className="text-blue-100 text-sm">Quality Service</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Fast</h3>
                  <p className="text-blue-100 text-sm">Turnaround</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </HeroSlider>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From digital printing to custom gifts, we offer comprehensive solutions for all your business and personal needs.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Printing Services */}
            <motion.div variants={fadeInUp}>
              <Link href="/printing-services" className="group block">
                <div className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group-hover:border-blue-300">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <div className="text-white text-2xl font-bold">P</div>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Printing Services</h3>
                  <p className="text-slate-600 mb-4">
                    Digital and offset printing for all your business needs. From business cards to large format banners.
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Custom Gifts */}
            <motion.div variants={fadeInUp}>
              <Link href="/custom-gifts" className="group block">
                <div className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group-hover:border-blue-300">
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <div className="text-white text-2xl font-bold">G</div>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Custom Gifts</h3>
                  <p className="text-slate-600 mb-4">
                    Personalized gifts and promotional items. Perfect for corporate events and special occasions.
                  </p>
                  <div className="flex items-center text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Packaging and printing */}
            <motion.div variants={fadeInUp}>
              <Link href="/packaging-printing" className="group block">
                <div className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group-hover:border-blue-300">
                  <div className="bg-gradient-to-r from-orange-600 to-red-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <div className="text-white text-2xl font-bold">P</div>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Packaging & Printing</h3>
                  <p className="text-slate-600 mb-4">
                    Professional packaging solutions for products. Custom designs and high-quality printing.
                  </p>
                  <div className="flex items-center text-orange-600 font-semibold group-hover:text-orange-700 transition-colors">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-6">
                Trusted by Businesses for Over 3 Years
              </h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-lg text-slate-600 mb-6 leading-relaxed"
              >
                Digital First has been at the forefront of the printing and design industry, serving thousands 
                of satisfied customers across UAE. Our commitment to quality, innovation, and 
                customer satisfaction has made us the preferred choice for businesses and individuals alike.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-slate-600 mb-8 leading-relaxed"
              >
                We&apos;re proud to offer state-of-the-art technology combined with decades of expertise, 
                ensuring every project meets the highest standards of excellence.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Link href="/about" className="inline-flex items-center bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="grid grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div variants={fadeInUp} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-blue-700" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Quality Guaranteed</h3>
                  <p className="text-slate-600 text-sm">Every project meets our high standards</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="text-center">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-emerald-700" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Secure & Reliable</h3>
                  <p className="text-slate-600 text-sm">Your data and projects are safe with us</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">
              Our Location in Ajman
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Centrally located in Industrial Area 2, our state-of-the-art facility serves all your printing and packaging needs.
            </p>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-serif font-bold text-slate-900">Digital First Printing & Packaging</h3>
                  <p className="text-slate-600">Industrial Area 2, Ajman, UAE</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center text-slate-600">
                  <Clock className="h-5 w-5 mr-3 text-blue-600" />
                  <span>Open 24/7 for your convenience</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <Phone className="h-5 w-5 mr-3 text-blue-600" />
                  <span>0506116675</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <Mail className="h-5 w-5 mr-3 text-blue-600" />
                  <span>digitalfirst@digitalfirstprint.com</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                  Get Directions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center border border-blue-700 text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Contact Us
                </Link>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h4 className="text-lg font-serif font-bold text-slate-900 mb-4">Why Visit Our Location?</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mt-1">
                      <Award className="h-4 w-4 text-blue-700" />
                    </div>
                    <span className="ml-3 text-slate-600">State-of-the-art printing facility with latest technology</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mt-1">
                      <Clock className="h-4 w-4 text-blue-700" />
                    </div>
                    <span className="ml-3 text-slate-600">24/7 operation for urgent printing needs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mt-1">
                      <Users className="h-4 w-4 text-blue-700" />
                    </div>
                    <span className="ml-3 text-slate-600">Expert staff available for consultations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mt-1">
                      <Shield className="h-4 w-4 text-blue-700" />
                    </div>
                    <span className="ml-3 text-slate-600">Secure facility for confidential printing projects</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white">
                <h4 className="text-lg font-serif font-bold mb-2">Free Consultation</h4>
                <p className="text-blue-100 mb-4">Visit us for a free consultation on your printing and packaging needs</p>
                <Link href="/contact" className="inline-flex items-center bg-white text-blue-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors">
                  Book Consultation
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-700 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s bring your vision to life with our professional printing and design services.
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