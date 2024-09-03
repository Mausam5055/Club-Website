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
                  src={"/images/water.jpg"}
                  alt="profile"
                  className="h-12 w-12 rounded-full bg-gray-300"
                />
                <div className="flex flex-col">
                  <div className="text-lg font-serif font-semibold">
                    Name
                  </div>
                  <div className="text-sm font-serif font-light">
                    Position
                  </div>
                </div>
              </div>
              <div className="line-clamp-3 m-2 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reiciendis voluptates quibusdam optio. Nisi, nihil at
                pariatur recusandae est exercitationem veli.
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
                  src={"/images/water.jpg"}
                  alt="profile"
                  className="h-12 w-12 rounded-full bg-gray-300"
                />
                <div className="flex flex-col">
                  <div className="text-lg font-serif font-semibold">
                    Name
                  </div>
                  <div className="text-sm font-serif font-light">
                    Position
                  </div>
                </div>
              </div>
              <div className="line-clamp-3 m-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reiciendis voluptates quibusdam optio. Nisi, nihil at
                pariatur recusandae est exercitationem veli.
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
                  src={"/images/water.jpg"}
                  alt="profile"
                  className="h-12 w-12 rounded-full bg-gray-300"
                />
                <div className="flex flex-col">
                  <div className="text-lg font-serif font-semibold">
                    Name
                  </div>
                  <div className="text-sm font-serif font-light">
                    Position
                  </div>
                </div>
              </div>
              <div className="line-clamp-3 m-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reiciendis voluptates quibusdam optio. Nisi, nihil at
                pariatur recusandae est exercitationem veli.
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
                  src={"/images/water.jpg"}
                  alt="profile"
                  className="h-12 w-12 rounded-full bg-gray-300"
                />
                <div className="flex flex-col">
                  <div className="text-lg font-serif font-semibold">
                    Name
                  </div>
                  <div className="text-sm font-serif font-light">
                    Position
                  </div>
                </div>
              </div>
              <div className="line-clamp-3 m-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reiciendis voluptates quibusdam optio. Nisi, nihil at
                pariatur recusandae est exercitationem veli.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}