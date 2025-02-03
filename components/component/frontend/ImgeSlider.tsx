"use client";

import React, { useState, useEffect } from "react";
import  Video  from "./video";
import BookComponent from "./bookComponent";
import Image from "next/image";

export default function ImageSlider() {
  const [showModal, setShowModal] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1000);

    // Add animation completion timer
    const animationTimer = setTimeout(() => {
      setAnimationComplete(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
      clearTimeout(animationTimer);
    };
  }, []);

  return (
    <div className="flex flex-col items-center mb-8 md:mb-12 lg:mb-16 gap-y-8 px-4 sm:px-6 w-full overflow-hidden">
      {/* Announcement Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full p-6 animate-slideUp">
            <button
              onClick={() => setShowModal(false)}
              aria-label="Close Announcement"
              className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-colors hover:rotate-90 duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center space-y-4">
              {/* Added Image Section */}
              <div className="relative w-full h-48 md:h-64 mb-4 rounded-xl overflow-hidden">
                <Image
                  src="/images/vitbgotlatent2.jpg"
                  alt="VITB Got Latent Season 2"
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="animate-bounce-slow text-4xl mb-2">🎉</div>
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
                VITB Got Latent Season 2
              </h3>
              <p className="text-gray-600 dark:text-gray-300 animate-fadeIn">
                The Ultimate Fun Experience is coming soon!
              </p>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg transform hover:scale-105 transition-all duration-300">
                <p className="text-red-600 dark:text-red-300 font-semibold flex items-center justify-center gap-2">
                  <span className="animate-pulse">📅</span> Mark your calendar: 22 February 2025
                </p>
              </div>
              <a
                href="#featured-event"
                aria-label="Learn more about VITB Got Latent Season 2"
                onClick={() => setShowModal(false)}
                className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 mt-4 transform hover:scale-105 hover:shadow-lg"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Featured Event Section - Now First */}
      <div id="featured-event" className={`w-full max-w-6xl mx-auto transition-all duration-700 ${animationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-block bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-300 px-4 py-1 rounded-full text-sm font-semibold mb-3">
            Upcoming Event
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Don&apos;t Miss Out!
          </h2>
        </div>

        {/* Event Card */}
        <div className="relative bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.01] transition-all duration-300">
          {/* Top Ribbon */}
          <div className="absolute top-0 right-0 bg-red-500 text-white px-6 py-2 rounded-bl-2xl font-semibold z-20">
            📅 22 Feb 2025
          </div>

          {/* Event Banner */}
          <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
            <Image
              src="/images/vitbgotlatent2.jpg"
              alt="VITB Got Latent Season 2"
              fill
              className="object-cover transform hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            
            {/* Banner Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
                🎉 VITB Got Latent
                <span className="text-red-400"> Season 2</span>
              </h3>
              <p className="text-xl md:text-2xl text-gray-200 mb-6">
                The Ultimate Fun Experience Awaits! 🎭🎤🎨
              </p>
            </div>
          </div>

          {/* Event Details Grid */}
          <div className="relative px-6 py-8 md:p-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Event Highlights */}
              <div className="bg-white dark:bg-gray-800/90 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="text-lg font-semibold mb-4 text-red-500 dark:text-red-400 flex items-center">
                  <span className="text-2xl mr-2">🎯</span> Main Events
                </h4>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  {[
                    ["🕵️‍♂️", "Murder Mystery"],
                    ["🎤", "Lip Sync Battle"],
                    ["🎨", "Face Painting"],
                    ["🍦", "Ice Cream Fight"]
                  ].map(([emoji, text]) => (
                    <li key={text} className="flex items-center space-x-2 group">
                      <span className="text-xl group-hover:scale-110 transition-transform">{emoji}</span>
                      <span className="group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Info */}
              <div className="bg-white dark:bg-gray-800/90 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="text-lg font-semibold mb-4 text-red-500 dark:text-red-400 flex items-center">
                  <span className="text-2xl mr-2">ℹ️</span> Event Info
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                    <span className="text-xl">⏰</span>
                    <span>Registration Open</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                    <span className="text-xl">🎁</span>
                    <span>Exciting Prizes</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                    <span className="text-xl">👥</span>
                    <span>Open for All</span>
                  </div>
                </div>
              </div>

              {/* Registration */}
              <div className="bg-white dark:bg-gray-800/90 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="text-lg font-semibold mb-4 text-red-500 dark:text-red-400 flex items-center">
                  <span className="text-2xl mr-2">🎟️</span> Register Now
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Limited slots available! Don&apos;t miss the craziest event of the season.
                </p>
                <a
                  href="https://forms.gle/8xwWsK2W7vPkPR3w8"
                  target="_blank"
                  aria-label="Register for VITB Got Latent Season 2"
                  rel="noopener noreferrer"
                  className="block text-center bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Register Here →
                </a>
              </div>
            </div>

            {/* Hashtags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {["#VITBGotLatent", "#UnleashTheFun", "#MysteryMadness", "#LatentShow"].map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-300 px-3 py-1 rounded-full text-sm hover:bg-red-200 dark:hover:bg-red-800/30 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-serif p-2 dark:text-white animate-fade-in mt-8">
        Our Events
      </h1>

      {/* Video and Book Section - Moved below */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 lg:gap-8 w-full max-w-6xl mx-auto">
        {/* Video Section */}
        <div className="relative w-full lg:w-1/2 h-[40vh] sm:h-[45vh] lg:h-[55vh] z-10">
          <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 sm:p-3">
            <div className="relative w-full h-full rounded-md overflow-hidden">
              {/* Corner Decorations */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-red-500"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-red-500"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-red-500"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-red-500"></div>
              
              <Video />
            </div>
          </div>
        </div>

        {/* Book Section - Matched height with video */}
        <div className="flex w-full lg:w-1/2 h-[40vh] sm:h-[45vh] lg:h-[55vh] bg-transparent rounded-md z-20">
          <BookComponent />
        </div>
      </div>

      {/* Join Our Club Section */}
      <div className="relative flex justify-center items-center w-[92vw] sm:w-[85vw] md:w-[80vw] h-auto min-h-[40vh] my-8 px-4">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 dark:from-red-600 dark:to-red-700 border border-transparent rounded-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300"></div>

        {/* Content Box */}
        <div className="absolute flex flex-col justify-center items-center inset-0 bg-white dark:bg-gray-800 border border-transparent rounded-md z-10 gap-y-8 px-8 md:px-16 py-8">
          <h1 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-center dark:text-white">
            Join Our Club Today!
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-center dark:text-gray-300">
            Become a member to access exclusive resources and join our community of{" "}
            <br className="hidden sm:block" /> MATLAB and Overleaf enthusiasts.
          </p>

          {/* Join Us Button */}
          <a href="https://forms.gle/KxZrPb5P1ySvwFQs7" 
              aria-label="Join MATLAB & Overleaf Club"
             className="mt-6 transform hover:scale-105 transition-all duration-300">
            <button
              type="button"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-red-400 to-red-500 dark:from-red-500 dark:to-red-600 font-serif font-bold text-base sm:text-lg md:text-xl text-white shadow-lg hover:shadow-xl transition duration-300"
            >
              Join Us
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
