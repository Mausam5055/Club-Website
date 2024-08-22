import Image from 'next/image'
import React from 'react'

export default function Section5() {
  return (
    <div className='flex flex-row relative h-[55vh] p-6 items-center justify-center gap-4'>
     <div className='flex flex-col justify-center w-[55vw] gap-y-2 h-full'>
        <div className='border-l-red-500 hover:border-l-4 w-full h-full p-2 font-serif flex flex-col gap-y-4'>
            <h2 className='text-base sm:text-xl font-serif font-semibold'>
                Matlab Tutorials
            </h2>
            <p>
            Access a wide range of MATLAB tutorials created by club members and industry professionals to enhance your coding skills.
            </p>
        </div>
        <div className='border-l-red-500 hover:border-l-4 w-full h-full p-2 font-serif flex flex-col gap-y-4 '>
            <h2 className='text-base sm:text-xl font-serif font-semibold'>
                Overleaf Templates
            </h2>
            <p>
            Explore a collection of Overleaf templates for academic papers, presentations, and reports to streamline your document creation process.
            </p>
        </div>
        <div className='border-l-red-500 hover:border-l-4  w-full h-full p-2 font-serif flex flex-col gap-y-4 '>
            <h2 className='text-base sm:text-xl font-serif font-semibold'>
                Community Forum
            </h2>
            <p>
            Engage with like-minded individuals in our community forum to ask questions, share insights, and collaborate on projects related to MATLAB and Overleaf.
            </p>
        </div>
     </div>
     <div className=' flex w-[45vw] h-full'> 
        <Image src="/images/animal.jpg" alt="animal" width={1400} height={1400}  className=' object-cover rounded-md' />
     </div>
    </div>
  )
}
