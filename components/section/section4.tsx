"use client"
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function Section4() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const textToType = 'Members Say';
  const typingSpeed = 150;

  const testimonials = [
    {
      id: 1,
      name: "Ayush Pandey",
      role: "Computer Science Student",
      department: "CSE Department", 
      image: "/images/Ayush.jpeg",
      quote: "The MATLAB tutorials were incredibly helpful in getting me up to speed with numerical computing. I can now analyze data more efficiently thanks to the club.",
      rating: 5,
      featured: true
    },
    {
      id: 2,
      name: "Himanshu Jha",
      role: "Research Assistant",
      department: "Mathematics Department",
      image: "/images/Himanshu.jpeg",
      quote: "Learning LaTeX with Overleaf through the club's tutorials was a game-changer for my academic writing. My reports and papers look so much more professional now!",
      rating: 5,
      featured: false
    },
    {
      id: 3,
      name: "Khilesh Bhangale",
      role: "Graduate Student",
      department: "Applied Mathematics",
      image: "/images/Khilesh.jpeg",
      quote: "I used to struggle with formatting my research papers. The Overleaf tutorials from the club made the entire process so much easier and less time-consuming.",
      rating: 5,
      featured: false
    },
    {
      id: 4,
      name: "Abhinav Singh",
      role: "Engineering Student",
      department: "Computational Engineering",
      image: "/images/Abhinav.jpeg",
      quote: "The hands-on approach of the club's MATLAB workshops really helped solidify my understanding. I'm now confident using it for my projects and assignments.",
      rating: 5,
      featured: false
    },
    {
      id: 5,
      name: "Priya Sharma",
      role: "Data Science Student",
      department: "Computer Applications",
      image: "/images/Ayush.jpeg", // Using existing image as placeholder
      quote: "The statistical analysis workshops using MATLAB opened up new perspectives in my data science journey. The practical approach made complex concepts so much clearer.",
      rating: 5,
      featured: false
    },
    {
      id: 6,
      name: "Raj Patel",
      role: "PhD Candidate",
      department: "Applied Physics",
      image: "/images/Himanshu.jpeg", // Using existing image as placeholder
      quote: "The Overleaf tutorials saved me countless hours during my thesis writing. The professional formatting and collaborative features are incredible.",
      rating: 5,
      featured: false
    },
    {
      id: 7,
      name: "Sneha Gupta",
      role: "Research Scholar",
      department: "Biostatistics",
      image: "/images/Khilesh.jpeg", // Using existing image as placeholder
      quote: "As someone from a non-technical background, the step-by-step MATLAB tutorials made statistical computing accessible and enjoyable for me.",
      rating: 5,
      featured: false
    },
    {
      id: 8,
      name: "Arjun Kumar",
      role: "Master's Student",
      department: "Mechanical Engineering",
      image: "/images/Abhinav.jpeg", // Using existing image as placeholder
      quote: "The numerical methods workshops using MATLAB helped me understand complex engineering simulations. It's been invaluable for my research projects.",
      rating: 5,
      featured: false
    }
  ];

  const carouselTestimonials = testimonials.slice(1); // All except the featured one

  // Typing effect for "Members Say"
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const startTyping = () => {
      setIsTyping(true);
      setTypedText('');
      
      for (let i = 0; i <= textToType.length; i++) {
        timeoutId = setTimeout(() => {
          setTypedText(textToType.slice(0, i));
          if (i === textToType.length) {
            setIsTyping(false);
          }
        }, i * typingSpeed);
      }
    };
    
    // Start typing animation after a delay
    const initialDelay = setTimeout(startTyping, 1000);
    
    return () => {
      clearTimeout(initialDelay);
      clearTimeout(timeoutId);
    };
  }, []);

  // Continuous smooth auto-scroll functionality with true infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Move one position forward continuously
        const nextIndex = prevIndex + 1;
        // Reset invisibly when we're far enough into the duplicated content
        // This happens during a transition so it's invisible to the user
        if (nextIndex >= carouselTestimonials.length * 2) {
          // Reset to the middle of the array to continue seamlessly
          return carouselTestimonials.length;
        }
        return nextIndex;
      });
    }, 4000); // Smooth transition every 4 seconds

    return () => clearInterval(interval);
  }, [carouselTestimonials.length]);

  return (
    <section className="bg-white dark:bg-black transition-colors duration-300 py-4 lg:py-12 pb-6 lg:pb-8 px-6 md:px-12 lg:px-16 xl:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Section Header with Magazine-style Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24 max-w-4xl mx-auto"
        >
          {/* Small overline text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-2 text-xs font-medium tracking-[0.2em] uppercase text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
              Student Voices
            </span>
          </motion.div>

          {/* Main heading with magazine-style typography */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight tracking-[-0.02em] text-black dark:text-white mb-6 leading-[0.9] font-serif max-w-5xl mx-auto">
            What Our <span className="font-thin italic bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
              {typedText}
              {isTyping && <span className="animate-pulse">|</span>}
            </span>
          </h1>

          {/* Subtitle with enhanced typography */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="hidden lg:block text-lg md:text-xl text-gray-600 dark:text-gray-400 font-extralight leading-relaxed tracking-wide max-w-3xl mx-auto"
          >
            Discover how Linpack Club has transformed the academic journey of our members through hands-on learning and community support.
          </motion.p>
        </motion.div>
        {/* Featured Testimonial - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-20"
        >
          <div className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950/30 dark:via-black dark:to-purple-950/30 rounded-3xl p-8 lg:p-12 border border-blue-100 dark:border-blue-900/30 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 border border-blue-300 dark:border-blue-700 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 border border-purple-300 dark:border-purple-700 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-gray-300 dark:border-gray-700 rounded-full"></div>
            </div>

            <div className="relative z-10">
              {/* Quote Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                  <Quote className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
              </motion.div>

              {/* Featured Quote */}
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl lg:text-4xl font-extralight leading-relaxed text-black dark:text-white mb-8 tracking-[-0.01em] font-serif max-w-4xl"
              >
                &ldquo;{testimonials[0].quote}&rdquo;
              </motion.blockquote>

              {/* Featured Author */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center space-x-6"
              >
                <div className="relative">
                  <Image
                    width={80}
                    height={80}
                    src={testimonials[0].image}
                    alt={testimonials[0].name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-extralight text-black dark:text-white mb-1 tracking-[-0.01em] font-serif">
                    {testimonials[0].name}
                  </h4>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 font-extralight tracking-wide">
                    {testimonials[0].role}
                  </p>
                  <p className="text-sm md:text-base text-gray-500 dark:text-gray-500 font-extralight tracking-wide">
                    {testimonials[0].department}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Auto-Scrolling Testimonial Carousel - Desktop Only */}
        <div className="hidden lg:block mb-16 lg:mb-20">
          <div className="relative">
            {/* Carousel Container - 3 Cards Layout */}
            <div className="relative overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-[4000ms] ease-linear"
                style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
              >
                {/* Create multiple duplicated testimonials for true infinite scroll */}
                {[...carouselTestimonials, ...carouselTestimonials, ...carouselTestimonials, ...carouselTestimonials, ...carouselTestimonials].map((testimonial, index) => (
                  <div key={`${testimonial.id}-${index}`} className="w-1/3 flex-shrink-0 px-4">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                        {/* Quote Icon - Small */}
                        <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                          <Quote className="w-6 h-6 text-gray-400 dark:text-gray-600" />
                        </div>

                        {/* Author Info */}
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="relative">
                            <Image
                              width={50}
                              height={50}
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-12 h-12 rounded-full object-cover border-2 border-gray-100 dark:border-gray-700 shadow-md"
                            />
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-base md:text-lg font-extralight text-black dark:text-white mb-1 tracking-[-0.01em] font-serif">
                              {testimonial.name}
                            </h4>
                            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-extralight tracking-wide">
                              {testimonial.role}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-500 font-extralight tracking-wide">
                              {testimonial.department}
                            </p>
                          </div>
                        </div>

                        {/* Rating Stars */}
                        <div className="flex space-x-1 mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <div key={i} className="w-4 h-4 text-yellow-400">
                              <svg fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>
                          ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-extralight leading-relaxed tracking-wide flex-1 italic line-clamp-4">
                          &ldquo;{testimonial.quote}&rdquo;
                        </blockquote>

                        {/* Bottom Border Accent */}
                        <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Testimonial Cards - Only 3 Cards */}
        <div className="block lg:hidden grid grid-cols-1 md:grid-cols-3 gap-6">
          {carouselTestimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Quote Icon - Small */}
                <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  <Quote className="w-8 h-8 text-gray-400 dark:text-gray-600" />
                </div>

                {/* Author Info */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative">
                    <Image
                      width={60}
                      height={60}
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-15 h-15 rounded-full object-cover border-3 border-gray-100 dark:border-gray-700 shadow-md"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg md:text-xl font-extralight text-black dark:text-white mb-1 tracking-[-0.01em] font-serif">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-extralight tracking-wide">
                      {testimonial.role}
                    </p>
                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-500 font-extralight tracking-wide">
                      {testimonial.department}
                    </p>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-yellow-400">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-base md:text-lg text-gray-700 dark:text-gray-300 font-extralight leading-relaxed tracking-wide flex-1 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Bottom Border Accent */}
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8 lg:mt-12"
        >
          <div className="relative overflow-hidden rounded-2xl">
            {/* Full-Screen Background Image using Next.js Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/VIT.jpeg"
                alt="VIT Campus Background"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            
            {/* Multi-layer Overlay System - Optimized for Dark Mode Visibility */}
            {/* Light mode overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 dark:hidden" />
            
            {/* Dark mode overlay - lighter to show image */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/30 hidden dark:block" />
            
            {/* Secondary overlay for color integration */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-blue-900/15" />
            
            {/* Content Container */}
            <div className="relative z-10 p-12 lg:p-20">
              <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight tracking-[-0.02em] text-white mb-6 font-serif drop-shadow-lg">
                Join Our Community
              </h3>
              <p className="hidden lg:block text-lg md:text-xl lg:text-2xl text-white font-extralight leading-relaxed tracking-wide mb-10 max-w-3xl mx-auto drop-shadow-lg">
                Experience the same transformation these students did. Start your journey with Linpack Club today.
              </p>
              <motion.a
                href="https://forms.gle/KxZrPb5P1ySvwFQs7"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-4 py-2 lg:px-10 lg:py-5 bg-white/90 hover:bg-white text-black font-medium rounded-full transition-all duration-300 shadow-2xl hover:shadow-3xl backdrop-blur-sm border border-white/20"
              >
                <span className="text-sm lg:text-lg font-semibold">Become a Member</span>
                <svg className="ml-2 w-4 h-4 lg:ml-3 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}