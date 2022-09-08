import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import { ChevronDownIcon } from "@heroicons/react/solid";
import vaslight from "../assets/images/Vaslight.svg";
import bulb from "../assets/images/bulb.svg";
import chip from "../assets/images/chip.svg";
import connect from "../assets/images/connect.svg";
import phone from "../assets/images/phone.svg";
import quote from "../assets/images/quote.svg";

import { GiAerialSignal } from "react-icons/gi";
import { FiChevronUp, FiChevronRight, FiTwitter } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

import {
  HiOutlineOfficeBuilding,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { BsEnvelope } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="">
      <div className="bg-[#0D3369]">
        <div className="bg-[#0D3369] bg-animated bg-cover h-fit w-full">
          <h1 className="text-white text-left mx-4 lg:mx-0 lg:pl-20 pt-14 pb-10 lg:py-28 font-extrabold text-3xl lg:text-7xl">
            We deliver sustainable
            <br /> values and first class IT <br /> solutions
          </h1>
          <h3 className="font-light text-xl lg:text-3xl xl:text-4xl mx-4 lg:mx-0 lg:pl-20 text-white">
            Our Solutions
          </h3>
          <div className="flex items-center">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between font-[350] text-[0.8rem] md:text-base gap-8 mb-28 mt-1 py-5 w-[73%] border-t-[1.5px] border-opacity-30 border-white mx-4 lg:ml-20 ">
              <div>
                <div className=" bg-gray-300 text-sm font-normal text-white bg-opacity-30 h-36 sm:h-32 w-full flex flex-col justify-center">
                  <p className="px-5">E-Procurement Solution (Ondo state)</p>
                </div>
                <div className="w-full h-6 bg-white"></div>
              </div>
              <div>
                <div className="bg-gray-300 text-sm font-normal text-white bg-opacity-30 h-36 sm:h-32 w-full flex flex-col justify-center">
                  <p className="px-5">
                    Application Video Conference (Replica of Zoom)
                  </p>
                </div>
                <div className="w-full h-6 bg-white"></div>
              </div>
              <div>
                <div className="bg-gray-300 text-sm font-normal text-white  bg-opacity-30 h-36 sm:h-32 w-full flex flex-col justify-center">
                  <p className="px-5">
                    Attendance and identity management Solutions (Oyo state)
                  </p>
                </div>
                <div className="w-full h-6 bg-white"></div>
              </div>
              <div>
                <div className="bg-gray-300 text-sm font-normal text-white  bg-opacity-30 h-36 sm:h-32 w-full flex flex-col justify-center">
                  <p className="px-5">VIOP and Extension to Mobile Phone</p>
                </div>
                <div className="w-full h-6 bg-white"></div>
              </div>
            </div>
            <div className=" h-28 px-3 sm:px-5 md:px-10 lg:pl-40 flex justify-center items-right mb-28 mt-1 pt-5">
              <a
                href="#value"
                className=" h-16 w-16 bg-white rounded-full flex flex-col items-center justify-center 
            hover:cursor-pointer transform hover:scale-[1.1] lg:hover:scale-125 transition duration-500 ease-in-out
            hover:bg-opacity-0 hover:border-[1.3px] group"
              >
                <p className=" pt-2 px-4 text-normal font-light text-[0.7rem] text-white hidden group-hover:block transform transition group-hover:duration-500 group-hover:ease-in-out">
                  Explore
                </p>
                <ChevronDownIcon className="w-5 h-5 text-[#0D3369] group-hover:text-white group-hover:w-5 group-hover:h-4 transform transition group-hover:duration-500 group-hover:ease-in-out" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        id="value"
        className="w-full h-fit flex flex-col items-center justify-center px-4 pt-5"
      >
        <h1 className="text-[#0D3369] font-bold text-2xl lg:text-4xl py-7 mt-10">
          Delivering Value
        </h1>
        <p className=" max-w-[39rem] text-center font-normal text-lg mb-20">
          Our focus is on developing a clear understanding of your needs and
          providing strategic, sustainable solution to enhance your business
          performance
        </p>
      </div>
      <div className="relative lg:pl-48 w-full h-96 -mb-20 z-10 ">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className=" bg-gray-400 w-full bg-about bg-cover bg-no-repeat min-h-[29rem] lg:h-[28rem] lg:w-4/5"></div>
          <div className=" w-full lg:h-[29rem] bg-[#0D3369]  text-white text-left py-6 px-4 lg:px-10 lg:flex lg:flex-col lg:items-center lg:justify-center  ">
            <h1 className=" font-bold text-2xl lg:text-4xl mb-6">About Us</h1>
            <p className="font-light text-[0.92rem] my-6 ">
              Vastech is an integrated IT solutions provider that uses leading
              technologies to deliver sustainable value to corporate and public
              sector organizations in Nigeria and West Africa. Our specialist
              teams leverage the power of information and communications
              technologies to connect, transform, improve and future-proof
              business
            </p>
            <p className="font-light text-sm">
              We support our clients throughout their digital journey. With a
              strong African footprint, the company is recognised for its
              in-depth knowledge, ethical practices and service-oriented
              offering. Our "right first time" approach and attention to detail
              means the technology doesn't get in the way, but provides a strong
              and flexible foundation that supports your business.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-fit mt-[30rem] sm:mt-[20rem] lg:mt-10 pb-20 bg-[#32445C]">
        <div className=" h-fit mx-4 flex flex-col items-center text-white pt-32 justify-center">
          <h1 className=" font-bold text-2xl lg:text-4xl py-3 lg:py-7 mt-10">
            Our Services
          </h1>
          <p className=" max-w-[39rem] text-center font-light text-base lg:text-lg mb-16">
            Our service enables your success in an ever-changing business world
          </p>
        </div>
        <div className="flex flex-col lg:flex-row mx-4 lg:mx-40 gap-6 justify-center items-center text-white mb-6 lg:mb-16">
          <div className="w-full lg:h-52 2xl:h-full border-[1.5px] border-white p-4 flex flex-col gap-3">
            <GiAerialSignal className="w-10 h-10 lg:w-14 lg:h-14 p-2 text-blue-600 bg-[#32445C] -mt-9 lg:-mt-11 " />
            <h2 className="font-[900] text-xl">Connectivity</h2>
            <h4 className="text-left font-normal text-[0.8rem] text-gray-200">
              We provide high-speed, dedicated, broadband service that connects
              your office and enable device to the internet.
            </h4>
          </div>
          <div className="w-full lg:h-52 2xl:h-full border-[1.5px] border-white p-4 flex flex-col gap-3">
            <img
              src={connect}
              alt="connect"
              className="w-10 h-10 lg:w-14 lg:h-14 p-2 text-blue-500 bg-[#32445C] -mt-9 lg:-mt-11 "
            />
            <h2 className="font-[900] text-xl">Network Integration</h2>
            <h4 className="text-left font-normal text-[0.8rem] text-gray-200">
              Plan and deploy your LAN, WAN, WLAN, load balancing technologies,
              network management, network infrastructure with our integration
              services.
            </h4>
          </div>
          <div className="w-full lg:h-52 2xl:h-full border-[1.5px] border-white p-4 flex flex-col gap-3">
            <img
              src={chip}
              alt="chip"
              className="w-10 h-10 lg:w-14 lg:h-14 p-2 text-blue-500 bg-[#32445C] -mt-9 lg:-mt-11"
            />
            <h2 className="font-[900] text-xl">SOC</h2>
            <h4 className="text-left font-normal text-[0.8rem] text-gray-200">
              Our Automation services provides streamlined ways to meet the
              challanges of mobility, public services, and safety while
              promoting sustainability.
            </h4>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mx-4 lg:mx-40 gap-6 justify-center items-center text-white">
          <div className="w-full lg:h-52 2xl:h-full border-[1.5px] border-white p-4 flex flex-col gap-3">
            <img
              src={bulb}
              alt="bulb"
              className="w-10 h-10 lg:w-14 lg:h-14 p-2 text-blue-500 bg-[#32445C] -mt-9 lg:-mt-11 "
            />
            <h2 className="font-[900] text-xl">Vas Solutions</h2>
            <h4 className="text-left font-normal text-[0.8rem] text-gray-200">
              We provide end to end value added service in partnership with
              major TELCO operators. With relevant content based service over
              SMS, USSD and WAP.
            </h4>
          </div>
          <div className="w-full lg:h-52 2xl:h-full border-[1.5px] border-white p-4 flex flex-col gap-3">
            <HiOutlineOfficeBuilding className="w-10 h-10 lg:w-14 lg:h-14 p-2 text-blue-600 bg-[#32445C] -mt-9 lg:-mt-11 " />
            <h2 className="font-[900] text-xl">E-Government</h2>
            <h4 className="text-left font-normal text-[0.8rem] text-gray-200">
              Vastech provides turkey software solutions for medernization of
              public administration and implementation of the complete
              eGovernment solution.
            </h4>
          </div>
          <div className="w-full lg:h-52 2xl:h-full border-[1.5px] border-white p-4 flex flex-col gap-3">
            <img
              src={bulb}
              alt="bulb"
              className="w-10 h-10 lg:w-14 lg:h-14 p-2 text-blue-500 bg-[#32445C] -mt-9 lg:-mt-11 "
            />
            <h2 className="font-[900] text-xl">ECM Solution</h2>
            <h4 className="text-left font-normal text-[0.8rem] text-gray-200">
              Vastech incubator program help new and startup companies to
              develop by providing required support such as management, training
              or funding.
            </h4>
          </div>
        </div>
        <div className="w-full flex justify-center items-center py-16">
          <div
            onClick={() => {
              alert("In progress");
            }}
            className="flex gap-2 border-white text-white border-[1.5px] p-2"
          >
            <p>Learn More </p>
            <FiChevronUp className="w-5 h-5 mt-[0.2rem]" />
          </div>
        </div>
        <div className="relative lg:pr-48 w-full h-96 z-10 -mb-44">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className=" w-full h-full lg:h-[29rem] bg-[#0D3369] text-white text-left py-6 px-4 lg:px-20 lg:py-14 ">
              <h1 className=" font-bold text-2xl lg:text-4xl mb-6">
                First class IT Support
              </h1>
              <p className="font-light text-[0.92rem] my-5 ">
                Vastech is an integrated IT solutions provider that uses leading
                technologies to deliver sustainable value to corporate and
                public sector organizations in Nigeria and West Africa. Our
                specialist teams leverage the power of information and
                communications technologies to connect, transform, improve and
                future-proof business
              </p>
              <p className="font-light text-sm">
                We support our clients throughout their digital journey. With a
                strong African footprint, the company is recognised for its
                in-depth knowledge, ethical practices and service-oriented
                offering. Our "right first time" approach and attention to
                detail means the technology doesn't get in the way, but provides
                a strong and flexible foundation that supports your business.
              </p>
            </div>
            <div className=" bg-gray-400 bg-support bg-cover bg-no-repeat w-full min-h-[29rem] lg:h-[28rem] lg:w-4/5"></div>
          </div>
        </div>
      </div>
      <div className="border-y-[1.5px] lg:mx-40 py-16 mt-[40rem] sm:mt-[30rem] lg:mt-60 text-[#0D3369] ">
        <div className="mx-4 md:mx-10 lg:mx-20  xl:mx-32  flex flex-col lg:flex-row gap-3 lg:gap-14 justify-center items-center ">
          <h1 className="font-bold text-2xl lg:text-4xl">
            Unlocking Innovations
          </h1>
          <p className="w-full font-normal  ">
            Vastech startup program focuses on technology investment and
            incubation designed to support innovation idea-stage business grow
            from ideas to viable product/services across Nigeria with funding,
            mentorship and trainings. This program plays a vital role in
            accomplishing the vision that we have at Vastech at a bigger scale;
            to spur job growth and enhance the benefits we bring to the
            communities.
          </p>
        </div>
      </div>
      <div className="w-full h-fit text-center text-[#0D3369]">
        <h1 className=" font-bold text-2xl lg:text-4xl pt-12 lg:mt-14 lg:py-7 ">
          Clients Stories
        </h1>
        <div className="h-[21rem] bg-[#32445C] my-4 mx-4 lg:mx-52">
          <Swiper
            cssMode={true}
            navigation={true}
            mousewheel={true}
            keyboard={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Mousewheel, Pagination, Keyboard, Autoplay]}
            className="w-full h-full"
          >
            <SwiperSlide className="bg-[#32445c]">
              <div className="bg-[#0D3369] text-gray-100 lg:mx-[9%] h-full">
                <div className="flex justify-center items-center h-full gap-2 mx-4">
                  <div className="mr-2 flex-none h-fit sm:-mt-20 -mt-40 lg:-mt-20">
                    <img
                      src={quote}
                      alt="quote"
                      className="w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 mr-3 opacity-60 "
                    />
                  </div>
                  <div className="flex flex-col items-start gap-5">
                    <div className="flex gap-3 ">
                      <div className="w-14 h-14 bg-white bg-ceo bg-cover rounded-full "></div>
                      <div className="flex flex-col text-left items-start ">
                        <h1 className="font-bold text-lg">
                          Shamsudeen Garba Gumau
                        </h1>
                        <div>
                          <p className="font-sans font-light text-[0.8rem] text-gray-200">
                            Imaas Solutions UI/UX Designer
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-[90%] lg:w-[30rem] ">
                      <p className="font-sans italic font-light text-[0.85rem] text-gray-200 text-left">
                        "We can't understand how we've been living without
                        Vastech. Thank you for making it painless, pleasant and
                        most of all hassle free! I am so pleased with their
                        Services"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-[#32445c]">
              <div className="bg-[#0D3369] text-gray-100 lg:mx-[9%] h-full">
                <div className="flex justify-center items-center h-full gap-2 mx-4">
                  <div className="ml-2 flex-none h-fit sm:-mt-20 -mt-40 lg:-mt-20">
                    <img
                      src={quote}
                      alt="quote"
                      className="w-10 h-10 lg:w-16 lg:h-16 xl:w-20 xl:h-20 mr-3 opacity-60 "
                    />
                  </div>
                  <div className="flex flex-col items-start gap-5">
                    <div className="flex gap-3 ">
                      <div className="w-14 h-14 bg-white bg-ceo bg-cover rounded-full "></div>
                      <div className="flex flex-col text-left items-start ">
                        <h1 className="font-bold text-lg">
                          Abdulmajeed Hameed
                        </h1>
                        <div>
                          <p className="font-sans font-light text-[0.8rem] text-gray-200">
                            Imaas Solutions Frontend Engineer
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-[90%] lg:w-[30rem] ">
                      <p className="font-sans italic font-light text-[0.85rem] text-gray-200 text-left">
                        "We can't understand how we've been living without
                        Vastech. Thank you for making it painless, pleasant and
                        most of all hassle free! I am so pleased with their
                        Services"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-[#32445c]">
              <div className="bg-[#0D3369] text-gray-100 lg:mx-[9%] h-full">
                <div className="flex justify-center items-center h-full gap-2 mx-4">
                  <div className="mr-2 flex-none h-fit sm:-mt-20 -mt-40 lg:-mt-20">
                    <img
                      src={quote}
                      alt="quote"
                      className="w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 mr-3 opacity-60 "
                    />
                  </div>
                  <div className="flex flex-col items-start gap-5">
                    <div className="flex gap-3 ">
                      <div className="w-14 h-14 bg-white bg-ceo bg-cover rounded-full "></div>
                      <div className="flex flex-col text-left items-start ">
                        <h1 className="font-bold text-lg">
                          Isa Alhaji Muhammed
                        </h1>
                        <div>
                          <p className="font-sans font-light text-[0.8rem] text-gray-200">
                            CEO Imaas Solutions
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-[90%] lg:w-[30rem] ">
                      <p className="font-sans italic font-light text-[0.85rem] text-gray-200 text-left">
                        "We can't understand how we've been living without
                        Vastech. Thank you for making it painless, pleasant and
                        most of all hassle free! I am so pleased with their
                        Services"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="my-10 lg:my-20 border-y-[1.5px] mx-4 lg:mx-40 text-[#32445c]">
          <h2 className="mx-4 md:mx-8 xl:mx-40 mt-10 lg:mt-14 font-[600] text-2xl xl:text-3xl text-left md:text-center">
            Ready to take your business to the next level with our unbeatable IT
            solutions? Make sales enquiry now.
          </h2>
          <div className="w-full flex justify-center items-center pb-12 lg:pb-16 pt-10">
            <div
              onClick={() => {
                alert();
              }}
              className="flex gap-2 justify-center items-center bg-[#1B73E8] text-white pl-5 pr-4 py-3 text-sm font-normal"
            >
              <p className="font-[600] text-[0.85rem]">Make Enquiry</p>
              <FiChevronRight className="w-5 h-5 mt-[0.2rem]" />
            </div>
          </div>
        </div>
        <div className="w-full h-full lg:h-96 bg-[#32445c] relative">
          <div className="flex flex-col lg:flex-row">
            <div className="flex w-full lg:w-[70%] xl:w-2/3 justify-around gap-20 md:gap-64 lg:gap-36 xl:gap-[2%] sm:pl-20 pl-5 pt-10">
              <div className="text-white w-full lg:w-72 h-full flex flex-col gap-8 items-start justify-center">
                <h2 className="-mb-3 text-sm font-bold">Contact Info</h2>

                <div className="flex gap-4">
                  <HiOutlineLocationMarker className="w-7 h-7 text-white" />
                  <p className="font-thin text-sm text-left">
                    63 Ademola Adetokumbo Crescent, Wuse II, Abuja
                  </p>
                </div>

                <div className="flex gap-4">
                  <img
                    src={phone}
                    alt="phone"
                    className="w-4 h-4 lg:w-5 lg:h-5 text-white"
                  />
                  <p className="font-thin text-sm text-left">
                    +234 808 071 9284
                  </p>
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
                <div className="flex gap-5">
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
          <a
            href="#home"
            className=" hover:cursor-pointer w-16 h-16 bg-white rounded-full absolute right-5 bottom-10 lg:bottom-20 lg:right-24 flex justify-center items-center bg-opacity-10 hover:bg-opacity-20"
          >
            <FiChevronUp className="text-white w-6 h-6" />
          </a>
        </div>
        <div className="h-16 w-full bg-[#0D3369] flex justify-center items-center">
          <p className="font-sans font-light text-[0.8rem] text-gray-200">
            Copyright &copy; 2022, all right reserved to Vastech Ltd.
          </p>
        </div>
      </div>
    </div>
  );
}
