import Image from 'next/image'
import React from 'react'
import { Video } from './video'
import BookComponent from './bookComponent'
import EventReport from './Bookcomponent2'


export default function Imgeslider() {
  return (
    <div className="mb-8 md:mb-12 lg:mb-16">
    <h1 className="flex flex-col p-2 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-serif">
      Our Events (Non-Technical )
    </h1>
    
    <div className="flex flex-col lg:flex-row p-2 h-[70vh] m-2">
      <div className="flex w-full lg:w-[50%] h-full">
        <Video/>

      </div>
      <div className="flex items-center h-full w-full lg:w-[50%] mt-4 lg:mt-0 p-2">
        <div className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl ">
        <EventReport />
        </div>
      </div>
    </div>
  </div>
  
  )
}
