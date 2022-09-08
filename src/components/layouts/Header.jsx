import React from "react";
import vas from "../../assets/images/v.png";
import vasdark from "../../assets/images/Vasdark.svg";

import HandBugger from "../HandBugger";

export default function Header() {
  return (
    <div id="home">
      <div className=" bg-white lg:hidden fixed w-full z-50">
        <div className="mx-4 my-2">
          <div className="flex flex-row justify-between items-center bg-white bg-opacity-90 md:w-3/4 mx-auto lg:hidden">
            <img src={vas} alt="logo" className="mx-1 w-8 h-8 lg:hidden" />
            <HandBugger />
          </div>
        </div>
      </div>

      <div className="hidden fixed w-screen mx-auto lg:block bg-white backdrop-blur-[3px] bg-opacity-90 h-16 z-50">
        <div className="text-[#0D3369] mx-[6%] flex flex-row justify-between items-center h-full border-b-[1px]">
          <div className="flex flex-col items-center justify-center">
            {/* <div className="justify-items-start font-bold text-2xl leading-5">
              <h1>VASTECH</h1>
            </div>
            <p className=" text-[0.65rem]">Your values we drive IT</p> */}
            <img src={vasdark} alt="VASTECH" className="h-7" />
          </div>
          <div className="flex flex-row gap-0 lg:gap-9 justify-end text-[0.85rem]">
            <div className=" hover:cursor-pointer flex flex-col items-start justify-start group">
              <a href="/" className="text-[#0D3369] font-[550]">
                Home
              </a>
              <div className="-mt-[0.2rem] w-0 h-[0.2rem] bg-blue-500 lg:group-hover:w-full group-hover:transition duration-1000 ease-in-out"></div>
            </div>
            <div className=" hover:cursor-pointer flex flex-col items-start justify-start group">
              <a href="/" className="text-[#0D3369]  font-[550]">
                About
              </a>
              <div className="-mt-[0.2rem] w-0 h-[0.2rem] bg-blue-500 lg:group-hover:w-full group-hover:transition duration-1000 ease-in-out"></div>
            </div>
            <div className=" hover:cursor-pointer flex flex-col items-start justify-start group">
              <a href="/" className="text-[#0D3369]  font-[550]">
                Services
              </a>
              <div className="-mt-[0.2rem] w-0 h-[0.2rem] bg-blue-500 lg:group-hover:w-full group-hover:transition duration-1000 ease-in-out"></div>
            </div>
            <div className=" hover:cursor-pointer flex flex-col items-start justify-start group">
              <a href="/" className="text-[#0D3369]  font-[550]">
                Client Stories
              </a>
              <div className="-mt-[0.2rem] w-0 h-[0.2rem] bg-blue-500 lg:group-hover:w-full group-hover:transition duration-1000 ease-in-out"></div>
            </div>
            <div className=" hover:cursor-pointer flex flex-col items-start justify-start group">
              <a href="/" className="text-[#0D3369]  font-[550]">
                Contact Us
              </a>
              <div className="-mt-[0.2rem] w-0 h-[0.2rem] bg-blue-500 lg:group-hover:w-full group-hover:transition duration-1000 ease-in-out"></div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-blue-100 h-16 w-full"></div>
    </div>
  );
}
