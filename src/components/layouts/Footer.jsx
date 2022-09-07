import React from "react";
import raxi from "../../assets/images/raxii.png";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";

export default function Footer() {
  const footerNavs = [
    {
      href: "/",
      name: "About",
    },
    {
      href: "/",
      name: "Blog",
    },

    {
      href: "/",
      name: "Team",
    },
    {
      href: "/",
      name: "Careers",
    },

    {
      href: "/",
      name: "Support",
    },
  ];
  return (
    <footer className=" text-slate-300 bg-[#112553] px-4 py-5 xl:w-full md:w-3/4 mx-auto">
      <div className="max-w-lg sm:mx-auto sm:text-center">
        <img
          src={raxi}
          className="w-12 p-[0.13rem] pl-1 border-2 border-blue-400 rounded-full border-dotted sm:mx-auto"
        />
        <p className="leading-relaxed mt-2 text-[15px]">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </div>
      <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
        {footerNavs.map((item, id) => (
          <li key={id} className=" hover:text-blue-400">
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
      <div className="mt-8 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; 2022 RaxiTech All rights reserved.
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a href="/">
                <FaTwitter className="w-6 h-6  text-blue-400" />
              </a>
            </li>

            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a href="/">
                <FaFacebookF className="w-6 h-6  text-blue-700" />
              </a>
            </li>

            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a href="/">
                <FaPinterestP className="w-6 h-6  text-red-600" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
