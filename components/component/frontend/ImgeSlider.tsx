import Image from 'next/image'
import React from 'react'
import { Video } from './video'
import BookComponent from './bookComponent'


export default function ImgeSlider() {
  return (
    <div className="flex flex-col items-center mb-8 md:mb-12 lg:mb-16 gap-y-4">
      {/* Title Section */}
      <h1 className="flex flex-col p-2 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-serif">
        Our Events
      </h1>

      {/* Image and Book Component Section */}
      <div className="flex flex-col items-center lg:flex-row p-2 h-auto lg:h-[70vh] m-2 gap-4">
        <div className="flex w-full lg:w-[50%] h-[40vh] lg:h-full">
          {/* Image/Video */}
          <Video />
        </div>
        
        <div className="flex relative items-center lg:h-full w-full lg:w-[50%] ">
            <BookComponent />
        </div>
      </div>

      {/* Join Our Club Section */}
      <div className="flex relative mx-auto w-[90vw] sm:w-[85vw] md:w-[80vw] lg:w-[75vw] h-[35vh] sm:h-[40vh] md:h-[45vh] my-auto ">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-red-300 border border-transparent rounded-lg z-10 transform -rotate-2"></div>
        
        {/* Content Box */}
        <div className="absolute flex flex-col px-8 md:px-12 justify-center inset-0 border bg-white border-transparent rounded-md z-20 gap-y-4 md:gap-y-8">
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-center">
            Join Our Club Today!
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-center">
            Become a member to access exclusive resources and join our community of <br className="hidden sm:block" /> MATLAB and Overleaf enthusiasts.
          </p>

          {/* Join Us Button */}
          <div className="flex flex-col justify-center items-center">
            <a href="https://forms.gle/KxZrPb5P1ySvwFQs7">
              <button type="button" className="w-[100px] rounded-full bg-red-300 border border-black p-2 font-serif font-bold text-sm sm:text-base md:text-lg">
                Join Us
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
