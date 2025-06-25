import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
         <Image src="/digitalfirstlogoremovebg.png" alt="Digital First" className="h-10 w-auto" width={100} height={100} />
            <p className="text-slate-400 text-sm">
              Digital First Printing & Packaging, Industrial Area 2, Ajman, UAE
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-sm">Services</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link href="/printing-services" className="hover:text-white transition-colors">Printing Services</Link></li>
              <li><Link href="/custom-gifts" className="hover:text-white transition-colors">Custom Gifts</Link></li>
              <li><Link href="/packaging-printing" className="hover:text-white transition-colors">Packaging & Printing</Link></li>
              <li><Link href="/signage" className="hover:text-white transition-colors">Signage</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-sm">Location</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link href="/locations/ajman" className="hover:text-white transition-colors">Ajman</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-sm">Contact</h3>
            <div className="space-y-2 text-slate-400 text-sm">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:0506116675" className="hover:text-white transition-colors">0506116675</a>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:digitalfirst@digitalfirstprint.com" className="hover:text-white transition-colors">digitalfirst@digitalfirstprint.com</a>
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