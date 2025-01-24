import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center  gap-4 h-screen md:h-[60vh] text-center px-4 border-b-2">
      {/* Background Images */}
      
      <Image
        className="absolute left-0 w-[50vw] h-full object-cover opacity-80 z-[-1]"
        src="/images/matlab.png"
        alt="MATLAB illustration"
        width={1400}
        height={1400}
        priority
      />
      <Image
        className="absolute right-0 w-[50vw] h-full object-cover opacity-80 z-[-1]"
        src="/images/overleaf2.png"
        alt="Overleaf illustration"
        width={1400}
        height={1400}
        priority
      />

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold font-serif bg-gradient-to-r from-blue-700 via-green-600 to-purple-700 bg-clip-text text-transparent">
  Welcome to the MATLAB and Overleaf
</h1>
<h2 className="text-4xl md:text-5xl font-extrabold font-serif bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">
  Club!
</h2>
      {/* Description */}
      <p className="text-lg md:text-xl font-medium font-serif max-w-2xl">
        Join us in exploring the world of MATLAB and Overleaf, where knowledge
        sharing and collaboration thrive.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <a
          href="https://forms.gle/KxZrPb5P1ySvwFQs7"
          className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Now
        </a>
        <a
          href="https://in.mathworks.com/"
          className="bg-gray-100 text-gray-700 py-2 px-6 rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
