import React from "react";
import { Video } from "./video";
import BookComponent from "./bookComponent";

export default function ImageSlider() {
  return (
    <div className="flex flex-col items-center mb-8 md:mb-12 lg:mb-16 gap-y-8">
      {/* Title Section */}
      <h1 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-serif p-4 dark:text-white">
        Our Events
      </h1>

      {/* Image and Book Component Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 px-4 w-full max-w-6xl">
        {/* Video Section */}
        <div className="flex w-full lg:w-1/2 h-[40vh] lg:h-[60vh] bg-gray-100 dark:bg-gray-800 rounded-md shadow-md">
          <Video />
        </div>

        {/* Book Section */}
        <div className="flex w-full lg:w-1/2 h-auto lg:h-[60vh] bg-gray-100 dark:bg-gray-800 rounded-md shadow-md">
          <BookComponent />
        </div>
      </div>

      {/* Join Our Club Section */}
      <div className="relative flex justify-center items-center w-[90vw] sm:w-[85vw] md:w-[80vw] lg:w-[75vw] h-[40vh] sm:h-[45vh] md:h-[50vh] my-8">
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
