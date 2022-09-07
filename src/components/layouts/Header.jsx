import React from "react";
import raxi from "../../assets/images/raxii.png";

import HandBugger from "../HandBugger";

export default function Header() {
  return (
    <>
      <div className=" bg-white lg:hidden fixed w-full z-50">
        <div className="mx-4 my-2">
          <div className="flex flex-row justify-between items-center bg-white bg-opacity-90 md:w-3/4 mx-auto lg:hidden">
            <img src={raxi} alt="logo" className="mx-1 w-8 h-8 lg:hidden" />
            <HandBugger />
          </div>
        </div>
      </div>

      <div className="hidden fixed w-screen mx-auto lg:block bg-white backdrop-blur-[3px] bg-opacity-90 h-16 z-50">
        <div className="text-[#0D3369] mx-[6%] flex flex-row justify-between items-center h-full border-b-[1px]">
          <div className="flex flex-col items-center justify-center">
            <div className="justify-items-start font-bold text-2xl leading-5">
              <h1>VASTECH</h1>
            </div>
            <p className=" text-[0.65rem]">Your values we drive IT</p>
          </div>
          <div className="flex flex-row gap-0 lg:gap-9 justify-end">
            <div className=" hover:cursor-pointer flex items-center transform hover:scale-[1.1] lg:hover:scale-125 transition duration-500 ease-in-out">
              <a href="/" className="text-[#0D3369]  font-medium">
                Home
              </a>
            </div>
            <div className=" hover:cursor-pointer flex  items-center transform hover:scale-[1.1] lg:hover:scale-125 transition duration-500 ease-in-out">
              <a href="/" className="text-[#0D3369]  font-medium">
                About
              </a>
            </div>
            <div className=" hover:cursor-pointer flex items-center  transform hover:scale-[1.1] lg:hover:scale-125 transition duration-500 ease-in-out">
              <a href="/" className="text-[#0D3369]  font-medium">
                Services
              </a>
            </div>
            <div className=" hover:cursor-pointer flex items-center transform hover:scale-[1.1] lg:hover:scale-125 transition duration-500 ease-in-out">
              <a href="/" className="text-[#0D3369]  font-medium">
                Client Stories
              </a>
            </div>
            <div className="hover:cursor-pointer flex items-center transform hover:scale-[1.1] lg:hover:scale-125 transition duration-500 ease-in-out">
              <a href="/" className="text-[#0D3369]  font-medium">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-blue-100 h-16 w-full"></div>
    </>
  );
}
