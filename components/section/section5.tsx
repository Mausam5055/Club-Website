"use client";
import React, { useState } from 'react';
import TutoralComp from './tutoralComp';
import OverleafTutorial from './OverleafTutorial';
 // Import the component to render on "Overleaf Templates" click

export default function Section5() {
  const [selectedSection, setSelectedSection] = useState<string | null>('matlab');

  return (
    <div className="flex flex-col md:flex-row sm:flex-col relative lg:top-[-20] h-auto md:h-[55vh] p-4 md:p-6 items-center justify-center gap-4">
      {/* Text Content */}
      <div className="flex flex-col justify-center w-full md:w-[55vw] gap-y-4 md:gap-y-2 h-full mb-4 md:mb-0">
        
        {/* Tutorial Section */}
        <div
          className="border-l-red-500 hover:border-l-4 w-full h-auto md:h-full p-2 font-serif flex flex-col gap-y-4 cursor-pointer"
          onClick={() => setSelectedSection('matlab')}
        >
          <h2 className="text-base sm:text-xl font-serif font-semibold">
            Matlab Tutorials
          </h2>
          <p>
            Access a wide range of MATLAB tutorials created by club members and
            industry professionals to enhance your coding skills.
          </p>
        </div>

        {/* Templates Section */}
        <div
          className="border-l-red-500 hover:border-l-4 w-full h-auto md:h-full p-2 font-serif flex flex-col gap-y-4 cursor-pointer"
          onClick={() => setSelectedSection('overleaf')}
        >
          <h2 className="text-base sm:text-xl font-serif font-semibold">
            Overleaf Templates
          </h2>
          <p>
            Explore a collection of Overleaf templates for academic papers,
            presentations, and reports to streamline your document creation
            process.
          </p>
        </div>

        {/* Community Section */}
        <div
          className="border-l-red-500 hover:border-l-4 w-full h-auto md:h-full p-2 font-serif flex flex-col gap-y-4 cursor-pointer"
          onClick={() => setSelectedSection(null)} // Reset the selection or add another section if needed
        >
          <h2 className="text-base sm:text-xl font-serif font-semibold">
            Community Forum
          </h2>
          <p>
            Engage with like-minded individuals in our community forum to ask
            questions, share insights, and collaborate on projects related to
            MATLAB and Overleaf.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[45%] h-auto md:h-full">
        {selectedSection === 'matlab' && <TutoralComp />}
        {selectedSection === 'overleaf' && <OverleafTutorial />}
      </div>
    </div>
  );
}
