import React from "react";
import { FiChevronUp, FiTwitter } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import phone from "../../assets/images/phone.svg";
import vaslight from "../../assets/images/Vaslight.svg";
import { BsEnvelope } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <>
      <div className="w-full h-full lg:h-96 bg-[#32445c] relative">
        <div className="flex flex-col lg:flex-row">
          <div className="flex w-full lg:w-[70%] xl:w-2/3 justify-around gap-5 ml-2 sm:ml-5 md:ml-0 md:gap-64 lg:gap-36 xl:gap-[2%] sm:pl-20 pl-5 pt-10">
            <div className="text-white w-full lg:w-72 h-full flex flex-col gap-8 items-start justify-center">
              <h2 className="-mb-3 text-sm font-bold">Contact Info</h2>

              <div className="flex gap-4">
                <HiOutlineLocationMarker className="w-7 h-7 text-white" />
                <p className="font-thin text-sm text-left">
                  63 Ademola Adetokumbo Crescent, Wuse II, Abuja
                </p>
              </div>

              <div className="flex gap-4">
                <img src={phone} alt="phone" className="w-4 h-4 text-white" />
                <p className="font-thin text-sm text-left">+234 808 071 9284</p>
              </div>

              <div className="flex gap-4">
                <BsEnvelope className="w-5 h-5 mt-1 text-white" />
                <p className="font-thin text-sm text-left">
                  info@vastech.com.ng support@vastech.com.ng
                </p>
              </div>
            </div>
            <div className="text-white w-full lg:w-60 h-full flex flex-col gap-5 items-start justify-center">
              <h2 className="-mb-3 text-sm font-bold">Quick Links</h2>

              <Link className="font-thin text-sm text-left" to="/">
                Home
              </Link>

              <Link className="font-thin text-sm text-left" to="/">
                About Us
              </Link>

              <Link className="font-thin text-sm text-left" to="/">
                services
              </Link>

              <Link className="font-thin text-sm text-left" to="/">
                Client Stories
              </Link>

              <Link className="font-thin text-sm text-left" to="/">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="text-white h-full flex flex-col gap-16 px-5 py-10 sm:p-20 lg:px-0 items-start justify-center">
            <div className="lg:mr-20">
              <h2 className=" text-sm text-left mb-5 font-bold">
                Social Links
              </h2>
              <div className="flex gap-5 opacity-90">
                <Link
                  className="p-2 border-white rounded-md border-[1px]"
                  to="/"
                >
                  <FaFacebookF className="w-4 h-4 text-white" />
                </Link>
                <Link
                  className="p-2 border-white rounded-md border-[1px]"
                  to="/"
                >
                  <FaInstagram className="w-4 h-4 text-white" />
                </Link>
                <Link
                  className="p-2 border-white rounded-md border-[1px]"
                  to="/"
                >
                  <FiTwitter className="w-4 h-4 text-white" />
                </Link>
                <Link
                  className="p-2 border-white rounded-md border-[1px]"
                  to="/"
                >
                  <FaWhatsapp className="w-4 h-4 text-white" />
                </Link>
                <Link
                  className="p-2 border-white rounded-md border-[1px]"
                  to="/"
                >
                  <GrLinkedinOption className="w-4 h-4 text-white" />
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <img src={vaslight} alt="VASTECH" className="h-7" />
            </div>
          </div>
        </div>
        <Link
          to="home"
          duration={300}
          smooth={true}
          className=" hover:cursor-pointer w-16 h-16 bg-white rounded-full absolute right-5 bottom-10 lg:bottom-20 lg:right-24 flex justify-center items-center bg-opacity-10 hover:bg-opacity-20"
        >
          <FiChevronUp className="text-white w-6 h-6" />
        </Link>
      </div>
      <div className="h-16 w-full bg-[#0D3369] flex justify-center items-center">
        <p className="font-sans font-light text-[0.8rem] text-gray-200">
          Copyright &copy; 2022, all right reserved to Vastech Ltd.
        </p>
      </div>
    </>
  );
}
