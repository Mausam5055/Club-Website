import Image from "next/image";
import React from "react";

export default function Section4() {
  return (
    <div className="flex flex-col p-4 md:p-8 mt-[1.5rem] ">
      <div className="flex flex-col justify-center items-center gap-y-6">
        <div className="text-xl font-serif font-semibold flex items-center justify-center">
          {" "}
          Testimonials{" "}
        </div>
        <p className="flex items-center justify-center w-full md:w-[50vw] text-center px-4">
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
          <div className="h-[20vh] p-4 rounded-md shadow-2xl bg-[#bbd891] overflow-hidden">
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
                  <div className="text-lg font-serif font-semibold">
                  Ayush Pandey
                  </div>
                  <div className="text-sm font-serif font-light">
                    Club Member
                  </div>
                </div>
              </div>
              <div className="line-clamp-3 m-2 ">
                The MATLAB tutorials were incredibly helpful in getting me up to speed with numerical computing. I can now analyze data more efficiently thanks to the club.
              </div>
            </div>
          </div>

          {/* Testimonial Card 2 */}
          <div className="h-[20vh] p-4 overflow-hidden rounded-md shadow-2xl bg-[#bbd891]">
            <div className="flex flex-col gap-y-2 p-2">
              <div className="flex flex-row items-center gap-x-2">
                <Image
                  width={1400}
                  height={1400}
                  src={"https://media.licdn.com/dms/image/v2/D4D03AQHcmgOH1C86ww/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1702583389715?e=1730937600&v=beta&t=dmex9TU0JglpQG0V34j3jLq4WAPEFE1htGGD7s2NckA"}
                  alt="profile"
                  className="h-12 w-12 rounded-full bg-gray-300"
                />
                <div className="flex flex-col">
                  <div className="text-lg font-serif font-semibold">
                    Himanshu Jha
                  </div>
                  <div className="text-sm font-serif font-light">
                    Club Member
                  </div>
                </div>
              </div>
              <div className="line-clamp-3 m-2">
              Learning LaTeX with Overleaf through the club s tutorials was a game-changer for my academic writing. My reports and papers look so much more professional now! 
              </div>
            </div>
          </div>
        </div>

        {/* Second Column (Visible on Medium screens and above) */}
        <div className="flex flex-col w-full md:w-[50vw] m-2 gap-y-12">
          {/* Testimonial Card 3 */}
          <div className="h-[20vh] p-4 rounded-md shadow-2xl bg-[#bbd891] overflow-hidden">
            <div className="flex flex-col gap-y-2 p-2">
              <div className="flex flex-row items-center gap-x-2">
                <Image
                  width={1400}
                  height={1400}
                  src={"/images/khilesh.jpeg"}
                  alt="profile"
                  className="h-12 w-12 rounded-full bg-gray-300"
                />
                <div className="flex flex-col">
                  <div className="text-lg font-serif font-semibold">
                    Khilesh Bhangale
                  </div>
                  <div className="text-sm font-serif font-light">
                    Club Member
                  </div>
                </div>
              </div>
              <div className="line-clamp-3 m-2">
                I used to struggle with formatting my research papers. The Overleaf tutorials from the club made the entire process so much easier and less time-consuming.
              </div>
            </div>
          </div>

          {/* Testimonial Card 4 */}
          <div className="h-[20vh] p-4 rounded-md shadow-2xl bg-[#bbd891] overflow-hidden">
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
                  <div className="text-lg font-serif font-semibold">
                    Abhinav singh
                  </div>
                  <div className="text-sm font-serif font-light">
                    Club Member
                  </div>
                </div>
              </div>
              <div className="line-clamp-3 m-2">
              The hands-on approach of the clubs MATLAB workshops really helped solidify my understanding. Im now confident using it for my projects and assignments. 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}