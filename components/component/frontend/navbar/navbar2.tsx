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
    { name: "About Us", href: "/#aboutus" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="bg-gray-50/90 dark:bg-slate-800/95 backdrop-blur-sm top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between w-full items-center h-16">
          {/* Logo */}
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
                MATLAB & LaTeX Club
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-end space-x-6 flex-1 ml-10">
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
        <div className="md:hidden bg-[rgb(192,214,224)] dark:bg-gray-700">
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
