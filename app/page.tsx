"use client";

import Link from "next/link"
import { ArrowRight, MapPin, Clock, Award, Shield, Users, Phone, Mail, Palette, Heart } from "lucide-react"
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <Header />
      {/* Hero Section */}
      <HeroSlider>
        <div className="flex justify-center items-center min-h-[60vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto px-4"
          >
            <h1 className="text-3xl lg:text-5xl font-serif font-bold mb-6 leading-tight text-white">
              Digital First Printing & Packaging
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg lg:text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto"
            >
              With over 3 years of excellence, we deliver premium printing services, custom gifts, 
              innovative packaging & commercial printing solutions across the UAE.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link href="/printing-services" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl text-base">
                Explore Services
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition-colors text-base">
                Get Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </HeroSlider>

      {/* Services Section */}
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
              <Palette className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From digital printing to custom gifts, we offer comprehensive solutions for all your business and personal needs.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Left Column - Service Card */}
            <motion.div variants={fadeInUp}>
              <Link href="/printing-services" className="group block">
                <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 border-2 border-blue-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group-hover:border-blue-400 hover:from-blue-50 hover:to-blue-100 relative overflow-hidden h-full">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-500 rounded-full translate-y-12 -translate-x-12"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                      <div className="text-white text-2xl font-bold">P</div>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Printing Services</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Comprehensive digital and offset printing solutions for all your business needs. From business cards and flyers to large format banners and corporate materials.
                    </p>
                    
                    {/* Service Features */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-slate-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-sm font-medium">Business Cards & Stationery</span>
                      </div>
                      <div className="flex items-center text-slate-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-sm font-medium">Large Format Printing</span>
                      </div>
                      <div className="flex items-center text-slate-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-sm font-medium">Flyers & Brochures</span>
                      </div>
                      <div className="flex items-center text-slate-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-sm font-medium">Corporate Identity</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                      Explore Our Printing Services <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Right Column - Additional Info */}
            <motion.div variants={fadeInUp} className="flex flex-col justify-center">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200 shadow-xl">
                <h4 className="text-xl font-serif font-bold text-slate-900 mb-4">Why Choose Our Printing Services?</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 shadow-lg">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-900 mb-1">Premium Quality</h5>
                      <p className="text-sm text-slate-600">State-of-the-art equipment ensuring the highest print quality</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-green-500 to-teal-600 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 shadow-lg">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-900 mb-1">Fast Turnaround</h5>
                      <p className="text-sm text-slate-600">Quick delivery times to meet your urgent printing needs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-orange-500 to-red-600 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 shadow-lg">
                      <Shield className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-900 mb-1">Reliable Service</h5>
                      <p className="text-sm text-slate-600">Trusted by thousands of satisfied customers across UAE</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Ready to get started?</p>
                      <p className="text-xs opacity-90">Contact us for a free quote</p>
                    </div>
                    <Link href="/contact" className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors">
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100">
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
                <Link href="/about" className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 shadow-2xl border-2 border-purple-200"
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
                  <div className="bg-gradient-to-br from-pink-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Quality Guaranteed</h3>
                  <p className="text-slate-600 text-sm">Every project meets our high standards</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="text-center">
                  <div className="bg-gradient-to-br from-green-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Secure & Reliable</h3>
                  <p className="text-slate-600 text-sm">Your data and projects are safe with us</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

              {/* Print Mockups & Services Showcase Section */}
              <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Print Mockups */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6 relative">
                {/* Letterhead Mockup */}
                <motion.div 
                  initial={{ opacity: 0, rotate: -5, y: 20 }}
                  whileInView={{ opacity: 1, rotate: -5, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="bg-white rounded-lg p-4 shadow-2xl transform rotate-[-5deg] hover:rotate-0 transition-transform duration-300"
                >
                  <div className="h-32 bg-gradient-to-r from-lime-400 to-lime-500 rounded-t-lg mb-3"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                  </div>
                  <div className="mt-4 flex justify-between items-end">
                    <div className="text-xs text-gray-500">
                      <div>John Dee</div>
                      <div>Digital First Printing</div>
                      <div>+971 50 611 6675</div>
                    </div>
                    <div className="w-8 h-8 bg-lime-500 rounded flex items-center justify-center">
                      <div className="text-white text-xs font-bold">DF</div>
                    </div>
                  </div>
                </motion.div>

                {/* Business Card Mockup */}
                <motion.div 
                  initial={{ opacity: 0, rotate: 5, y: -20 }}
                  whileInView={{ opacity: 1, rotate: 5, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="bg-white rounded-lg p-3 shadow-2xl transform rotate-[5deg] hover:rotate-0 transition-transform duration-300"
                >
                  <div className="flex">
                    <div className="w-1/3 bg-lime-500 rounded-l-lg flex items-center justify-center">
                      <div className="text-white text-xs font-bold">DF</div>
                    </div>
                    <div className="w-2/3 p-2">
                      <div className="text-xs font-bold text-gray-800">Digital First</div>
                      <div className="text-xs text-gray-600">Printing & Packaging</div>
                      <div className="text-xs text-gray-500 mt-1">+971 50 611 6675</div>
                    </div>
                  </div>
                </motion.div>

                {/* Folder/Cover Mockup */}
                <motion.div 
                  initial={{ opacity: 0, rotate: 3, y: -10 }}
                  whileInView={{ opacity: 1, rotate: 3, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="bg-lime-500 rounded-lg p-4 shadow-2xl transform rotate-[3deg] hover:rotate-0 transition-transform duration-300 col-span-2"
                >
                  <div className="bg-white rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <div className="text-lime-600 text-lg font-bold">DF</div>
                  </div>
                  <div className="text-center text-white">
                    <div className="text-sm font-bold mb-1">SIMPLE IDENTITY</div>
                    <div className="text-xs">BRANDING</div>
                    <div className="text-xs mt-2">Vol. 12</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Services Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lime-400 text-lg font-semibold mb-4"
              >
                Just Give Us A Call
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-3xl lg:text-4xl font-serif font-bold mb-6 leading-tight"
              >
                DISCOVER OUR COMPREHENSIVE RANGE OF SERVICES
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-lg text-purple-100 mb-8 leading-relaxed"
              >
                Don’t leave your business in the hands of amateur design. No matter if you want to showcase a product or market a service, we’ll craft professional layouts that connect with your audience and deliver your message effectively.
              </motion.p>
              
                             <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.8, duration: 0.6 }}
                 className="grid md:grid-cols-2 gap-6"
               >
                 <div className="space-y-4">
                   <div className="flex items-center">
                     <div className="w-6 h-6 bg-lime-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
                       <div className="text-purple-900 text-xs font-bold">✓</div>
                     </div>
                     <span className="text-white font-medium">Business Cards</span>
                   </div>
                   <div className="flex items-center">
                     <div className="w-6 h-6 bg-lime-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
                       <div className="text-purple-900 text-xs font-bold">✓</div>
                     </div>
                     <span className="text-white font-medium">Large Format Printing</span>
                   </div>
                   <div className="flex items-center">
                     <div className="w-6 h-6 bg-lime-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
                       <div className="text-purple-900 text-xs font-bold">✓</div>
                     </div>
                     <span className="text-white font-medium">Flyers & Brochures</span>
                   </div>
                 </div>
                 
                 <div className="space-y-4">
                   <div className="flex items-center">
                     <div className="w-6 h-6 bg-lime-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
                       <div className="text-purple-900 text-xs font-bold">✓</div>
                     </div>
                     <span className="text-white font-medium">Corporate Identity</span>
                   </div>
                   <div className="flex items-center">
                     <div className="w-6 h-6 bg-lime-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
                       <div className="text-purple-900 text-xs font-bold">✓</div>
                     </div>
                     <span className="text-white font-medium">Book Marks</span>
                   </div>
                   <div className="flex items-center">
                     <div className="w-6 h-6 bg-lime-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
                       <div className="text-purple-900 text-xs font-bold">✓</div>
                     </div>
                     <span className="text-white font-medium">Wedding Cards</span>
                   </div>
                 </div>
               </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="mt-8"
              >
                <Link href="/contact" className="inline-flex items-center bg-lime-500 text-purple-900 px-8 py-4 rounded-lg font-bold hover:bg-lime-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
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
              <MapPin className="h-10 w-10 text-white" />
            </div>
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
              className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-2xl border-2 border-blue-200 hover:shadow-3xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
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
                  <span>+971 50 611 6675</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <Mail className="h-5 w-5 mr-3 text-blue-600" />
                  <span>digitalfirst@digitalfirstprint.com</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg">
                  Get Directions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center border-2 border-blue-500 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Contact Us
                </Link>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="bg-gradient-to-br from-white to-purple-50 rounded-xl p-6 border-2 border-purple-200 shadow-lg">
                <h4 className="text-lg font-serif font-bold text-slate-900 mb-4">Why Visit Our Location?</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-1 rounded-full mt-1 shadow-md">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                    <span className="ml-3 text-slate-600">State-of-the-art printing facility with latest technology</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gradient-to-br from-orange-500 to-red-500 p-1 rounded-full mt-1 shadow-md">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                    <span className="ml-3 text-slate-600">24/7 operation for urgent printing needs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gradient-to-br from-green-500 to-teal-500 p-1 rounded-full mt-1 shadow-md">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                    <span className="ml-3 text-slate-600">Expert staff available for consultations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-1 rounded-full mt-1 shadow-md">
                      <Shield className="h-4 w-4 text-white" />
                    </div>
                    <span className="ml-3 text-slate-600">Secure facility for confidential printing projects</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 rounded-xl p-6 text-white shadow-2xl">
                <h4 className="text-lg font-serif font-bold mb-2">Free Consultation</h4>
                <p className="text-pink-100 mb-4">Visit us for a free consultation on your printing and packaging needs</p>
                <Link href="/contact" className="inline-flex items-center bg-white text-purple-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-pink-50 transition-colors shadow-lg">
                  Book Consultation
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 shadow-lg">
            <Heart className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-pink-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s bring your vision to life with our professional printing and design services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors shadow-lg">
              Get Started
            </Link>
            <Link href="/locations" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition-colors">
              Find Location
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
} 