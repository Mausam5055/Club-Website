import Image from "next/image";
import React from "react";

export default function Section4() {
  return (
    <div className="flex flex-col p-8 mt-[1.5rem] ">
      <div className="flex flex-col justify-center items-center gap-y-6">
        <div className="text-xl font-serif font-semibold flex items-center justify-center">
          {" "}
          Testimonials{" "}
        </div>
        <p className="flex items-center justify-center w-[50vw] text-center">
          {" "}
          I have learned so much from the MATLAB and Overleaf tutorials provided
          by the club. It has greatly improved my skills and efficiency in my
          work.
        </p>
      </div>
      <div className="flex flex-row items-center mt-10  p-4 gap-x-6">
        <div className="flex flex-col w-[50vw] m-2 gap-y-12">
          <div className=" h-[20vh] p-4 rounded-md shadow-2xl bg-[#bbd891]">
            <div className="flex flex-col gap-y-2 p-2">
              <div className="flex flex-row items-center gap-x-2">
              <Image width={1400} height={1400} src={"/images/water.jpg"} alt="profile" className="h-12 w-12 rounded-full bg-gray-300"></Image>
                <div className="flex flex-col">
                  <div className="text-lg font-serif font-semibold">Name</div>
                  <div className="text-sm font-serif font-light">Position</div>
                </div>
              </div>
              <div className="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reiciendis voluptates quibusdam optio. Nisi, nihil at pariatur
                recusandae est exercitationem veli.
              </div>
            </div>
          </div>
          <div className=" h-[20vh] p-4 rounded-md shadow-2xl bg-[#bbd891]">
            <div className="flex flex-col gap-y-2 p-2">
              <div className="flex flex-row items-center gap-x-2">
                <Image width={1400} height={1400} src={"/images/water.jpg"} alt="profile" className="h-12 w-12 rounded-full bg-gray-300"></Image>
                <div className="flex flex-col">
                  <div className="text-lg font-serif font-semibold">Name</div>
                  <div className="text-sm font-serif font-light">Position</div>
                </div>
              </div>
              <div className="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reiciendis voluptates quibusdam optio. Nisi, nihil at pariatur
                recusandae est exercitationem veli.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[50vw] m-2 gap-y-12">
          <div className=" h-[20vh] p-4 rounded-md shadow-2xl bg-[#bbd891]">
            <div className="flex flex-col gap-y-2 p-2">
              <div className="flex flex-row items-center gap-x-2">
              <Image width={1400} height={1400} src={"/images/water.jpg"} alt="profile" className="h-12 w-12 rounded-full bg-gray-300"></Image>
                <div className="flex flex-col">
                  <div className="text-lg font-serif font-semibold">Name</div>
                  <div className="text-sm font-serif font-light">Position</div>
                </div>
              </div>
              <div className="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reiciendis voluptates quibusdam optio. Nisi, nihil at pariatur
                recusandae est exercitationem veli.
              </div>
            </div>
          </div>
          <div className=" h-[20vh] p-4 rounded-md shadow-2xl bg-[#bbd891]">
            <div className="flex flex-col gap-y-2 p-2">
              <div className="flex flex-row items-center gap-x-2">
              <Image width={1400} height={1400} src={"/images/water.jpg"} alt="profile" className="h-12 w-12 rounded-full bg-gray-300"></Image>
                <div className="flex flex-col">
                  <div className="text-lg font-serif font-semibold">Name</div>
                  <div className="text-sm font-serif font-light">Position</div>
                </div>
              </div>
              <div className="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reiciendis voluptates quibusdam optio. Nisi, nihil at pariatur
                recusandae est exercitationem veli.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
