"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/compat/router";
import ThemeSwitch from "../toggleSwitch";

const Navbar2: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Add scroll handler function
  const handleScroll = (e: React.MouseEvent<HTMLDivElement>, href: string) => {
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

  const navItems = [
    { name: "Home", href: "/#home" },
    { name: "Leaderboard", href: "https://leaderboard-linpack.vercel.app/" },
    { name: "Expense", href: "https://linpack-expense-tracker.vercel.app/" },
    { name: "About Us", href: "/#aboutus" },
    { name: "Contact", href: "/#contact" },
  ];

  const getItemStyle = (itemName: string) => {
    switch(itemName) {
      case "Leaderboard":
        return "bg-yellow-200 dark:bg-yellow-700 hover:bg-yellow-300 dark:hover:bg-yellow-600";
      case "Expense":
        return "bg-blue-200 dark:bg-blue-700 hover:bg-blue-300 dark:hover:bg-blue-600";
      default:
        return "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600";
    }
  };

  return (
    <nav className="bg-gradient-to-b from-gray-100 to-gray-50/90 dark:from-gray-900 dark:to-gray-800/95 backdrop-blur-md sticky top-0 z-50 shadow-md border-b border-gray-200 dark:border-gray-700/50">
      <div className="w-full px-4 sm:px-6 lg:px-8"> {/* Removed max-w-7xl and mx-auto, replaced with w-full */}
        <div className="flex justify-between items-center h-16">
          {/* Logo - Removed left padding */}
          <div className="text-xl font-bold flex-shrink-0">
            <Link href="/#home">
              <div className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 transition-colors flex items-center gap-2">
                <Image
                  src="/images/logo.png"
                  alt="Club Logo"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="whitespace-nowrap">MATLAB & LaTeX Club</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu - Removed margin-left */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <div
                  onClick={(e) => handleScroll(e, item.href)}
                  className={`px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 ${getItemStyle(item.name)} transition-colors ${
                    router?.asPath === item.href
                      ? "text-yellow-500"
                      : ""
                  }`}
                  aria-label={item.name}
                >
                  {item.name}
                </div>
              </Link>
            ))}
              <ThemeSwitch />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <ThemeSwitch />
            <button
              onClick={toggleMenu}
              className="ml-4 text-gray-600 dark:text-white hover:text-gray-800 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100/95 dark:bg-gray-800/95 backdrop-blur-md">
          <div className="space-y-2 px-4 py-3">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <div
                  onClick={(e) => handleScroll(e, item.href)}
                  className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-yellow-500 
                    ${getItemStyle(item.name)} dark:text-gray-200 transition-all duration-200 ${
                    router?.asPath === item.href
                      ? "text-yellow-500"
                      : ""
                  }`}
                  aria-label={item.name}
                >
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;
