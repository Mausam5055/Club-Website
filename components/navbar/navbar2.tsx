"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ThemeSwitch from "../toggle/toggleSwitch";
import { useStairs } from "../stairs/StairsContext";

const Navbar2: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [isLinksHovered, setIsLinksHovered] = useState(false);
  const [isNavbarHovered, setIsNavbarHovered] = useState(false);
  const { startTransition } = useStairs();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Add scroll handler function
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      
      // Special handling for home button
      if (href === '/#home') {
        // Check if we're on a different page
        if (window.location.pathname !== '/') {
          // Navigate to home page
          window.location.href = '/';
        } else {
          // If on same page, just scroll to top
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      } else {
        // Original behavior for other sections
        const element = document.querySelector(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setIsOpen(false); // Close mobile menu if open
    }
  };

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    // For internal navigation, trigger the stairs transition
    if (href.startsWith('/') && !href.startsWith('/#') && !href.startsWith('http')) {
      e.preventDefault();
      // Only trigger transition if we're navigating to a different page
      if (href !== window.location.pathname) {
        startTransition();
        // Add a small delay to allow the transition to start
        setTimeout(() => {
          router.push(href);
        }, 50); // Reduced delay
      }
    }
  };

  const navItems = [
    { name: "Home", href: "/#home" },
    { name: "Leaderboard", href: "https://leaderboard-linpack.vercel.app/" },
    // { name: "Expense", href: "https://linpack-expense-tracker.vercel.app/" },
    // { name: "About Us", href: "/#aboutus" },
    { name: "Certificate", href: "/certificate" },
    { name: "Ticket", href: "/ticket" },
  ];

  const getItemStyle = (itemName: string) => {
    return "hover:text-yellow-500 transition-all duration-300 ease-in-out bg-transparent shadow-none font-extralight tracking-wide bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent drop-shadow-sm";
  };

  return (
    <nav
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-[9999] transition-all duration-500 ease-out
        bg-white/60 dark:bg-gray-900/60 shadow-2xl rounded-full px-4 py-2
        flex items-center justify-between
        border border-gray-200/40 dark:border-gray-700/30 backdrop-blur-xl
        ${isNavbarHovered 
          ? 'w-[99vw] max-w-7xl md:w-[90vw] md:max-w-6xl shadow-3xl' 
          : 'w-[97vw] max-w-6xl md:w-[85vw] md:max-w-5xl'
        }
      `}
      style={{ 
        transition: 'width 0.5s cubic-bezier(0.4, 0.2, 0.2, 1), max-width 0.5s cubic-bezier(0.4, 0.2, 0.2, 1), box-shadow 0.3s ease'
      }}
      onMouseEnter={() => {
        setIsLinksHovered(true);
        setIsNavbarHovered(true);
      }}
      onMouseLeave={() => {
        setIsLinksHovered(false);
        setIsNavbarHovered(false);
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <Link href="/#home">
          <div className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 transition-colors duration-300 ease-out flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Club Logo"
              width={36}
              height={36}
              className="rounded-full shadow-md"
            />
            <span className="whitespace-nowrap font-bold tracking-wide bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent drop-shadow-sm text-lg md:text-xl">MATLAB & LaTeX Club</span>
          </div>
        </Link>
      </div>
      {/* Spacer to prevent hover glitch */}
      <div className="hidden md:block" style={{ minWidth: 32, marginLeft: 16, marginRight: 16 }} />
      {/* Desktop Menu */}
      <div
        className="hidden md:flex items-center transition-all duration-500 ease-out space-x-2 md:space-x-6 lg:space-x-10"
        style={{
          minWidth: 350,
          maxWidth: isNavbarHovered ? 800 : 700,
          width: '100%',
          justifyContent: 'center',
        }}
      >
        {navItems.map((item) => (
          <div key={item.name} className="relative">
            {item.href.startsWith('http') ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full text-sm font-semibold tracking-wider text-gray-800 dark:text-gray-100 px-4 py-2.5 ${getItemStyle(item.name)}
                  hover:bg-gray-100/70 dark:hover:bg-gray-800/70 hover:scale-110 transform transition-all duration-300
                `}
                aria-label={item.name}
                style={{ cursor: 'pointer' }}
              >
                {item.name}
              </a>
            ) : (
              <Link 
                href={item.href}
                onClick={(e) => {
                  handleScroll(e, item.href);
                  handleNavigation(e, item.href);
                }}
                className={`rounded-full text-sm font-semibold tracking-wider text-gray-800 dark:text-gray-100 px-4 py-2.5 ${getItemStyle(item.name)}
                  hover:bg-gray-100/70 dark:hover:bg-gray-800/70 hover:scale-110 transform transition-all duration-300
                `}
                aria-label={item.name}
                style={{ cursor: 'pointer' }}
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
        <span className="ml-4 flex items-center"><ThemeSwitch /></span>
      </div>
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <ThemeSwitch />
        <button
          onClick={toggleMenu}
          className="ml-2 text-gray-600 dark:text-white hover:text-gray-800 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>
      {/* Mobile Menu with Sophisticated Design */}
      <div
        className={`absolute top-14 left-0 w-full transition-all duration-700 ease-out transform origin-top z-40 ${
          isOpen 
            ? 'opacity-100 scale-y-100 translate-y-0' 
            : 'opacity-0 scale-y-0 -translate-y-6 pointer-events-none'
        }`}
        style={{
          transformOrigin: 'top center',
        }}
      >
        {/* Backdrop with blur effect */}
        <div className="absolute inset-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-yellow-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-yellow-950/20 rounded-3xl" />
        </div>
        
        <div className="relative px-8 py-8">
          {/* Header with logo */}
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center gap-3 px-4 py-2 bg-white/60 dark:bg-gray-800/60 rounded-full backdrop-blur-sm border border-gray-200/30 dark:border-gray-600/30">
              <Image
                src="/images/logo.png"
                alt="Club Logo"
                width={20}
                height={20}
                className="rounded-full"
              />
              <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Menu</span>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="space-y-3">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative">
                {item.href.startsWith('http') ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative overflow-hidden px-6 py-4 rounded-2xl transition-all duration-500 ease-out transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer
                      bg-white/70 dark:bg-gray-800/70 hover:bg-gradient-to-r hover:from-gray-100/80 hover:to-gray-50/80 dark:hover:from-gray-700/80 dark:hover:to-gray-800/80 text-gray-700 dark:text-gray-200 border border-gray-200/40 dark:border-gray-600/40 hover:border-gray-300/60 dark:hover:border-gray-500/60
                      backdrop-blur-sm shadow-md hover:shadow-xl
                    `}
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: isOpen ? `slideInUp 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards` : 'none'
                    }}
                    aria-label={item.name}
                  >
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-5 bg-grid-pattern" />
                    
                    {/* Animated background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left rounded-2xl`} />
                    
                    <div className="relative flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {/* Icon indicator */}
                        <div className={`w-3 h-3 rounded-full transition-all duration-300 bg-gray-300 dark:bg-gray-600 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500`}></div>
                        
                        <span className="font-extralight text-base tracking-wide bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent drop-shadow-sm">
                          {item.name}
                        </span>
                      </div>
                      
                      {/* Arrow indicator */}
                      <div className={`transition-all duration-300 text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 group-hover:translate-x-1`}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6-6 6-1.41-1.41z"/>
                        </svg>
                      </div>
                    </div>
                  </a>
                ) : (
                  <Link 
                    href={item.href}
                    onClick={(e) => {
                      handleScroll(e, item.href);
                      handleNavigation(e, item.href);
                      setIsOpen(false);
                    }}
                    className={`group relative overflow-hidden px-6 py-4 rounded-2xl transition-all duration-500 ease-out transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer
                      bg-white/70 dark:bg-gray-800/70 hover:bg-gradient-to-r hover:from-gray-100/80 hover:to-gray-50/80 dark:hover:from-gray-700/80 dark:hover:to-gray-800/80 text-gray-700 dark:text-gray-200 border border-gray-200/40 dark:border-gray-600/40 hover:border-gray-300/60 dark:hover:border-gray-500/60
                      backdrop-blur-sm shadow-md hover:shadow-xl
                    `}
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: isOpen ? `slideInUp 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards` : 'none'
                    }}
                    aria-label={item.name}
                  >
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-5 bg-grid-pattern" />
                    
                    {/* Animated background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left rounded-2xl`} />
                    
                    <div className="relative flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {/* Icon indicator */}
                        <div className={`w-3 h-3 rounded-full transition-all duration-300 bg-gray-300 dark:bg-gray-600 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500`}></div>
                        
                        <span className="font-extralight text-base tracking-wide bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent drop-shadow-sm">
                          {item.name}
                        </span>
                      </div>
                      
                      {/* Arrow indicator */}
                      <div className={`transition-all duration-300 text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 group-hover:translate-x-1`}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6-6 6-1.41-1.41z"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Active indicator line */}
                    <div className={`absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full transition-all duration-300 transform scale-x-0 group-hover:scale-x-100`} />
                  </Link>
                )}
              </div>
            ))}
          </div>
          
          {/* Footer section */}
          <div className="mt-8 pt-6 border-t border-gray-200/30 dark:border-gray-600/30">
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-100/80 to-amber-100/80 dark:from-yellow-900/30 dark:to-amber-900/30 rounded-full border border-yellow-200/50 dark:border-yellow-600/30">
                <div className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-yellow-700 dark:text-yellow-400">MATLAB & LaTeX Club</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;