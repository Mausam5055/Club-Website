import Image from "next/image";
import React from "react";

export default function Section4() {
  return (
    <div className="flex flex-col p-4 md:p-8 mt-[1.5rem] ">
      <div className="flex flex-col justify-center items-center gap-y-6">
        <div className="text-xl font-serif font-semibold flex items-center justify-center text-gray-900 dark:text-white">
          {" "}
          Testimonials{" "}
        </div>
        <p className="flex items-center justify-center w-full md:w-[50vw] text-center px-4 text-gray-800 dark:text-gray-200">
          {" "}
          I have learned so much from the MATLAB and Overleaf tutorials
          provided by the club. It has greatly improved my skills and efficiency
          in my work.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center mt-10 p-4 gap-x-6 gap-y-8">
        {/* First Column */}
        <div className="flex flex-col w-full md:w-[50vw] m-2 gap-y-12">
          {/* Testimonial Card 1 */}
          <div className="h-[20vh] p-4 rounded-md shadow-2xl bg-[#bbd891] dark:bg-[#94ab74] overflow-hidden">
            <div className="flex flex-col gap-y-2 p-2">
              <div className="flex flex-row items-center gap-x-2">
                <Image
                  width={1400}
                  height={1400}
                  src={"/images/Ayush.jpeg"}
                  alt="profile"
                  className="h-12 w-12 rounded-full bg-gray-300"
                />
                <div className="flex flex-col">
                  <div className="text-lg font-serif font-semibold text-gray-900 dark:text-gray-900">
                  Ayush Pandey
                  </div>
                  <div className="text-sm font-serif font-light text-gray-800 dark:text-gray-800">
                    Club Member
                  </div>
                </div>
              </div>
              <div className="line-clamp-3 m-2 text-gray-800 dark:text-gray-900">
                The MATLAB tutorials were incredibly helpful in getting me up to speed with numerical computing. I can now analyze data more efficiently thanks to the club.
              </div>
            </div>
          </div>

          {/* Testimonial Card 2 */}
          <div className="h-[20vh] p-4 overflow-hidden rounded-md shadow-2xl bg-[#bbd891] dark:bg-[#94ab74]">
            <div className="flex flex-col gap-y-2 p-2">
              <div className="flex flex-row items-center gap-x-2">
                <Image
                  width={1400}
                  height={1400}
                  src={"/images/Himanshu.jpeg"}
                  alt="profile"
                  className="h-12 w-12 rounded-full bg-gray-300"
                />
                <div className="flex flex-col">
                  <div className="text-lg font-serif font-semibold text-gray-900 dark:text-gray-900">
                    Himanshu Jha
                  </div>
                  <div className="text-sm font-serif font-light text-gray-800 dark:text-gray-800">
                    Club Member
                  </div>
                </div>
              </div>
              <div className="line-clamp-3 m-2 text-gray-800 dark:text-gray-900">
              Learning LaTeX with Overleaf through the club s tutorials was a game-changer for my academic writing. My reports and papers look so much more professional now! 
              </div>
            </div>
          </div>
        </div>

        {/* Second Column (Visible on Medium screens and above) */}
        <div className="flex flex-col w-full md:w-[50vw] m-2 gap-y-12">
          {/* Testimonial Card 3 */}
          <div className="h-[20vh] p-4 rounded-md shadow-2xl bg-[#bbd891] dark:bg-[#94ab74] overflow-hidden">
            <div className="flex flex-col gap-y-2 p-2">
              <div className="flex flex-row items-center gap-x-2">
                <Image
                  width={1400}
                  height={1400}
                  src={"/images/Khilesh.jpeg"}
                  alt="profile"
                  className="h-12 w-12 rounded-full bg-gray-300"
                />
                <div className="flex flex-col">
                  <div className="text-lg font-serif font-semibold text-gray-900 dark:text-gray-900">
                    Khilesh Bhangale
                  </div>
                  <div className="text-sm font-serif font-light text-gray-800 dark:text-gray-800">
                    Club Member
                  </div>
                </div>
              </div>
              <div className="line-clamp-3 m-2 text-gray-800 dark:text-gray-900">
                I used to struggle with formatting my research papers. The Overleaf tutorials from the club made the entire process so much easier and less time-consuming.
              </div>
            </div>
          </div>

          {/* Testimonial Card 4 */}
          <div className="h-[20vh] p-4 rounded-md shadow-2xl bg-[#bbd891] dark:bg-[#94ab74] overflow-hidden">
            <div className="flex flex-col gap-y-2 p-2">
              <div className="flex flex-row items-center gap-x-2">
                <Image
                  width={1400}
                  height={1400}
                  src={"/images/Abhinav.jpeg"}
                  alt="profile"
                  className="h-12 w-12 rounded-full bg-gray-300"
                />
                <div className="flex flex-col">
                  <div className="text-lg font-serif font-semibold text-gray-900 dark:text-gray-900">
                    Abhinav singh
                  </div>
                  <div className="text-sm font-serif font-light text-gray-800 dark:text-gray-800">
                    Club Member
                  </div>
                </div>
              </div>
              <div className="line-clamp-3 m-2 text-gray-800 dark:text-gray-900">
              The hands-on approach of the clubs MATLAB workshops really helped solidify my understanding. Im now confident using it for my projects and assignments. 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}