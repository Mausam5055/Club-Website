"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/compat/router";
import ThemeSwitch from "../toggleSwitch";

const Navbar2: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", href: "/#home" },
    { name: "MATLAB", href: "/#matlab" },
    { name: "Leaderboard", href: "https://leaderboard-linpack.vercel.app/" },
    { name: "Expense", href: "https://linpack-expense-tracker.vercel.app/" },
    { name: "About Us", href: "/#aboutus" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="bg-gradient-to-b from-gray-100 to-gray-50/90 dark:from-gray-900 dark:to-gray-800/95 backdrop-blur-md sticky top-0 z-50 shadow-md border-b border-gray-200 dark:border-gray-700/50">
      <div className="max-w-7xl mx-auto pl-0 pr-4 sm:pr-6 lg:pr-8">
        <div className="flex justify-between w-full items-center h-16">
          {/* Logo - Adjusted padding */}
          <div className="text-xl font-bold flex-shrink-0 pl-2">
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

          {/* Desktop Menu - Adjusted margin */}
          <div className="hidden md:flex items-center justify-end space-x-6 flex-1 ml-6">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <div
                  className={`px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 hover:text-yellow-500 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors ${
                    router?.asPath === item.href
                      ? "bg-gray-400 text-yellow-500 dark:bg-gray-500"
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
                  className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-yellow-500 
                    hover:bg-white/50 dark:hover:bg-gray-600 dark:text-gray-200 transition-all duration-200 ${
                    router?.asPath === item.href
                      ? "bg-white/70 text-yellow-500 dark:bg-gray-500"
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
