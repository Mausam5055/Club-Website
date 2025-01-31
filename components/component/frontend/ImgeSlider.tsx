import React from "react";
import { Video } from "./video";
import BookComponent from "./bookComponent";

export default function ImageSlider() {
  return (
    <div className="flex flex-col items-center gap-y-8 mb-8 md:mb-12 lg:mb-16">
      {/* Title Section */}
      <h1 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-serif p-4 dark:text-white">
        Our Events
      </h1>

      {/* Video Section - Full Width & Height */}
      <div className="w-full h-screen flex items-center justify-center">
        <div className="relative w-full max-w-5xl h-[90%] flex items-center justify-center">
          {/* Corner Decorations */}
          <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-red-500"></div>
          <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-red-500"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-red-500"></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-red-500"></div>

          {/* Main Video Container */}
          <div className="w-full h-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 flex items-center justify-center">
            <div className="w-full h-full rounded-md overflow-hidden">
              <Video />
            </div>
          </div>
        </div>
      </div>

      {/* Book Section - Full Width & Height */}
      <div className="w-full h-screen flex items-center justify-center bg-transparent">
        <div className="w-full max-w-5xl h-[90%] flex items-center justify-center">
          <BookComponent />
        </div>
      </div>

      {/* Join Our Club Section */}
      <div className="relative flex justify-center items-center w-full max-w-5xl h-[50vh] my-8">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-red-300 dark:bg-red-500 border border-transparent rounded-lg transform -rotate-2"></div>

        {/* Content Box */}
        <div className="absolute flex flex-col justify-center items-center inset-0 bg-white dark:bg-gray-800 border border-transparent rounded-md z-10 gap-y-6 px-8 md:px-16 py-6">
          <h1 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-center dark:text-white">
            Join Our Club Today!
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-center dark:text-gray-300">
            Become a member to access exclusive resources and join our community of{" "}
            <br className="hidden sm:block" /> MATLAB and Overleaf enthusiasts.
          </p>

          {/* Join Us Button */}
          <a href="https://forms.gle/KxZrPb5P1ySvwFQs7" className="mt-4">
            <button
              type="button"
              className="px-6 py-3 rounded-full bg-red-400 dark:bg-red-500 border border-black dark:border-red-400 font-serif font-bold text-sm sm:text-base md:text-lg shadow-md hover:bg-red-500 dark:hover:bg-red-600 transition duration-300 dark:text-white"
            >
              Join Us
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
