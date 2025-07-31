"use client";
import { useState, useEffect, ReactNode } from "react";
import Image from "next/image";

const heroImages = [
  "/herosection/IMG_8615.JPG",
  "/herosection/IMG_8616.JPG",
  "/herosection/IMG_8617.JPG",
];

export default function HeroSlider({ children }: { children: ReactNode }) {
  const [currentHero, setCurrentHero] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="min-h-[calc(100vh-4rem)] flex items-center relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black/60 z-10" /> {/* Increased opacity from 40% to 60% */}
        <Image
          src={heroImages[currentHero]}
          alt="Digital First Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {children}
      </div>
    </section>
  );
} 