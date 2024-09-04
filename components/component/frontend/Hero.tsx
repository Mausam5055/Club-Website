import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
<div className="relative flex flex-col gap-y-4 items-center justify-center h-[60vh]  z-[-2] overflow-visible">
  <Image className="absolute inset-0 left-0 top-10 w-[50vw] h-full opacity-90 z-[-1] overflow-visible " src={'/images/matlab.png'} alt="overleaf" width={1400} height={1400}/>
  <Image className="absolute right-0  w-[50vw]  h-full opacity-90 z-[-1] overflow-visible " src={'/images/overleaf2.png'} alt="overleaf" width={1400} height={1400}/>
  <h1 className="text-[3rem] font-extrabold font-serif">
    Welcome to the MATLAB and Overleaf
  </h1>
  <h1 className="text-[3rem] font-extrabold font-serif">Club!</h1>
  <p className="font-semibold font-serif text-[1.25rem]">
    Join us in exploring the world of MATLAB and Overleaf, where knowledge
    sharing and collaboration thrive.
  </p>
  <div className="flex flex-row gap-x-4 ">
    <a href="https://forms.gle/KxZrPb5P1ySvwFQs7" className="cursor-auto">Join now</a>
    <a href="https://in.mathworks.com/" className="">Learn More</a>
  </div>
</div>
  );
}
