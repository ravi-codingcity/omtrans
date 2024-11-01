import React, { useState } from "react";
import logo from "../assets/omtrans_logo.png";
import { IoIosArrowDown } from "react-icons/io";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [serivcesdropdown, servicessetDropdown] = useState(false);

  const navigate = useNavigate();

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const servicestoggleDropdown = () => {
    servicessetDropdown(!serivcesdropdown);
  };

  return (
    <div>
      <div>
        <div className="flex flex-wrap items-center justify-between text-4xl text-black cursor-pointer sm:hidden px-4">
          <NavLink to="/">
            <img src={logo} alt="" className="w-24 py-3" />
          </NavLink>
          {showNav ? (
            <RxCross2 onClick={toggleNav} />
          ) : (
            <GiHamburgerMenu onClick={toggleNav} />
          )}
        </div>
      </div>

      <div
        className={`absolute max-w-screen-xl m-auto w-full sm:static sm:flex sm:justify-around items-center text-black bg-slate-100 sm:bg-white sm:text-base text-base font-medium	 z-10  ${
          showNav ? "block duration-300" : "hidden "
        } sm:block`}
      >
        <div>
          {showNav ? (
            ""
          ) : (
            <NavLink to="/">
              <img src={logo} alt="" className="w-28 py-3" />
            </NavLink>
          )}
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 p-5 sm:p-0">
          <NavLink
            to="/"
            className="relative pb-1 px-2 hover:border-b-1 border-[#ff2b2b] transition-all duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#ff2b2b] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
          >
            Home
          </NavLink>
          <div
            className="relative"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <div className="relative pb-1 px-2 my-3 hover:border-b-1 border-[#ff2b2b] transition-all duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#ff2b2b] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 cursor-pointer flex items-center ">
              About <IoIosArrowDown className="pl-1 text-xl" />
            </div>
            <ul
              className={`sm:absolute  bg-[#091242] text-white w-36 z-50 text-base rounded-md ${
                dropdown ? "block " : "hidden  "
              }`}
            >
              <NavLink to="/About_us">
                <li className="px-4 py-2 hover:bg-[#ff2b2b] duration-200">
                  About Us
                </li>
              </NavLink>
              <NavLink to="/network">
                <li className="px-4 py-2 hover:bg-[#ff2b2b] duration-200">
                  Our Network
                </li>
              </NavLink>
            </ul>
          </div>
          <div
            className="relative"
            onMouseEnter={servicestoggleDropdown}
            onMouseLeave={servicestoggleDropdown}
          >
            <div className="relative pb-1 px-2 my-3 hover:border-b-1 border-[#ff2b2b] transition-all duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#ff2b2b] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 cursor-pointer flex  items-center ">
              Services <IoIosArrowDown className="pl-1 text-xl" />
            </div>
            <ul
              className={`sm:absolute  bg-[#091242] text-white w-48 z-50 text-base rounded-md ${
                serivcesdropdown ? "block" : "hidden"
              }`}
            >
              <NavLink to="/freight_forwarding">
                <li className="px-4 py-2 hover:bg-[#ff2b2b] duration-200">
                  Freight Forwarding
                </li>
              </NavLink>

              <NavLink to="/supply_chain_management">
                <li className="px-4 py-2 hover:bg-[#ff2b2b] duration-200">
                  Supply Chain Management
                </li>
              </NavLink>

              <NavLink to="/project_cargo_ODC_handle">
                <li className="px-4 py-2 hover:bg-[#ff2b2b] duration-200">
                  Project Cargo & ODC Handle
                </li>
              </NavLink>

              <NavLink to="/warehouse_distributation">
                <li className="px-4 py-2 hover:bg-[#ff2b2b] duration-200">
                  Warehouse & Distribution
                </li>
              </NavLink>

              <NavLink to="/customs_brokerage_services">
                <li className="px-4 py-2 hover:bg-[#ff2b2b] duration-200">
                  Customs Brokerage (Air & Sea)
                </li>
              </NavLink>
            </ul>
          </div>

          <NavLink
            to="/sustainability"
            className="relative pb-1 px-2 hover:border-b-1 border-[#ff2b2b] transition-all duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#ff2b2b] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
          >
            Sustainability
          </NavLink>

          <NavLink
            to="/News"
            className="relative pb-1 px-2 hover:border-b-1 border-[#ff2b2b] transition-all duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#ff2b2b] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
          >
            News
          </NavLink>

          <NavLink
            to="/contact-us"
            className="relative pb-1 px-2 hover:border-b-1 border-[#ff2b2b] transition-all duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#ff2b2b] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
          >
            Contact
          </NavLink>
          <button className="bg-red-600 text-white py-3 sm:py-2 px-4 rounded-md hover:bg-[#910b0f]  sm:hidden">
            Request Quote
          </button>
        </div>
        <div className="flex items-center space-x-8 px-5 sm:px-0 pb-8 sm:pb-0 justify-center ">
          <div className="flex space-x-2 text-3xl sm:text-2xl">
            <a
              href="https://www.instagram.com/omtransltd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-red-600 cursor-pointer duration-200 hover:scale-110" />
            </a>
            <a
              href="https://www.facebook.com/omtrans/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-blue-600 cursor-pointer duration-200 hover:scale-110" />
            </a>
            <a
              href="https://in.pinterest.com/om_trans_logistic/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPinterest className="text-red-600 cursor-pointer duration-200 hover:scale-110" />
            </a>
            <a
              href="https://www.linkedin.com/company/om-trans-logistics-limited/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-blue-600 cursor-pointer duration-200 hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
