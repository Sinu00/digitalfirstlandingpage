"use client";
import Link from "next/link";
import { Phone } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from 'next/image'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Helper to check if a link is active
  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    // For main sections, highlight if path starts with the section (for subpages)
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
<img src="/digitalfirstlogo.jpg" alt="" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className={`${isActive("/") ? "text-blue-700" : "text-slate-600 hover:text-blue-700"} font-medium transition-colors text-sm`}>Home</Link>
            <Link href="/printing-services" className={`${isActive("/printing-services") ? "text-blue-700" : "text-slate-600 hover:text-blue-700"} font-medium transition-colors text-sm`}>Printing Services</Link>
            <Link href="/custom-gifts" className={`${isActive("/custom-gifts") ? "text-blue-700" : "text-slate-600 hover:text-blue-700"} font-medium transition-colors text-sm`}>Custom Gifts</Link>
            <Link href="/photo-studio" className={`${isActive("/photo-studio") ? "text-blue-700" : "text-slate-600 hover:text-blue-700"} font-medium transition-colors text-sm`}>Photo Studio</Link>
            <Link href="/signage" className={`${isActive("/signage") ? "text-blue-700" : "text-slate-600 hover:text-blue-700"} font-medium transition-colors text-sm`}>Signage</Link>
            <Link href="/locations" className={`${isActive("/locations") ? "text-blue-700" : "text-slate-600 hover:text-blue-700"} font-medium transition-colors text-sm`}>Locations</Link>
          </nav>

          {/* Hamburger Icon for Mobile */}
          <button
            className="md:hidden flex items-center px-2 py-1 text-blue-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center text-blue-700">
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">+97 00 00 000</span>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-sm">
          <nav className="flex flex-col space-y-2 px-4 py-4">
            <Link href="/" className={`${isActive("/") ? "text-blue-700" : "text-slate-600 hover:text-blue-700"} font-medium transition-colors text-base py-2`} onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/printing-services" className={`${isActive("/printing-services") ? "text-blue-700" : "text-slate-600 hover:text-blue-700"} font-medium transition-colors text-base py-2`} onClick={() => setMenuOpen(false)}>Printing Services</Link>
            <Link href="/custom-gifts" className={`${isActive("/custom-gifts") ? "text-blue-700" : "text-slate-600 hover:text-blue-700"} font-medium transition-colors text-base py-2`} onClick={() => setMenuOpen(false)}>Custom Gifts</Link>
            <Link href="/photo-studio" className={`${isActive("/photo-studio") ? "text-blue-700" : "text-slate-600 hover:text-blue-700"} font-medium transition-colors text-base py-2`} onClick={() => setMenuOpen(false)}>Photo Studio</Link>
            <Link href="/signage" className={`${isActive("/signage") ? "text-blue-700" : "text-slate-600 hover:text-blue-700"} font-medium transition-colors text-base py-2`} onClick={() => setMenuOpen(false)}>Signage</Link>
            <Link href="/locations" className={`${isActive("/locations") ? "text-blue-700" : "text-slate-600 hover:text-blue-700"} font-medium transition-colors text-base py-2`} onClick={() => setMenuOpen(false)}>Locations</Link>
          </nav>
        </div>
      )}
    </header>
  );
} 