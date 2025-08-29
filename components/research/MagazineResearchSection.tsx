"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

interface ResearchTopic {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  link: string;
  accent: string;
}

const researchTopics: ResearchTopic[] = [
  {
    id: 1,
    title: "Signal <span class='bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent font-semibold'>Processing</span>",
    category: "SIGNAL PROCESSING",
    description: "Advancing wildlife conservation through innovative data visualization and environmental discovery platforms.",
    imageUrl: "/images/animal.jpg",
    link: "https://in.mathworks.com/company/mathworks-stories/open-source-app-tracks-and-maps-animal-movement-data.html",
    accent: "#00E0FF"
  },
  {
    id: 2,
    title: "Image <span class='bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent font-semibold'>Processing</span>",
    category: "IMAGE PROCESSING", 
    description: "Revolutionary single-photon camera <span class='bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent font-semibold'>technology</span> enabling extreme data acquisition for next-generation computer vision.",
    imageUrl: "/images/image2.jpg",
    link: "https://in.mathworks.com/company/mathworks-stories/single-photon-camera-enables-extreme-data-acquisition-for-computer-vision-applications.html",
    accent: "#6366F1"
  },
  {
    id: 3,
    title: "Robotics",
    category: "ROBOTICS",
    description: "Autonomous battery-powered rail <span class='bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent font-semibold'>systems</span> transforming freight transportation with cleaner, safer <span class='bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent font-semibold'>technology</span>.",
    imageUrl: "/images/image3.jpg",
    link: "https://in.mathworks.com/company/mathworks-stories/autonomous-battery-powered-electric-vehicles-on-railroad-tracks-move-freight.html",
    accent: "#10B981"
  },
  {
    id: 4,
    title: "AI/Control <span class='bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent font-semibold'>Systems</span>",
    category: "AI / CONTROL SYSTEMS",
    description: "Embedding artificial intelligence in electrical <span class='bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent font-semibold'>systems</span> to revolutionize predictive maintenance and operations.",
    imageUrl: "/images/image4.jpg",
    link: "https://in.mathworks.com/company/mathworks-stories/model-based-design-and-code-generation-embed-ai-powered-predictive-maintenance-algorithms-in-electrical-systems.html",
    accent: "#F59E0B"
  },
  {
    id: 5,
    title: "Green <span class='bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent font-semibold'>Technology</span>",
    category: "GREEN TECHNOLOGY",
    description: "Hydrogen fuel cell development driving the future of clean transportation through model-based design approaches.",
    imageUrl: "/images/water.jpg",
    link: "https://in.mathworks.com/company/mathworks-stories/hydrogen-fuel-cell-development-brings-clean-power-to-transportation.html",
    accent: "#059669"
  },
  {
    id: 6,
    title: "Academia",
    category: "ACADEMIA",
    description: "Cloud-based educational platforms forging career-ready engineering skills through mathematical modeling excellence.",
    imageUrl: "/images/image5.jpg",
    link: "https://in.mathworks.com/company/mathworks-stories/cloud-based-docker-containers-help-mit-students-with-mathematical-modeling.html",
    accent: "#8B5CF6"
  }
];

export default function MagazineResearchSection() {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const textToType = '& Development';
  const typingSpeed = 150;

  // Typing effect for "& Development"
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

  return (
    <section className="bg-white dark:bg-black transition-colors duration-300" id="aboutus">
      {/* Section Header */}
      <div className="flex flex-col justify-center items-center px-6 py-12 min-h-[40vh] relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video/linpack.mp4" type="video/mp4" />
            <source src="/video/Linpack.webm" type="video/webm" />
          </video>
          
          {/* Fallback background for when video doesn't load */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800"></div>
          
          {/* Video overlay for perfect text readability */}
          <div className="absolute inset-0 bg-white/75 dark:bg-black/75 backdrop-blur-[0.5px]"></div>
          
          {/* Subtle gradient for enhanced contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 dark:via-black/10 to-white/30 dark:to-black/30"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto relative z-10"
        >
          {/* Small overline text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-2 text-xs font-medium tracking-[0.2em] uppercase text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
              Research & Innovation
            </span>
          </motion.div>

          {/* Main heading with responsive typography and typing effect */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight tracking-[-0.02em] text-black dark:text-white mb-6 leading-[0.9] font-serif max-w-5xl mx-auto">
            Latest Research
            <span className="block font-thin italic bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-2 tracking-[-0.01em]">
              {typedText}
              {isTyping && <span className="animate-pulse">|</span>}
            </span>
          </h1>
        </motion.div>
      </div>

      {/* Research Panels with Curtain Effect */}
      <div className="relative">
        {researchTopics.map((topic, index) => (
          <div
            key={topic.id}
            className="sticky top-[calc(var(--index)*2rem)] min-h-[90vh] relative flex items-center"
            style={{ "--index": index } as React.CSSProperties}
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={topic.imageUrl}
                alt={topic.title.replace(/<[^>]*>/g, '')}
                fill
                className="object-cover"
                priority={index < 2}
              />
              {/* Overlay for text readability */}
              <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full px-6 md:px-16 lg:px-24">
              <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Left side - Text content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-left"
                >
                  {/* Category with enhanced styling */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="mb-8"
                  >
                    <span 
                      className="inline-block px-6 py-3 text-xs font-semibold tracking-[0.15em] uppercase border-2 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                      style={{ 
                        color: topic.accent,
                        borderColor: topic.accent,
                        textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                      }}
                    >
                      {topic.category}
                    </span>
                  </motion.div>

                  {/* Enhanced title with better typography */}
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight tracking-[-0.03em] text-white mb-10 leading-[0.85] font-serif drop-shadow-2xl max-w-4xl"
                    dangerouslySetInnerHTML={{ __html: topic.title }}
                  />

                  {/* Enhanced description */}
                  <motion.p 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-12 leading-relaxed font-extralight max-w-2xl tracking-wide drop-shadow-lg"
                    dangerouslySetInnerHTML={{ __html: topic.description }}
                  />

                  {/* Enhanced CTA Button */}
                  <motion.a
                    href={topic.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true }}
                    className="group inline-flex items-center gap-2 lg:gap-4 px-4 py-2 lg:px-10 lg:py-5 bg-white/95 backdrop-blur-sm text-black font-medium tracking-[0.1em] uppercase text-xs lg:text-sm border-2 border-white hover:bg-gradient-to-r hover:from-red-400 hover:via-red-500 hover:to-red-600 hover:text-white hover:border-red-500 transition-all duration-500 shadow-2xl rounded-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="font-semibold">Explore Research</span>
                    <ExternalLink className="w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </motion.a>
                </motion.div>

                {/* Enhanced Right side - Visual element */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="hidden lg:flex justify-end items-center"
                >
                  <div className="relative">
                    {/* Large number indicator */}
                    <div className="w-32 h-32 border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center transition-all duration-500 hover:border-white/40 hover:bg-white/10">
                      <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent text-4xl font-semibold tracking-wider font-mono">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    
                    {/* Decorative lines */}
                    <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
                      <div className="w-16 h-px bg-white/30"></div>
                      <div className="w-8 h-px bg-white/20 mt-2"></div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
