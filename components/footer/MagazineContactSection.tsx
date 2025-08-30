"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, Twitter, Instagram, Github, Linkedin } from 'lucide-react'

declare global {
  interface Window {
    CustomSubstackWidget: any;
  }
}

export default function MagazineContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [typedText, setTypedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  
  const textToType = 'Conversation'
  const typingSpeed = 150

  // Typing effect for "Conversation"
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

  useEffect(() => {
    // Adding custom Substack widget script after the component mounts
    const script = document.createElement("script");
    script.src = "https://substackapi.com/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Configuring the Substack widget
    window.CustomSubstackWidget = {
      substackUrl: "linpack.substack.com",
      placeholder: "Enter your email",
      buttonText: "Subscribe",
      theme: "purple",
    };

    // Initialize widgets for both desktop and mobile after a short delay
    const initWidgets = () => {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        if (window.CustomSubstackWidget && window.CustomSubstackWidget.init) {
          // Initialize desktop widget
          const desktopContainer = document.getElementById("custom-substack-embed");
          if (desktopContainer) {
            try {
              window.CustomSubstackWidget.init(desktopContainer);
            } catch (e) {
              console.log("Error initializing desktop Substack widget:", e);
            }
          }
          
          // Initialize mobile widget
          const mobileContainer = document.getElementById("custom-substack-embed-mobile");
          if (mobileContainer) {
            try {
              window.CustomSubstackWidget.init(mobileContainer);
            } catch (e) {
              console.log("Error initializing mobile Substack widget:", e);
            }
          }
        }
      }, 100);
    };

    // Check if widget is already loaded, otherwise wait for it
    if (window.CustomSubstackWidget && window.CustomSubstackWidget.init) {
      initWidgets();
    } else {
      script.onload = initWidgets;
    }

    return () => {
      // Cleanup the script when the component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setFormData({ name: '', email: '', message: '' })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <footer id="contact" className="bg-white dark:bg-black transition-colors duration-300">
      {/* Main Contact Section */}
      <section className="py-8 lg:py-12 px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header with Reduced Desktop Typography */}
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-6 py-2 text-xs font-medium tracking-[0.2em] uppercase text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
                Get In Touch
              </span>
            </motion.div>

            {/* Reduced main heading with responsive typography */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight tracking-[-0.02em] text-black dark:text-white mb-4 leading-[0.9] font-serif max-w-5xl mx-auto">
              <span className="block lg:inline">Let&apos;s Start a </span>
              <span className="block lg:inline font-thin italic bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-2 lg:mt-0 tracking-[-0.01em]">
                {typedText}
                {isTyping && <span className="animate-pulse">|</span>}
              </span>
            </h1>
          </motion.div>

          {/* Contact Grid - Restructured for mobile newsletter positioning */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Information - Desktop: Left Column, Mobile: Order 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8 order-1 lg:order-none"
            >
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extralight tracking-[-0.02em] text-black dark:text-white mb-6 font-serif leading-tight">
                  Connect With Us
                </h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 font-extralight leading-relaxed hidden md:block tracking-wide max-w-lg">
                  We&apos;re always excited to collaborate on innovative projects and discuss <span className="font-semibold bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent underline decoration-red-500 decoration-2 underline-offset-2">mathematical research opportunities.</span>
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:linpack@vitbhopal.ac.in"
                      className="text-lg md:text-xl font-extralight text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 tracking-wide"
                    >
                      linpack@vitbhopal.ac.in
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-950 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                      Location
                    </p>
                    <p className="text-lg md:text-xl font-extralight text-black dark:text-white tracking-wide">VIT Bhopal University</p>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 font-extralight tracking-wide">Kotri Kalan, Bhopal, MP 466114</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-6">
                  <p className="text-base font-medium text-gray-500 dark:text-gray-400 uppercase tracking-[0.15em] mb-4">
                    Connect With Us
                  </p>
                  <div className="flex space-x-3">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-blue-50 dark:hover:bg-blue-950 hover:border-blue-200 dark:hover:border-blue-800"
                    >
                      <Twitter className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" />
                    </motion.a>
                    
                    <motion.a
                      href="https://www.instagram.com/linpack_club_vit_bhopal/"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-pink-50 dark:hover:bg-pink-950 hover:border-pink-200 dark:hover:border-pink-800"
                    >
                      <Instagram className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400" />
                    </motion.a>
                    
                    <motion.a
                      href="https://github.com/LinpackClub"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
                    >
                      <Github className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200" />
                    </motion.a>
                    
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-blue-50 dark:hover:bg-blue-950 hover:border-blue-200 dark:hover:border-blue-800"
                    >
                      <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" />
                    </motion.a>
                  </div>
                </div>

                {/* Newsletter Subscription - Visible on all devices */}
                <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-xl p-6 border border-blue-100 dark:border-blue-900/30">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center space-x-2 mb-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <p className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                          Newsletter
                        </p>
                      </div>
                      <h4 className="text-xl md:text-2xl lg:text-3xl font-extralight tracking-[-0.02em] text-black dark:text-white mb-3 font-serif leading-tight">
                        Stay Connected
                      </h4>
                      <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed font-extralight tracking-wide">
                        Get updates on research breakthroughs, events, and mathematical discoveries
                      </p>
                    </div>
                    
                    {/* Substack Widget Container */}
                    <div className="max-w-md mx-auto mb-4">
                      <div id="custom-substack-embed" className="mb-4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form - Desktop: Right Column, Mobile: Order 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 lg:p-12 border border-gray-200 dark:border-gray-800 order-2 lg:order-none"
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-extralight tracking-[-0.02em] text-black dark:text-white mb-8 font-serif leading-tight">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:from-red-500 hover:via-red-600 hover:to-red-700 disabled:from-red-300 disabled:via-red-400 disabled:to-red-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Footer */}
      <section className="border-t border-gray-200 dark:border-gray-800 py-8 lg:py-12 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-4">
              <Image
                className="w-8 h-8 rounded-full"
                src="/images/logo.png"
                width={32}
                height={32}
                alt="Linpack Club Logo"
              />
              <p className="text-sm text-gray-600 dark:text-gray-400 font-light">
                © {new Date().getFullYear()} Linpack Club, VIT Bhopal University. All rights reserved.
              </p>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-500 font-light">
              Crafted with mathematical precision and creative passion
            </p>
          </div>
        </div>
      </section>
    </footer>
  )
}