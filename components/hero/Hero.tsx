
'use client';
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from '@studio-freight/lenis';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const images = [
    {
      src: "/images/hero-image.jpg",
      position: "object-center"
    },
    {
      src: "/images/hero-image-2.jpg", 
      position: "object-center"
    },
    {
      src: "/images/hero-image-31.jpg",
      position: "object-center"
    }
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Refs for GSAP animations
  const heroRef = useRef<HTMLDivElement>(null);
  const mainTitleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Track scroll for effects
    lenis.on('scroll', (args: { scroll: number }) => {
      if (args.scroll > 50 && !hasScrolled) {
        setHasScrolled(true);
      }
    });

    // GSAP Timeline for entrance animations
    const tl = gsap.timeline({ delay: 0.5 });

    // Set initial states
    gsap.set([badgeRef.current, mainTitleRef.current, subtitleRef.current, statsRef.current, ctaRef.current], {
      opacity: 0,
      y: 80,
      clipPath: 'inset(100% 0 0 0)'
    });

    gsap.set(imageRef.current, {
      scale: 1.4,
      opacity: 0
    });

    gsap.set(overlayRef.current, {
      opacity: 0
    });

    // Entrance animations with sophisticated stagger
    tl.to(imageRef.current, {
      opacity: 1,
      scale: 1,
      duration: 2,
      ease: "power3.out"
    })
    .to(overlayRef.current, {
      opacity: 1,
      duration: 1.5,
      ease: "power2.out"
    }, "-=1.5")
    .to(badgeRef.current, {
      opacity: 1,
      y: 0,
      clipPath: 'inset(0% 0 0 0)',
      duration: 1,
      ease: "power3.out"
    }, "-=1")
    .to(mainTitleRef.current, {
      opacity: 1,
      y: 0,
      clipPath: 'inset(0% 0 0 0)',
      duration: 1.2,
      ease: "power3.out"
    }, "-=0.8")
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      clipPath: 'inset(0% 0 0 0)',
      duration: 1,
      ease: "power3.out"
    }, "-=0.9")
    .to(statsRef.current, {
      opacity: 1,
      y: 0,
      clipPath: 'inset(0% 0 0 0)',
      duration: 1,
      ease: "power3.out"
    }, "-=0.8")
    .to(ctaRef.current, {
      opacity: 1,
      y: 0,
      clipPath: 'inset(0% 0 0 0)',
      duration: 1,
      ease: "power3.out"
    }, "-=0.8");

    // Scroll-triggered zoom effect for magazine-style transition
    const imageZoomTrigger = ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "bottom top",
      scrub: 1.5,
      onUpdate: (self) => {
        const progress = self.progress;
        const scale = 1 + (progress * 0.8); // Zoom from 1 to 1.8x
        const brightness = 1 - (progress * 0.3); // Darken as it zooms
        
        gsap.set(imageRef.current, {
          scale: scale,
          filter: `brightness(${brightness})`
        });
        
        // Parallax text movement
        gsap.set([mainTitleRef.current, subtitleRef.current], {
          y: -progress * 100,
          opacity: 1 - (progress * 1.2)
        });
        
        gsap.set([badgeRef.current, statsRef.current, ctaRef.current], {
          y: -progress * 60,
          opacity: 1 - (progress * 1.5)
        });
      }
    });



    // Image rotation effect
    const imageTimer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);

    // Cleanup
    return () => {
      clearInterval(imageTimer);
      lenis.destroy();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [hasScrolled, images.length]);

  return (
    <section 
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden bg-gray-50 dark:bg-gray-900 z-0"
    >
      {/* Full-screen background image with zoom effect */}
      <div 
        ref={imageContainerRef}
        className="absolute inset-0 w-full h-full"
      >
        {images.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-2000 ${
              currentImage === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div ref={index === currentImage ? imageRef : null} className="w-full h-full">
              <Image
                src={image.src}
                alt={`Club showcase ${index + 1}`}
                fill
                priority={index === 0}
                className={`object-cover ${image.position}`}
                sizes="100vw"
                quality={95}
              />
            </div>
          </div>
        ))}
        
        {/* Gradient overlay for text readability */}
        <div 
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"
        />
      </div>

      {/* Magazine-style content overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 md:px-12 py-8 md:py-16">
        
        {/* Badge */}
        <div ref={badgeRef} className="mb-6 md:mb-8">
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-full px-8 py-4 border border-white/20 shadow-2xl">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
            <span className="text-white text-sm md:text-base font-medium tracking-wide uppercase">
              New Event Coming Soon
            </span>
          </div>
        </div>

        {/* Main heading - Magazine style typography */}
        <div ref={mainTitleRef} className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-[0.9] tracking-tight text-white">
            <span className="block md:inline font-extralight">We make </span>
            <span className="block md:inline font-bold bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
              Creative
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div ref={subtitleRef} className="mb-12">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
            <span className="block">Things, </span>
            <span className="block">Everyday</span>
            <span className="inline-block w-3 h-3 bg-red-500 rounded-full ml-2 animate-pulse" />
          </h2>
        </div>

        {/* Stats row */}
        <div ref={statsRef} className="mb-10 md:mb-12">
          <div className="flex items-center justify-center space-x-8 md:space-x-16">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">50+</div>
              <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider">Members</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">10+</div>
              <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider">Workshops</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">24/7</div>
              <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider">Support</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div ref={ctaRef} className="mb-8 md:mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://forms.gle/KxZrPb5P1ySvwFQs7"
              className="group relative px-12 py-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative z-10">Join Our Community</span>
              <div className="absolute inset-0 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <div className="text-white/60 text-sm uppercase tracking-widest">
              Technical Excellence
            </div>
          </div>
        </div>
      </div>



      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-white/20" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-white/20" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-white/20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-white/20" />
    </section>
  );
}
