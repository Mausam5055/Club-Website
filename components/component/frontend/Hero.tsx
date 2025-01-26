import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-6 h-screen md:h-[80vh] text-center px-6 py-12 border-b-2 border-orange-300 bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif bg-gradient-to-r from-blue-700 via-green-600 to-purple-700 bg-clip-text text-transparent">
        Welcome to the MATLAB and Overleaf
      </h1>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">
        Club!
      </h2>

      {/* Description */}
      <p className="text-base sm:text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300 font-serif max-w-3xl">
        Join us in exploring the world of MATLAB and Overleaf, where knowledge
        sharing and collaboration thrive. Experience the joy of learning and
        innovation with like-minded enthusiasts.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <a
          href="https://forms.gle/KxZrPb5P1ySvwFQs7"
          className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 text-sm sm:text-base font-semibold dark:bg-blue-500 dark:hover:bg-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Now
        </a>
        <a
          href="https://in.mathworks.com/"
          className="bg-gray-200 text-gray-800 py-3 px-8 rounded-lg shadow-lg hover:bg-gray-300 transition duration-300 text-sm sm:text-base font-semibold dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
