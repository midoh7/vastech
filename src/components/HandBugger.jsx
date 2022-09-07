import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import {
  SparklesIcon,
  MenuIcon,
  ClipboardListIcon,
  UsersIcon,
  InformationCircleIcon,
  TrendingUpIcon,
  MailIcon,
} from "@heroicons/react/solid";

const arr = [
  {
    name: "About Us",
    icon: UsersIcon,
  },
  {
    name: "What we do",
    icon: SparklesIcon,
  },
  {
    name: "Vission",
    icon: TrendingUpIcon,
  },
  {
    name: "Mission",
    icon: ClipboardListIcon,
  },
  {
    name: "Contact Us",
    icon: MailIcon,
  },
];

export default function Example() {
  return (
    <div className="w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className=" inline-flex justify-center w-full py-2 text-sm font-medium focus:outline-none  focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <MenuIcon
              className="w-9 h-9 text-blue-900 hover:text-blue-900 hover:text-opacity-80"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-300"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-[1000]">
            {arr.map((el, i) => {
              return (
                <div key={i} className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-blue-500 text-white" : "text-blue-900"
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm `}
                      >
                        {
                          <el.icon
                            className="w-5 h-5 mr-2 text-blue-400 group-hover:text-white"
                            aria-hidden="true"
                          />
                        }
                        {el.name}
                      </button>
                    )}
                  </Menu.Item>
                </div>
              );
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
