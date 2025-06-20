import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white px-3 py-2 font-serif font-bold text-xl rounded-md shadow-sm mb-4 inline-block">
              DIGITAL FIRST
            </div>
            <p className="text-slate-400 text-sm">
              Your complete digital printing and design solution with over 3 years of excellence.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-sm">Services</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link href="/printing-services" className="hover:text-white transition-colors">Printing Services</Link></li>
              <li><Link href="/custom-gifts" className="hover:text-white transition-colors">Custom Gifts</Link></li>
              <li><Link href="/photo-studio" className="hover:text-white transition-colors">Photo Studio</Link></li>
              <li><Link href="/signage" className="hover:text-white transition-colors">Signage</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-sm">Locations</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link href="/locations/dubai" className="hover:text-white transition-colors">Dubai</Link></li>
              <li><Link href="/locations/abu-dhabi" className="hover:text-white transition-colors">Abu Dhabi</Link></li>
              <li><Link href="/locations/sharjah" className="hover:text-white transition-colors">Sharjah</Link></li>
              <li><Link href="/locations/canada" className="hover:text-white transition-colors">Canada</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-sm">Contact</h3>
            <div className="space-y-2 text-slate-400 text-sm">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +97 00 00 000
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                info@digitalfirst.com
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; 2025 Digital First. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 