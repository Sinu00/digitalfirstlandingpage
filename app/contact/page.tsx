"use client";

import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Heart, ArrowRight } from "lucide-react"
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

export default function ContactPage() {
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
            <MessageCircle className="h-10 w-10 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-5xl font-serif font-bold mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-pink-100 max-w-3xl mx-auto"
          >
            Get in touch with our team. We&apos;re here to help with all your printing and design needs.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-white via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Phone */}
            <motion.div 
              variants={fadeInUp}
              className="group bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 border-2 border-blue-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:border-blue-400"
            >
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Call Us</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">Speak directly with our team</p>
              <div className="space-y-2">
                <a href="tel:+971506116675" className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
                  +971 50 611 6675
                </a>
                <div className="text-xs text-slate-500">Available 24/7</div>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div 
              variants={fadeInUp}
              className="group bg-gradient-to-br from-white to-pink-50 rounded-xl p-6 border-2 border-pink-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:border-pink-400"
            >
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Email Us</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">Send us your inquiries</p>
              <div className="space-y-2">
                <a href="mailto:digitalfirst@digitalfirstprint.com" className="text-pink-600 font-semibold text-sm hover:text-pink-700 transition-colors">
                  digitalfirst@digitalfirstprint.com
                </a>
                <div className="text-xs text-slate-500">Quick response guaranteed</div>
              </div>
            </motion.div>

            {/* Visit */}
            <motion.div 
              variants={fadeInUp}
              className="group bg-gradient-to-br from-white to-green-50 rounded-xl p-6 border-2 border-green-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:border-green-400"
            >
              <div className="bg-gradient-to-br from-green-500 to-teal-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Visit Us</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">Visit our main office and production facility</p>
              <div className="space-y-2">
                <div className="text-green-600 font-semibold text-sm">Industrial Area 2, Ajman, UAE</div>
                <div className="text-xs text-slate-500">Open 24/7</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mb-6 shadow-lg">
              <Send className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Send Us a Message</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </p>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-white to-purple-50 rounded-xl p-8 shadow-2xl border-2 border-purple-200"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                    placeholder="+971 50 123 4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                  Service Required
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="printing">Printing Services</option>
                  <option value="gifts">Custom Gifts</option>
                  <option value="packaging">Packaging & Printing</option>
                  <option value="signage">Signage</option>
                  <option value="design">Design Studio</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact */}
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
              <MessageCircle className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Quick Contact Information</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Get in touch with us through any of these channels.
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
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Phone</h3>
              <a href="tel:+971506116675" className="text-slate-600 hover:text-blue-600 transition-colors">+971 50 611 6675</a>
              <p className="text-sm text-slate-500">24/7 Support</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Email</h3>
              <a href="mailto:digitalfirst@digitalfirstprint.com" className="text-slate-600 hover:text-pink-600 transition-colors">digitalfirst@digitalfirstprint.com</a>
              <p className="text-sm text-slate-500">Quick Response</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <div className="bg-gradient-to-br from-green-500 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Location</h3>
              <p className="text-slate-600">Industrial Area 2, Ajman, UAE</p>
              <p className="text-sm text-slate-500">Open 24/7</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Hours</h3>
              <p className="text-slate-600">24/7 Service</p>
              <p className="text-sm text-slate-500">Always Available</p>
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
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-pink-100 mb-8 max-w-2xl mx-auto"
          >
            Contact us today and let&apos;s discuss your project requirements.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/locations" className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors shadow-lg">
              Find Location <ArrowRight className="ml-2 h-4 w-4 inline" />
            </Link>
            <Link href="/printing-services" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition-colors">
              Our Services <ArrowRight className="ml-2 h-4 w-4 inline" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 