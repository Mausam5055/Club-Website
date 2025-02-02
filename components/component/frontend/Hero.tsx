'use client';
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Hero() {
  const images = [
    {
      src: "/images/hero-image.jpg",
      position: "object-center"
    },
    {
      src: "/images/hero-image-2.jpg",
      position: "object-left"
    },
    {
      src: "/images/hero-image-3.jpg",
      position: "object-center"
    }
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);  // Added images.length to dependencies

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) { // minimum swipe distance
      if (diff > 0) {
        // Swipe left
        setCurrentImage((prev) => (prev + 1) % images.length);
      } else {
        // Swipe right
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
      }
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-b from-slate-50 via-gray-50 to-white dark:from-gray-900 dark:to-gray-800/50 border-b border-gray-200 dark:border-gray-700 overflow-hidden py-8 md:py-4">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
      
      {/* Decorative Blobs */}
      <div className="absolute -left-32 -top-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -right-32 -bottom-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          {/* Content Column */}
          <div className="md:col-span-7 flex flex-col justify-center space-y-8 md:space-y-10 pt-4 md:pt-0">
            {/* Enhanced Animated Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 backdrop-blur-sm rounded-full px-6 py-3 w-fit shadow-[0_0_15px_rgba(251,191,36,0.1)] hover:shadow-[0_0_20px_rgba(251,191,36,0.2)] dark:shadow-[0_0_15px_rgba(251,191,36,0.1)] dark:hover:shadow-[0_0_20px_rgba(251,191,36,0.2)] transition-all border border-amber-200/50 dark:border-amber-500/30 animate-glow">
              <div className="w-2 h-2 rounded-full bg-amber-400 dark:bg-amber-400 animate-ping" />
              <span className="text-amber-700 dark:text-amber-300 text-sm font-medium">
                New Event Coming Soon 🎉🎉..
              </span>
            </div>

            {/* Enhanced Content */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
                  MATLAB & Overleaf
                </span>
                <span className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Club
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
                Learn, collaborate, and master technical tools with fellow students. Join our community of innovators!
              </p>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 gap-6 max-w-lg">
              <div className="group p-6 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                  50+
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-2">
                  Active Members
                </div>
              </div>
              <div className="group p-6 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                  10+
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-2">
                  Workshops
                </div>
              </div>
            </div>

            {/* Enhanced Buttons */}
            <div className="flex flex-wrap gap-6">
              <a
                href="https://forms.gle/KxZrPb5P1ySvwFQs7"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Now
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                </svg>
              </a>
              <a
                href="https://in.mathworks.com/"
                className="group px-8 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 font-medium rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Enhanced Image Column */}
          <div className="md:col-span-5 order-first md:order-last mb-6 md:mb-0">
            <div 
              className="relative aspect-[4/3] md:aspect-square group mx-auto max-w-md md:max-w-none mt-4 md:mt-0"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Background decoration - hide on mobile */}
              <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl transform rotate-6 transition-transform group-hover:rotate-3" />
              
              {/* Images */}
              {images.map((image, index) => (
                <div
                  key={image.src}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    currentImage === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={`Club activity ${index + 1}`}
                    fill
                    priority={index === 0}
                    className={`rounded-2xl md:rounded-3xl object-cover shadow-xl transition-all duration-500 group-hover:scale-[1.02] md:-rotate-3 md:group-hover:-rotate-2 ${image.position}`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
              
              {/* Enhanced Navigation Dots */}
              <div className="absolute -bottom-8 md:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      currentImage === index 
                        ? "bg-blue-600 w-6" 
                        : "bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
