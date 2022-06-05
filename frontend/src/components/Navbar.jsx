// import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../App.css";
import logo from "../assets/images/logo.png";
// import { Transition } from "@headlessui/react";
import { FaRegBell } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlineHome, MdOutlinePersonOutline } from "react-icons/md";
import { RiBankLine } from "react-icons/ri";
import profile_image from "../assets/images/profile-image.png";

const Navbar = ({ user }) => {

  return (
    <>
      <div>
        <nav className="bg-white w-full flex items-center justify-between py-4 px-16 shadow-nav text-matic">
          <Link to="/">
            <div className="flex-shrink-0">
              <img src={logo} alt="Logo" />
            </div>
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex justify-center items-center space-x-4 text-matic">
              <Link to="/" className="hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-xs tracking-tight leading-3 font-bold flex justify-center items-center"><MdOutlineHome className='mr-[1px]' size='1.2em'/> Home</Link>
              <Link to="/" className="hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-xs tracking-tight leading-3 font-bold flex justify-center items-center"><RiBankLine className='mr-[2px]' size='1.2em'/> Transfer</Link>
              <Link to="/" className="hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-xs tracking-tight leading-3 font-bold flex justify-center items-center"><MdOutlinePersonOutline className='mr-[1px]' size='1.2em'/> About Us</Link>
              <Link to="/FAQs" className="hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-xs tracking-tight leading-3 font-bold">FAQs</Link>
              <Link to="/" className="hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-xs tracking-tight leading-3 font-bold">Support</Link>
              {
                (user)
                ?
                (
                  <>
                    <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium"><FaRegBell size='1.2em' /></Link>
                    <Link to="/" className="px-3 py-2 rounded-md font-bold flex justify-center items-center">
                      <div className='mr-1'>
                          <img src={profile_image} alt='Profile_Picture'/>
                      </div>
                      <FiChevronDown size='1.2em'/>
                    </Link>
                  </>
                )
                :
                (
                  <Link to="/login" className="hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-xs tracking-tight leading-3 font-bold">Login</Link>
                )
              }
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
