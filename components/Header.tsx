"use client";
import Link from "next/link";
import { Phone } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Helper to check if a link is active
  const isActive = (href: string) => {
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
            <Image src="/digitalfirstlogoremovebg.png" alt="Digital First" className="h-13 w-auto" width={100} height={100} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-6 list-none m-0 p-0">
              <li className="relative group/nav">
                <Link href="/" className={`flex items-center ${isActive("/") ? "text-blue-700" : "text-slate-600 hover:text-blue-700"} font-medium transition-colors text-sm`}>
                  Home
                  <svg className="ml-1 h-4 w-4 text-slate-500 group-hover/nav:text-blue-700 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </Link>
                <button
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10 md:hidden"
                  aria-haspopup="true"
                  aria-expanded="false"
                  tabIndex={-1}
                ></button>
                <ul className="absolute left-0 mt-2 w-56 bg-white border border-slate-200 rounded-lg shadow-lg opacity-0 group-hover/nav:opacity-100 group-focus-within/nav:opacity-100 hover:opacity-100 focus-within:opacity-100 pointer-events-none group-hover/nav:pointer-events-auto group-focus-within/nav:pointer-events-auto hover:pointer-events-auto focus-within:pointer-events-auto transition-opacity duration-200 z-20 md:block hidden"
                  onMouseEnter={e => { e.currentTarget.classList.add('opacity-100', 'pointer-events-auto'); }}
                  onMouseLeave={e => { e.currentTarget.classList.remove('opacity-100', 'pointer-events-auto'); }}
                >
                  <li>
                    <a href="/why-digital-first" className="block px-4 py-2 hover:bg-slate-100">Why Digital First</a>
                  </li>
                  <li>
                    <a href="/digital-first-expertise" className="block px-4 py-2 hover:bg-slate-100">Digital First Expertise</a>
                  </li>
                </ul>
                {/* Mobile dropdown */}
                <details className="md:hidden">
                  <summary className="list-none px-4 py-2 cursor-pointer">More</summary>
                  <ul className="bg-white border border-slate-200 rounded-lg shadow-lg mt-2">
                    <li>
                      <a href="/why-digital-first" className="block px-4 py-2 hover:bg-slate-100">Why Digital First</a>
                    </li>
                    <li>
                      <a href="/digital-first-expertise" className="block px-4 py-2 hover:bg-slate-100">Digital First Expertise</a>
                    </li>
                  </ul>
                </details>
              </li>
              <Link href="/about" className={`${isActive("/about") ? "text-blue-700" : "text-slate-600 hover:text-blue-700"} font-medium transition-colors text-sm`}>About</Link>
              <Link href="/printing-services" className={`${isActive("/printing-services") ? "text-blue-700" : "text-slate-600 hover:text-blue-700"} font-medium transition-colors text-sm`}>Printing Services</Link>
              {/* <Link href="/packaging-printing" className={`${isActive("/packaging-printing") ? "text-blue-700" : "text-slate-600 hover:text-blue-700"} font-medium transition-colors text-sm`}>Packaging & Printing</Link> */}
              <Link href="/locations" className={`${isActive("/locations") ? "text-blue-700" : "text-slate-600 hover:text-blue-700"} font-medium transition-colors text-sm`}>Locations</Link>
              <Link href="/contact" className={`${isActive("/contact") ? "text-blue-700" : "text-slate-600 hover:text-blue-700"} font-medium transition-colors text-sm`}>Contact</Link>
            </ul>
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
              <a href="tel:+971506116675" className="text-sm font-medium hover:underline">+971 50 611 6675</a>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-sm">
          <nav className="flex flex-col space-y-2 px-4 py-4">
            <div>
              <Link href="/" className="px-4 py-2 hover:text-blue-700 transition-colors flex items-center font-medium text-base">
                Home
              </Link>
              <div className="flex flex-col pl-6 space-y-1 mt-1">
                <Link href="/why-digital-first" className="text-slate-600 hover:text-blue-700 text-base py-1">Why Digital First</Link>
                <Link href="/digital-first-expertise" className="text-slate-600 hover:text-blue-700 text-base py-1">Digital First Expertise</Link>
              </div>
            </div>
            <Link href="/about" className={`${isActive("/about") ? "text-blue-700" : "text-slate-600 hover:text-blue-700"} font-medium transition-colors text-sm`}>About</Link>
            <Link href="/printing-services" className={`${isActive("/printing-services") ? "text-blue-700" : "text-slate-600 hover:text-blue-700"} font-medium transition-colors text-base py-2`} onClick={() => setMenuOpen(false)}>Printing Services</Link>
            {/* <Link href="/custom-gifts" className={`${isActive("/custom-gifts") ? "text-blue-700" : "text-slate-600 hover:text-blue-700"} font-medium transition-colors text-base py-2`} onClick={() => setMenuOpen(false)}>Custom Gifts</Link>
            <Link href="/packaging-printing" className={`${isActive("/packaging-printing") ? "text-blue-700" : "text-slate-600 hover:text-blue-700"} font-medium transition-colors text-base py-2`} onClick={() => setMenuOpen(false)}>Packaging & Printing</Link> */}
            <Link href="/locations" className={`${isActive("/locations") ? "text-blue-700" : "text-slate-600 hover:text-blue-700"} font-medium transition-colors text-base py-2`} onClick={() => setMenuOpen(false)}>Locations</Link>
            <Link href="/contact" className={`${isActive("/contact") ? "text-blue-700" : "text-slate-600 hover:text-blue-700"} font-medium transition-colors text-sm`}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
} 