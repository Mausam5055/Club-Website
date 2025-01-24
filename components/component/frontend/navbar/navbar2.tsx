"use client";
import React, { useState } from "react";
import Link from "next/link";
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
    <nav className="opacity-50 bg-blend-overlay dark:bg-slate-800 top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl font-bold">
            <Link href="/#home">
              <div className="hover:text-yellow-500 transition-colors">
                MATLAB & LaTeX Club
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <div
                  className={`px-3 py-2 rounded-md text-sm font-medium hover:text-yellow-500 hover:bg-gray-700 dark:hover:bg-gray-200 dark:hover:text-yellow-500 transition-colors ${
                    router?.asPath === item.href
                      ? "bg-gray-900 text-yellow-500 dark:bg-gray-300"
                      : ""
                  }`}
                  aria-label={item.name}
                >
                  {item.name}
                </div>
              </Link>
            ))}
            <div className="ml-4">
              <ThemeSwitch />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <ThemeSwitch />
            <button
              onClick={toggleMenu}
              className="ml-4 text-gray-300 dark:text-gray-800 hover:text-white dark:hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
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
        <div className="md:hidden bg-gray-800 dark:bg-white">
          <div className="space-y-1 px-4 pt-2 pb-3">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <div
                  className={`block px-3 py-2 rounded-md text-base font-medium hover:text-yellow-500 hover:bg-gray-700 dark:hover:bg-gray-200 dark:hover:text-yellow-500 transition-colors ${
                    router?.asPath === item.href
                      ? "bg-gray-900 text-yellow-500 dark:bg-gray-300"
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
