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

             {/* Location Map */}
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
               Find Us on the Map
             </motion.h2>
             <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.6, duration: 0.8 }}
               className="text-lg text-slate-600 max-w-3xl mx-auto"
             >
               Located in Industrial Area 2, Ajman, UAE. Easy to find and accessible 24/7.
             </motion.p>
           </motion.div>
           
           <motion.div 
             initial={{ opacity: 0, scale: 0.95, y: 50 }}
             whileInView={{ opacity: 1, scale: 1, y: 0 }}
             viewport={{ once: true, amount: 0.3 }}
             transition={{ duration: 1, ease: "easeOut" }}
             className="flex justify-center"
           >
             <div className="w-full max-w-4xl">
               <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 border-2 border-blue-200 shadow-2xl hover:shadow-3xl transition-all duration-500">
                 <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg border border-blue-100">
                   <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.1234567890123!2d55.45678901234567!3d25.45678901234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI3JzI0LjQiTiA1NcKwMjcnMjQuNCJF!5e0!3m2!1sen!2sae!4v1234567890123"
                     width="100%"
                     height="100%"
                     style={{ border: 0 }}
                     allowFullScreen
                     loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade"
                     title="Digital First Printing & Packaging Location"
                     className="w-full h-full"
                   ></iframe>
                 </div>
                 
                 <div className="mt-8 grid md:grid-cols-2 gap-8">
                   <motion.div 
                     initial={{ opacity: 0, x: -50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.3, duration: 0.8 }}
                     className="space-y-4"
                   >
                     <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">📍 Location Details</h3>
                     <div className="space-y-3">
                       <div className="flex items-center text-slate-700">
                         <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-2 rounded-lg mr-3 shadow-md">
                           <MapPin className="h-5 w-5 text-white" />
                         </div>
                         <span className="font-medium">Industrial Area 2, Ajman, UAE</span>
                       </div>
                       <div className="flex items-center text-slate-700">
                         <div className="bg-gradient-to-br from-green-500 to-teal-500 p-2 rounded-lg mr-3 shadow-md">
                           <Clock className="h-5 w-5 text-white" />
                         </div>
                         <span className="font-medium">Open 24/7</span>
                       </div>
                       <div className="flex items-center text-slate-700">
                         <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-2 rounded-lg mr-3 shadow-md">
                           <Phone className="h-5 w-5 text-white" />
                         </div>
                         <span className="font-medium">0506116675</span>
                       </div>
                     </div>
                   </motion.div>
                   
                   <motion.div 
                     initial={{ opacity: 0, x: 50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.5, duration: 0.8 }}
                     className="space-y-4"
                   >
                     <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">🚗 Getting Here</h3>
                     <div className="space-y-3">
                       <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 rounded-lg border border-orange-200">
                         <h4 className="font-semibold text-slate-900 mb-2">By Car</h4>
                         <p className="text-slate-600 text-sm">Located in Industrial Area 2, easily accessible from Sheikh Mohammed Bin Zayed Road</p>
                       </div>
                       <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                         <h4 className="font-semibold text-slate-900 mb-2">Parking</h4>
                         <p className="text-slate-600 text-sm">Free parking available on-site for customers</p>
                       </div>
                     </div>
                   </motion.div>
                 </div>
                 
                 <motion.div 
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.7, duration: 0.8 }}
                   className="mt-8 text-center"
                 >
                   <a 
                     href="https://maps.google.com/?q=Industrial+Area+2+Ajman+UAE"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                   >
                     <MapPin className="h-5 w-5 mr-2" />
                     Open in Google Maps
                   </a>
                 </motion.div>
               </div>
             </div>
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