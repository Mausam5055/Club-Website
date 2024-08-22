"use client"
import { Menu, X } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-[#36BA98] shadow-lg h-[10vh]'>
    <div className='max-w-6xl mx-auto px-4 h-full'>
      <div className='flex justify-between items-center h-full'>
        <div className='flex items-center space-x-4'>
          <a href='/'>
            <Image className="LogoImage h-[8vh] w-auto" src="/images/logo.png" alt="Linpack Club logo" width={1600} height={1600} />
          </a>
          <span className='font-semibold text-xl text-gray-700'>Linpack Club</span>
        </div>

        <div className='hidden md:flex items-center space-x-4'>
          <Link href='/frontview/#about' className='py-2 px-4 text-slate-800  font-serif text-xl hover:text-indigo-500'>Home</Link>
          <a href='/about' className='py-2 px-4 text-slate-800  font-serif text-xl hover:text-indigo-500'>Matlab Tutorials</a>
          <a href='/about' className='py-2 px-4 text-slate-800  font-serif text-xl hover:text-indigo-500'>About Us</a>
          <a href='/services' className='py-2 px-4 text-slate-800  font-serif text-xl hover:text-indigo-500'>Overleaf Resources</a>
          <a href='/contact' className='py-2 px-4 text-slate-800  font-serif text-xl hover:text-indigo-500'>Contact Us</a>
        </div>

        <div className='md:hidden flex items-center'>
          <button className='outline-none mobile-menu-button' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className='w-6 h-6 text-gray-700' />
            ) : (
              <Menu className='w-6 h-6 text-gray-700' />
            )}
          </button>
        </div>
      </div>
    </div>

    {isOpen && (
      <div className='md:hidden'>
        <a href='/' className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200'>Home</a>
        <a href='/about' className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200'>About</a>
        <a href='/services' className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200'>Services</a>
        <a href='/contact' className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200'>Contact</a>
      </div>
    )}
  </nav>
  )
}
