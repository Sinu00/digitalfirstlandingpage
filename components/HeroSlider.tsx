"use client";
import { useState, useEffect, ReactNode } from "react";
import Image from "next/image";

const heroImages = [
  "/herosection/hero1.jpeg",
  "/herosection/hero2.jpeg",
  "/herosection/hero3.jpeg",
  "/herosection/hero4.jpeg",
  "/herosection/hero5.jpg"
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
      style={{}}
    >
      <div className="absolute inset-0 w-full h-full z-0 transition-all duration-1000">
        <Image
          src={heroImages[currentHero]}
          alt="Digital First Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {children}
      </div>
    </section>
  );
} 