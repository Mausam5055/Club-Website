"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import Googlemap from '../googlemap'

declare global {
  interface Window {
    CustomSubstackWidget: any;
  }
}

export default function Footer() {
  useEffect(() => {
    // Adding custom Substack widget script after the component mounts
    const script = document.createElement("script");
    script.src = "https://substackapi.com/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Configuring the Substack widget
    window.CustomSubstackWidget = {
      substackUrl: "linpack.substack.com", // Your Substack URL
      placeholder: "example@gmail.com",   // Default placeholder email
      buttonText: "Subscribe",            // Button text
      theme: "purple",                    // Choose your theme color
    };

    return () => {
      // Cleanup the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array to run only once
  return (
    <div id="contact" className='w-full overflow-hidden'>
      <section className="py-6 sm:py-10 lg:pt-24 bg-gray-50 dark:bg-gray-900">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-[2000px]">
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-x-12">
            {/* Left Section - Logo and Social */}
            <div className="col-span-1 md:col-span-3 lg:col-span-4 flex flex-col items-center md:items-start">
              <div className='flex flex-col md:flex-row items-center gap-y-2 md:gap-x-2 mb-4 sm:mb-6'>
                <Image className="w-auto h-12 md:h-9" src="/images/logo.png" width={1400} height={1400} alt="" />
                <span className='font-semibold text-2xl md:text-xl text-gray-700 dark:text-gray-200'>Linpack Club</span>
              </div>

              <p className="text-lg sm:text-xl lg:text-3xl leading-relaxed text-gray-600 dark:text-gray-300 mt-4 sm:mt-7 text-center md:text-left">
                Visualize The Unvisible &quot;Maths is Everywheres&quot;
              </p>

              <ul className="flex items-center justify-center md:justify-start space-x-4 mt-4 sm:mt-9">
                <li>
                        <a href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                ></path>
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a href="https://www.instagram.com/linpack_club_vit_bhopal/" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                                <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                <path
                                    d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                                ></path>
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a href="https://github.com/LinpackClub" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                                ></path>
                            </svg>
                        </a>
                    </li>
              </ul>

              {/* Add Contact Information */}
              <div className="mt-6 text-center md:text-left">
                <h3 className="text-sm font-semibold tracking-widest text-pink-300 uppercase mb-2">
                  Contact Us
                </h3>
                <div className="flex items-center justify-center md:justify-start space-x-2 text-gray-600 dark:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <a href="mailto:linpack@vitbhopal.ac.in" className="hover:text-yellow-500 transition-colors">
                    linpack@vitbhopal.ac.in
                  </a>
                </div>
              </div>
            </div>

            {/* Middle Section - Map */}
            <div className='col-span-1 md:col-span-3 lg:col-span-5 mt-4 sm:mt-8 md:mt-0 flex justify-center items-center'>
              <div className='w-[90%] md:w-full h-[250px] sm:h-[300px] lg:h-[400px] rounded-lg overflow-hidden'>
                <Googlemap loading="lazy"/>
              </div>
            </div>

            {/* Right Section - Newsletter */}
            <div className="col-span-1 md:col-span-3 lg:col-span-3 flex flex-col items-center md:items-start mt-4 sm:mt-8 md:mt-0 gap-y-4">
              <div className='w-full lg:pl-8'>
                <p className="text-sm font-semibold tracking-widest text-pink-300 uppercase text-center md:text-left">
                  Subscribe to newsletter
                </p>

                {/* <form action="#" method="POST" className="mt-4 sm:mt-6 w-full">
                  <div className='mb-3 sm:mb-4'>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      id="email" 
                      placeholder="Enter your email" 
                      className="block w-full p-4 text-black dark:text-white placeholder-gray-500 transition-all duration-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" 
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
                  >
                    Subscribe
                  </button>
                </form> */}
                
              </div>
              <div id="custom-substack-embed"></div>
              {/* Keep the commented out sections for future use */}
              {/* Company Section */}
              {/* <div> */}
                {/* <p className="text-sm font-semibold tracking-widest text-pink-300 uppercase">Company</p> */}

                {/* <ul className="mt-6 space-y-4">
                    <li>
                        <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> About </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Features </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Works </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Career </a>
                    </li>
                </ul> */}
            {/* </div> */}

              {/* Help Section */}
              {/* <div> */}
                {/* <p className="text-sm font-semibold tracking-widest text-pink-300 uppercase">Help</p> */}
                {/* <Image src={"/images/animal.jpg"} className='w-24 h-16' width={1400} height={1400} alt="Locate"/> */}

               

                {/* <ul className="mt-6 space-y-4">
                    <li>
                        <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Customer Support </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Delivery Details </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Terms & Conditions </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Privacy Policy </a>
                    </li>
                </ul> */}
            {/* </div> */}
            </div>
          </div>

          <hr className="mt-8 sm:mt-16 mb-6 sm:mb-10 border-gray-200 dark:border-gray-700" />

          <p className="text-sm text-center text-gray-600 dark:text-gray-400">
            © Copyright 2024, All Rights Reserved by Linpack
          </p>
        </div>
      </section>
      
    </div>
  )
}
