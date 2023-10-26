"use client";
import Link from "next/link";
import { useState } from "react";
import config from "../util/config.json"

const Header = () => {
  const [isMobileMenu, setIsMobileMenu] = useState<boolean>(false);
  const navigation = config.navigation;
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-100 p-6">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="fill-current w-8 h-8 mr-2"
        >
          <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
          <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
          <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
        </svg>

        <Link href="/" className="font-semibold text-xl tracking-tight hover:text-blue-ocean">
          ChrisBryann
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 text-black hover:text-gray-500"
          onClick={() => {
            setIsMobileMenu((prev) => !prev);
          }}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full ${
          isMobileMenu ? "block" : "hidden"
        } flex-grow lg:flex lg:items-center lg:w-auto lg:block`}
      >
        <div className="text-sm lg:flex-grow">
          {navigation.map((item: any, index: number) => (
            <Link
              key={index}
              href={`#${item.title}`}
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue-ocean mr-4"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
