import React from "react";
import vas from "../../assets/images/v.png";
import vasdark from "../../assets/images/Vasdark.svg";
import { Link } from "react-scroll";

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
            <img src={vasdark} alt="VASTECH" className="h-7" />
          </div>
          <div className="flex flex-row gap-0 lg:gap-9 justify-end text-[0.85rem]">
            <div className=" hover:cursor-pointer flex flex-col items-start justify-start group">
              <Link to="home" className="text-[#0D3369] font-[550]">
                Home
              </Link>
              <div className="-mt-[0.2rem] w-0 h-[0.2rem] bg-blue-500 lg:group-hover:w-full group-hover:transition duration-300 ease-in-out"></div>
            </div>
            <div className=" hover:cursor-pointer flex flex-col items-start justify-start group">
              <Link
                to="about"
                duration={300}
                offset={-65}
                smooth={true}
                className="text-[#0D3369]  font-[550]"
              >
                About
              </Link>
              <div className="-mt-[0.2rem] w-0 h-[0.2rem] bg-blue-500 lg:group-hover:w-full group-hover:transition duration-300 ease-in-out"></div>
            </div>
            <div className=" hover:cursor-pointer flex flex-col items-start justify-start group">
              <Link
                to="service"
                duration={300}
                offset={80}
                smooth={true}
                className="text-[#0D3369]  font-[550]"
              >
                Services
              </Link>
              <div className="-mt-[0.2rem] w-0 h-[0.2rem] bg-blue-500 lg:group-hover:w-full group-hover:transition duration-300 ease-in-out"></div>
            </div>
            <div className=" hover:cursor-pointer flex flex-col items-start justify-start group">
              <Link
                to="clients"
                duration={300}
                offset={-50}
                smooth={true}
                className="text-[#0D3369]  font-[550]"
              >
                Client Stories
              </Link>
              <div className="-mt-[0.2rem] w-0 h-[0.2rem] bg-blue-500 lg:group-hover:w-full group-hover:transition duration-300 ease-in-out"></div>
            </div>
            <div className=" hover:cursor-pointer flex flex-col items-start justify-start group">
              <Link
                to="/"
                duration={300}
                offset={65}
                smooth={true}
                className="text-[#0D3369]  font-[550]"
              >
                Contact Us
              </Link>
              <div className="-mt-[0.2rem] w-0 h-[0.2rem] bg-blue-500 lg:group-hover:w-full group-hover:transition duration-300 ease-in-out"></div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-blue-100 h-16 w-full"></div>
    </div>
  );
}
