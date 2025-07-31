"use client";

import Link from "next/link"
import { Clock, Shield, Award, FileText, Palette, Zap, Heart, Printer } from "lucide-react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Image from 'next/image'
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

const fadeInScale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
}

export default function PrintingServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <Header />
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-16 lg:py-24 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 text-white"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 shadow-lg">
            <Printer className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">Printing Services</h1>
          <p className="text-lg text-pink-100 max-w-3xl mx-auto leading-relaxed">
            Professional digital and offset printing solutions for all your business and personal needs. 
            Quality guaranteed with fast turnaround times.
          </p>
        </motion.div>
      </motion.section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-white via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full mb-6 shadow-lg">
              <Palette className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">
              Our Printing Products & Services
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A complete range of print, design, and finishing solutions for every business and personal need.
            </p>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { name: 'Business Cards', img: '/printing-services/Business-Cards.jpg', slug: 'business-cards', color: 'blue' },
              { name: 'Corporate Identity', img: '/printing-services/Corporate-Identity.jpg', slug: 'corporate-identity', color: 'purple' },
              { name: 'Flyers & Brochures', img: '/printing-services/Flyers-Brochures.jpg', slug: 'flyers-brochures', color: 'pink' },
              { name: 'Binding Services', img: '/printing-services/Binding-Services.jpg', slug: 'binding-services', color: 'orange' },
              { name: 'Digital Foiling', img: '/printing-services/foiling.jpg', slug: 'foiling', color: 'green' },
              { name: 'Digital Spot UV', img: '/printing-services/Spot-UV.jpg', slug: 'spot-uv', color: 'indigo' },
              { name: 'Digital Embossing', img: '/printing-services/Thermal-Embossing.jpg', slug: 'thermal-embossing', color: 'red' },
              { name: 'Large Format Printing', img: '/printing-services/Large-Format-Printing.jpg', slug: 'large-format-printing', color: 'teal' },
              { name: 'Customised Calendar', img: '/printing-services/Customised-Calendar.jpg', slug: 'customised-calendar', color: 'yellow' },
              { name: 'Menu Cards', img: '/printing-services/Menu-Cards.jpg', slug: 'menu-cards', color: 'emerald' },
              { name: 'Wedding Cards', img: '/printing-services/Wedding-Cards.jpg', slug: 'wedding-cards', color: 'rose' },
              { name: 'Personalized Greeting', img: '/printing-services/Personalized-Greeting.jpg', slug: 'personalized-greeting', color: 'cyan' },
              { name: 'Foam Board Mounting', img: '/printing-services/Foam-Board-Mounting.jpg', slug: 'foam-board-mounting', color: 'amber' },
              { name: 'Tent Cards', img: '/printing-services/Tent-Cards.jpg', slug: 'tent-cards', color: 'violet' },
              { name: 'Book Marks', img: '/printing-services/Book-Marks.jpg', slug: 'book-marks', color: 'lime' },
              { name: 'Hang Tags', img: '/printing-services/Hang-Tags.jpg', slug: 'hang-tags', color: 'sky' },
              { name: 'Roll-Up Stand', img: '/printing-services/Roll-Up-Stand.jpg', slug: 'roll-up-stand', color: 'fuchsia' },
              { name: 'PVC ID Card Printing', img: '/printing-services/PVC-ID-Card-Printing.jpg', slug: 'pvc-id-card-printing', color: 'slate' },
              { name: 'Canvas & Streching', img: '/printing-services/Canvas-Streching.jpg', slug: 'canvas-streching', color: 'stone' },
              { name: 'Papper Bags', img: '/printing-services/Papper-Bags.jpg', slug: 'papper-bags', color: 'zinc' },
              { name: 'Boxes & Cartons', img: '/printing-services/Flex-Printing.jpg', slug: 'boxes-cartons', color: 'neutral' },
              { name: 'Labels & Stickers', img: '/printing-services/foiling.jpg', slug: 'labels-stickers', color: 'gray' },
                         ].map((service) => {
               const colorClasses: Record<string, string> = {
                 blue: 'from-blue-50 to-blue-100 border-blue-200 hover:border-blue-400',
                 purple: 'from-purple-50 to-purple-100 border-purple-200 hover:border-purple-400',
                 pink: 'from-pink-50 to-pink-100 border-pink-200 hover:border-pink-400',
                 orange: 'from-orange-50 to-orange-100 border-orange-200 hover:border-orange-400',
                 green: 'from-green-50 to-green-100 border-green-200 hover:border-green-400',
                 indigo: 'from-indigo-50 to-indigo-100 border-indigo-200 hover:border-indigo-400',
                 red: 'from-red-50 to-red-100 border-red-200 hover:border-red-400',
                 teal: 'from-teal-50 to-teal-100 border-teal-200 hover:border-teal-400',
                 yellow: 'from-yellow-50 to-yellow-100 border-yellow-200 hover:border-yellow-400',
                 emerald: 'from-emerald-50 to-emerald-100 border-emerald-200 hover:border-emerald-400',
                 rose: 'from-rose-50 to-rose-100 border-rose-200 hover:border-rose-400',
                 cyan: 'from-cyan-50 to-cyan-100 border-cyan-200 hover:border-cyan-400',
                 amber: 'from-amber-50 to-amber-100 border-amber-200 hover:border-amber-400',
                 violet: 'from-violet-50 to-violet-100 border-violet-200 hover:border-violet-400',
                 lime: 'from-lime-50 to-lime-100 border-lime-200 hover:border-lime-400',
                 sky: 'from-sky-50 to-sky-100 border-sky-200 hover:border-sky-400',
                 fuchsia: 'from-fuchsia-50 to-fuchsia-100 border-fuchsia-200 hover:border-fuchsia-400',
                 slate: 'from-slate-50 to-slate-100 border-slate-200 hover:border-slate-400',
                 stone: 'from-stone-50 to-stone-100 border-stone-200 hover:border-stone-400',
                 zinc: 'from-zinc-50 to-zinc-100 border-zinc-200 hover:border-zinc-400',
                 neutral: 'from-neutral-50 to-neutral-100 border-neutral-200 hover:border-neutral-400',
                 gray: 'from-gray-50 to-gray-100 border-gray-200 hover:border-gray-400',
               };
               
               return (
                 <motion.div key={service.name} variants={fadeInScale}>
                   <Link href={`/printing-services/${service.slug}`} className="w-full">
                     <div className={`bg-gradient-to-br ${colorClasses[service.color]} rounded-xl p-6 border-2 hover:shadow-2xl transition-all duration-300 flex flex-col items-center cursor-pointer transform hover:-translate-y-2`}>
                      <Image
                        src={service.img}
                        alt={service.name}
                        width={400}
                        height={224}
                        className="w-full h-40 md:h-48 lg:h-56 object-cover rounded-lg mb-4 border border-slate-100 bg-slate-100 shadow-lg"
                      />
                      <h3 className="text-lg font-serif font-bold text-slate-900 mb-2 text-center">{service.name}</h3>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mb-6 shadow-lg">
              <Zap className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Why Choose Our Printing Services?</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with decades of experience to deliver exceptional results every time.
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
              <p className="text-slate-600 text-sm">Same day to 48-hour delivery options available</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <div className="bg-gradient-to-br from-green-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Premium Quality</h3>
              <p className="text-slate-600 text-sm">Highest quality materials and printing standards</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Secure Printing</h3>
              <p className="text-slate-600 text-sm">Confidential document handling and secure printing</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Latest Technology</h3>
              <p className="text-slate-600 text-sm">State-of-the-art printing equipment and technology</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 lg:py-24 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 shadow-lg">
            <Heart className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-pink-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s bring your vision to life with our professional printing services.
          </p>
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
        </motion.div>
      </motion.section>

      <Footer />
    </div>
  )
} 