import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import { MenuIcon, XIcon } from "@heroicons/react/outline";
import cloudy from "../assets/cloudy.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <div className="flex items-center">
            <img
              src={cloudy}
              alt="Cloudy Logo"
              className="h-12 sm:h-16 md:h-12 lg:h-16 w-auto"
            />
          </div>

          <ul className="hidden md:flex space-x-4">
            <li>
              <Link
                to="home"
                smooth={true}
                offset={500}
                duration={500}
                className="cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                offset={-200}
                duration={500}
                className="cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="support"
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer"
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                to="platforms"
                smooth={true}
                offset={-100}
                duration={500}
                className="cursor-pointer"
              >
                Platforms
              </Link>
            </li>
            <li>
              <Link
                to="pricing"
                smooth={true}
                offset={-50}
                duration={500}
                className="cursor-pointer"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4 space-x-4">
          <button className="border-none bg-transparent text-black hover:text-indigo-600 cursor-pointer">
            Sign In
          </button>
          <button className="px-8 py-3 bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer">
            Sign Up
          </button>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? (
            <MenuIcon className="w-5 cursor-pointer" />
          ) : (
            <XIcon className="w-5 cursor-pointer" />
          )}
        </div>
      </div>

      <ul
        className={
          !nav ? "hidden" : "absolute bg-zinc-200 w-full px-8 space-y-4"
        }
      >
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="home"
            smooth={true}
            offset={500}
            duration={500}
            className="cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="about"
            smooth={true}
            offset={-200}
            duration={500}
            className="cursor-pointer"
          >
            About
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="support"
            smooth={true}
            offset={50}
            duration={500}
            className="cursor-pointer"
          >
            Support
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="platforms"
            smooth={true}
            offset={-100}
            duration={500}
            className="cursor-pointer"
          >
            Platforms
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="pricing"
            smooth={true}
            offset={-50}
            duration={500}
            className="cursor-pointer"
          >
            Pricing
          </Link>
        </li>
        <div className="flex flex-col my-4 space-y-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4 hover:text-indigo-700 cursor-pointer">
            Sign In
          </button>
          <button className="px-8 py-3 bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer">
            Sign Up
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
