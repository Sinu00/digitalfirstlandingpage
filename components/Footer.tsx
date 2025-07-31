import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin, ArrowRight, Heart, Star, Award, Shield } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image 
                src="/digitalfirstlogoremovebg.png" 
                alt="Digital First" 
                className="h-12 w-auto" 
                width={120} 
                height={48} 
              />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Digital First Printing & Packaging - Your trusted partner for premium printing solutions, 
              custom gifts, and innovative packaging across the UAE.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gradient-to-br from-pink-500 to-purple-600 p-2 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gradient-to-br from-purple-500 to-indigo-600 p-2 rounded-lg hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 shadow-lg">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gradient-to-br from-blue-500 to-cyan-600 p-2 rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 shadow-lg">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gradient-to-br from-indigo-500 to-blue-600 p-2 rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-300 shadow-lg">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                <Star className="h-4 w-4 text-white" />
              </div>
              Our Services
            </h3>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li>
                <Link href="/printing-services" className="hover:text-pink-400 transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Printing Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                <Award className="h-4 w-4 text-white" />
              </div>
              Quick Links
            </h3>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li>
                <Link href="/about" className="hover:text-green-400 transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/why-digital-first" className="hover:text-green-400 transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Why Digital First
                </Link>
              </li>
              <li>
                <Link href="/digital-first-expertise" className="hover:text-green-400 transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Our Expertise
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-green-400 transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-400 transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                <Shield className="h-4 w-4 text-white" />
              </div>
              Contact Info
            </h3>
            <div className="space-y-4 text-slate-300 text-sm">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Digital First Printing & Packaging</p>
                  <p>Industrial Area 2, Ajman, UAE</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-green-400 flex-shrink-0" />
                <a href="tel:0506116675" className="hover:text-green-400 transition-colors font-medium">
                  0506116675
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-pink-400 flex-shrink-0" />
                <a href="mailto:digitalfirst@digitalfirstprint.com" className="hover:text-pink-400 transition-colors font-medium">
                  digitalfirst@digitalfirstprint.com
                </a>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-orange-400 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Open 24/7</p>
                  <p>For your convenience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              <p>&copy; 2025 Digital First Printing & Packaging. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-6 text-slate-400 text-sm">
              <Link href="/privacy-policy" className="hover:text-pink-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-pink-400 transition-colors">
                Terms of Service
              </Link>
              <div className="flex items-center">
                <span>Made with</span>
                <Heart className="h-4 w-4 mx-1 text-pink-500" />
                <span>in UAE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 