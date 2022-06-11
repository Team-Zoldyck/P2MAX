// import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../App.css";
import logo from "../assets/images/logo.png";
import { Transition } from "@headlessui/react";
import { FaRegBell } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlineHome, MdOutlinePersonOutline } from "react-icons/md";
import { RiBankLine } from "react-icons/ri";
import { BiWalletAlt } from "react-icons/bi";
import profile_image from "../assets/images/profile-image.png";
import { useState } from 'react';

const Navbar = ({ user }) => {

  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = () => {

    const closeNavbar = () => {
      (isOpen) && setIsOpen(false);
    }

    return(
      <>
        <Link onClick={closeNavbar} to="/" className="hover:text-[#41DC65] text-[#05377F] px-3 py-2 rounded-md text-xs tracking-tight leading-3 font-bold flex justify-center items-center"><MdOutlineHome className='mr-[1px]' size='1.2em'/> Home</Link>
        <Link onClick={closeNavbar} to="/transfer" className="hover:text-[#41DC65] text-[#05377F] px-3 py-2 rounded-md text-xs tracking-tight leading-3 font-bold flex justify-center items-center"><RiBankLine className='mr-[2px]' size='1.2em'/> Transfer</Link>
        {
          (user)
          ?
          (
            <Link onClick={closeNavbar} to="/wallet" className="hover:text-[#41DC65] text-[#05377F] px-3 py-2 rounded-md text-xs tracking-tight leading-3 font-bold flex justify-center items-center"><BiWalletAlt className='mr-[1px]' size='1.2em'/> Wallet</Link>
          )
          :
          (
            ''
          )
        }
        <Link onClick={closeNavbar} to="/about" className="hover:text-[#41DC65] text-[#05377F] px-3 py-2 rounded-md text-xs tracking-tight leading-3 font-bold flex justify-center items-center"><MdOutlinePersonOutline className='mr-[1px]' size='1.2em'/> About Us</Link>
        <Link onClick={closeNavbar} to="/faqs" className="hover:text-[#41DC65] text-[#05377F] px-3 py-2 rounded-md text-xs tracking-tight leading-3 font-bold">FAQs</Link>
        <Link onClick={closeNavbar} to="/support" className="hover:text-[#41DC65] text-[#05377F] px-3 py-2 rounded-md text-xs tracking-tight leading-3 font-bold">Support</Link>
        {
          (user)
          ?
          (
            <>
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium"><FaRegBell size='1.2em' /></Link>
              <Link to="/profile" className="px-3 py-2 rounded-md font-bold flex justify-center items-center">
                <div className='mr-1'>
                    <img src={profile_image} alt='Profile_Picture'/>
                </div>
                <FiChevronDown size='1.2em'/>
              </Link>
            </>
          )
          :
          (
            <Link onClick={closeNavbar} to="/login" className="hover:bg-[#41DC65] bg-[#2B54E4] text-[#fff] px-5 py-3 rounded-md text-xs tracking-tight leading-3 font-bold">Login</Link>
          )
        }
      </>
    )
  }



  return (
    <>
      <div>
        <nav className={`relative bg-white w-full ${(isOpen) ? 'h-screen py-20 justify-center items-start' : 'px-8 py-4 justify-between items-center'} flex  px-8 shadow-nav text-matic`}>
          <Link to="/">
            <div className={`flex-shrink-0 ${(isOpen) ? 'absolute top-4 left-8' : ''}`}>
              <img src={logo} alt="Logo" />
            </div>
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex justify-center items-center space-x-4 text-matic">
              <NavLinks />
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="absolute top-3 right-5 bg-white inline-flex items-center justify-center p-2 rounded-md text-matic focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-15"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-15"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          {/* </div>
          </div> */}

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className={`md:hidden w-screen h-1/2 ${(isOpen) ? 'flex justify-items-start items-center' : ''} `} id="mobile-menu">
              <div className="h-full w-full flex flex-col items-center justify-between px-2 pt-2 pb-3 space-y-1 sm:px-3 text-matic mobile">
                <NavLinks />
              </div>
            </div>
          </Transition>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
