import Image from 'next/image'
import React from 'react'
import { Video } from './video'


export default function ImgeSlider() {
  return (
    <div className="mb-8 md:mb-12 lg:mb-16">
    <h1 className="flex flex-col p-2 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-serif">
      Our Events
    </h1>
    
    <div className="flex flex-col lg:flex-row p-2 h-[70vh] m-2">
      <div className="flex w-full lg:w-[50%] h-full">
        {/* <Image src={"/images/cheetah.jpg"} className="w-full h-full object-cover" alt="cheetah" width={1600} height={1400}/> */}
           {/*<video className="w-full h-full object-cover" loop muted controls preload="none" src="/video/linpack.mp4">
        <source src="/video/linpack.mp4" type="video/mp4" />
          Your browser does not support the video tag. 
        </video>*/}
        <Video/>

      </div>
      <div className="flex items-center justify-center w-full lg:w-[50%] mt-4 lg:mt-0">
        <div className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Portion 2
        </div>
      </div>
    </div>
    
    <div className="relative mx-auto top-6 w-[90vw] sm:w-[85vw] md:w-[80vw] lg:w-[75vw] h-[35vh] sm:h-[40vh] md:h-[45vh] my-auto">
      <div className="absolute inset-0 bg-red-300 border border-transparent rounded-lg z-10 transform -rotate-2"></div>
      <div className="absolute flex flex-col px-8 md:px-12 justify-center inset-0 border bg-white border-transparent rounded-md z-20 gap-y-4 md:gap-y-8">
        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-center">
          Join Our Club Today!
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-center">
          Become a member to access exclusive resources and join our community of <br className="hidden sm:block" /> MATLAB and Overleaf enthusiasts.
        </p>
        <div className='flex flex-col justify-center items-center'>
        <button type="button" className=" flex flex-col justify-center items-center w-[100px] sm:right-12 md:right-[8vw] top-[18vh] md:top-[25vh] rounded-full bg-red-300 border border-black p-2 font-serif font-bold text-sm sm:text-base md:text-lg">
          Join Us
        </button>
        </div>
      </div>
    </div>
  </div>
  
  )
}
