import React, { useState } from "react";
import Bg_map from "../assets/bg_map.png";
import Goto from "../assets/goto.png";
import singapore_flag_icon from "../assets/singapore-flag-icon.png";
import south_korea_flag_icon from "../assets/south-korea-flag-icon.png";
import japan_flag_icon from "../assets/japan-flag-icon.png";
import taiwan_flag_icon from "../assets/taiwan-flag-icon.png";
import hongkong_flag_icon from "../assets/hong-kong-flag-icon.png";
import Navbar from "../Navbar/Navbar";
import BgImg from "../assets/our_services.jpg";
import TrackingForm from "../Components/TrackingForm";
import Footer from "../Footer/Footer";

const Network = () => {
  const [hoveredBox, setHoveredBox] = useState(null);

  const handleMouseOver = (boxNumber) => {
    setHoveredBox(boxNumber);
  };

  const handleMouseOut = () => {
    setHoveredBox(null);
  };

  return (
    <div>
      <Navbar />

      <div
        className="bg-no-repeat bg-center bg-cover "
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="flex sm:flex-row flex-col items-center justify-around sm:pt-24 pt-4 sm:pb-24 m-auto pb-10 w-[90%]">
          <div className="sm:w-3/5	w-full py-6">
            <p className="text-white sm:text-lg text-sm">OmTrans</p>
            <h1 className="text-white sm:text-[3.4vw] font-bold  leading-none text-4xl">
              Global Footprint
            </h1>
          </div>
          <div className="sm:w-2/5 h-40">
            
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="relative sm:h-[688px]  h-[250px] my-10">
          <div className="absolute left-[10%] right-[10%]">
            <img className="max-w-full h-auto" src={Bg_map} alt="World Map" />

            <img
              onMouseOver={() => handleMouseOver(1)}
              onMouseOut={handleMouseOut}
              className="absolute sm:h-5 sm:w-5 h-3 w-3 cursor-pointer right-[22%] bottom-[40%]"
              src={Goto}
              alt="Location 1"
            />
            <img
              onMouseOver={() => handleMouseOver(2)}
              onMouseOut={handleMouseOut}
              className="absolute sm:h-5 sm:w-5 h-3 w-3  cursor-pointer right-[15%] bottom-[56%]"
              src={Goto}
              alt="Location 2"
            />
            <img
              onMouseOver={() => handleMouseOver(3)}
              onMouseOut={handleMouseOut}
              className="absolute sm:h-5 sm:w-5 h-3 w-3  cursor-pointer right-[12%] bottom-[57%]"
              src={Goto}
              alt="Location 3"
            />
            <img
              onMouseOver={() => handleMouseOver(4)}
              onMouseOut={handleMouseOut}
              className="absolute sm:h-5 sm:w-5 h-3 w-3  cursor-pointer right-[19%] bottom-[50%]"
              src={Goto}
              alt="Location 4"
            />
            <img
              onMouseOver={() => handleMouseOver(5)}
              onMouseOut={handleMouseOut}
              className="absolute sm:h-5 sm:w-5 h-3 w-3  cursor-pointer right-[16.5%] bottom-[49%]"
              src={Goto}
              alt="Location 5"
            />

            <img
              onMouseOver={() => handleMouseOver(6)}
              onMouseOut={handleMouseOut}
              className="absolute sm:h-5 sm:w-5 h-3 w-3  cursor-pointer right-[22%] bottom-[56%]"
              src={Goto}
              alt="Location 6"
            />

            <img
              onMouseOver={() => handleMouseOver(7)}
              onMouseOut={handleMouseOut}
              className="absolute sm:h-5 sm:w-5 h-3 w-3  cursor-pointer top-[25%] left-[44%]"
              src={Goto}
              alt="Location 7"
            />

            {/* Info Boxes */}

            {/* Singapore */}

            {hoveredBox === 1 && (
              <div className="absolute sm:w-[230px] sm:h-[140px] w-[190px] h-[130px] sm:p-2.5 p-2 bg-blue-500 rounded-lg sm:right-[14%]  right-[3%] bottom-[50%] sm:bottom-[44%]">
                <p className="text-white sm:text-sm text-xs font-semibold flex items-center ">
                  <img
                    className="w-4 mr-2"
                    src={singapore_flag_icon}
                    alt="Singapore Flag"
                  />
                  OmTrans in Singapore
                </p>
                <p className="text-white sm:text-sm text-xs flex items-center ">
                  <svg
                    className="w-5 mr-2 text-red-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m18.4 14.8-1.2-1.3a1.7 1.7 0 0 0-2.4 0l-.7.7a1.7 1.7 0 0 1-2.4 0l-1.9-1.9a1.7 1.7 0 0 1 0-2.4l.7-.6a1.7 1.7 0 0 0 0-2.5L9.2 5.6a1.6 1.6 0 0 0-2.4 0c-3.2 3.2-1.7 6.9 1.5 10 3.2 3.3 7 4.8 10.1 1.6a1.6 1.6 0 0 0 0-2.4Z"
                    />
                  </svg>
                  +91-123456789
                </p>
                <p className="text-white sm:text-sm text-xs flex items-center ">
                  <svg
                    className="w-5 mr-2 text-red-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-width="2"
                      d="m3.5 5.5 7.9 6c.4.3.8.3 1.2 0l7.9-6M4 19h16c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H4a1 1 0 0 0-1 1v12c0 .6.4 1 1 1Z"
                    />
                  </svg>
                  info@omtrans.in
                </p>
                <p className="text-white sm:text-sm text-xs flex items-center ">
                  <svg
                    className="w-16 mr-2 text-red-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    />
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.8 14h0a7 7 0 1 0-11.5 0h0l.1.3.3.3L12 21l5.1-6.2.6-.7.1-.2Z"
                    />
                  </svg>
                  No. 17, Noble 1st street, Next to Engine Valves Ltd. Alandur,
                  Chennai - 600016
                </p>
              </div>
            )}

            {/* South Korea */}

            {hoveredBox === 2 && (
              <div className="absolute sm:w-[230px] sm:h-[140px] w-[190px] h-[130px] sm:p-2.5 p-2 bg-blue-500 rounded-lg right-[1%] bottom-[65%] sm:right-[7%] sm:bottom-[60%]">
                <p className="text-white sm:text-sm text-xs font-semibold flex items-center ">
                  <img
                    className="w-4 mr-2"
                    src={south_korea_flag_icon}
                    alt="Singapore Flag"
                  />
                  OmTrans in South Korea
                </p>
                <p className="text-white sm:text-sm text-xs flex items-center ">
                  <svg
                    className="w-5 mr-2 text-red-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m18.4 14.8-1.2-1.3a1.7 1.7 0 0 0-2.4 0l-.7.7a1.7 1.7 0 0 1-2.4 0l-1.9-1.9a1.7 1.7 0 0 1 0-2.4l.7-.6a1.7 1.7 0 0 0 0-2.5L9.2 5.6a1.6 1.6 0 0 0-2.4 0c-3.2 3.2-1.7 6.9 1.5 10 3.2 3.3 7 4.8 10.1 1.6a1.6 1.6 0 0 0 0-2.4Z"
                    />
                  </svg>
                  +91-123456789
                </p>
                <p className="text-white sm:text-sm text-xs flex items-center ">
                  <svg
                    className="w-5 mr-2 text-red-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-width="2"
                      d="m3.5 5.5 7.9 6c.4.3.8.3 1.2 0l7.9-6M4 19h16c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H4a1 1 0 0 0-1 1v12c0 .6.4 1 1 1Z"
                    />
                  </svg>
                  info@omtrans.in
                </p>
                <p className="text-white sm:text-sm text-xs flex items-center ">
                  <svg
                    className="w-16 mr-2 text-red-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    />
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.8 14h0a7 7 0 1 0-11.5 0h0l.1.3.3.3L12 21l5.1-6.2.6-.7.1-.2Z"
                    />
                  </svg>
                  No. 17, Noble 1st street, Next to Engine Valves Ltd. Alandur,
                  Chennai - 600016
                </p>
              </div>
            )}

            {/* Japan */}

            {hoveredBox === 3 && (
              <div className="absolute w-[230px] h-[150px] p-2.5 bg-blue-500 rounded-lg right-[6%] bottom-[61%]">
                <p className="text-white text-sm font-semibold flex items-center ">
                  <img
                    className="w-4 mr-2"
                    src={japan_flag_icon}
                    alt="Japan Flag"
                  />
                  OmTrans in Japan
                </p>
                <p className="text-white text-sm flex items-center ">
                  <svg
                    className="w-5 mr-2 text-red-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m18.4 14.8-1.2-1.3a1.7 1.7 0 0 0-2.4 0l-.7.7a1.7 1.7 0 0 1-2.4 0l-1.9-1.9a1.7 1.7 0 0 1 0-2.4l.7-.6a1.7 1.7 0 0 0 0-2.5L9.2 5.6a1.6 1.6 0 0 0-2.4 0c-3.2 3.2-1.7 6.9 1.5 10 3.2 3.3 7 4.8 10.1 1.6a1.6 1.6 0 0 0 0-2.4Z"
                    />
                  </svg>
                  +91-123456789
                </p>
                <p className="text-white text-sm flex items-center ">
                  <svg
                    className="w-5 mr-2 text-red-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-width="2"
                      d="m3.5 5.5 7.9 6c.4.3.8.3 1.2 0l7.9-6M4 19h16c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H4a1 1 0 0 0-1 1v12c0 .6.4 1 1 1Z"
                    />
                  </svg>
                  info@omtrans.in
                </p>
                <p className="text-white text-sm flex items-center ">
                  <svg
                    className="w-16 mr-2 text-red-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    />
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.8 14h0a7 7 0 1 0-11.5 0h0l.1.3.3.3L12 21l5.1-6.2.6-.7.1-.2Z"
                    />
                  </svg>
                  No. 17, Noble 1st street, Next to Engine Valves Ltd. Alandur,
                  Chennai - 600016
                </p>
              </div>
            )}

            {/* Hong Kong */}

            {hoveredBox === 4 && (
              <div className="absolute w-[230px] h-[150px] p-2.5 bg-blue-500 rounded-lg right-[11%] bottom-[54%]">
                <p className="text-white text-sm font-semibold flex items-center ">
                  <img
                    className="w-4 mr-2"
                    src={hongkong_flag_icon}
                    alt="Hong Kong Flag"
                  />
                  OmTrans in Hong Kong
                </p>
                <p className="text-white text-sm flex items-center ">
                  <svg
                    className="w-5 mr-2 text-red-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m18.4 14.8-1.2-1.3a1.7 1.7 0 0 0-2.4 0l-.7.7a1.7 1.7 0 0 1-2.4 0l-1.9-1.9a1.7 1.7 0 0 1 0-2.4l.7-.6a1.7 1.7 0 0 0 0-2.5L9.2 5.6a1.6 1.6 0 0 0-2.4 0c-3.2 3.2-1.7 6.9 1.5 10 3.2 3.3 7 4.8 10.1 1.6a1.6 1.6 0 0 0 0-2.4Z"
                    />
                  </svg>
                  +91-123456789
                </p>
                <p className="text-white text-sm flex items-center ">
                  <svg
                    className="w-5 mr-2 text-red-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-width="2"
                      d="m3.5 5.5 7.9 6c.4.3.8.3 1.2 0l7.9-6M4 19h16c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H4a1 1 0 0 0-1 1v12c0 .6.4 1 1 1Z"
                    />
                  </svg>
                  info@omtrans.in
                </p>
                <p className="text-white text-sm flex items-center">
                  <svg
                    className="w-16 mr-2 text-red-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    />
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.8 14h0a7 7 0 1 0-11.5 0h0l.1.3.3.3L12 21l5.1-6.2.6-.7.1-.2Z"
                    />
                  </svg>
                  No. 17, Noble 1st street, Next to Engine Valves Ltd. Alandur,
                  Chennai - 600016
                </p>
              </div>
            )}

            {/* Taiwan */}

            {hoveredBox === 5 && (
              <div className="absolute w-[230px] h-[140px] p-2.5 bg-blue-500 rounded-lg right-[9%] bottom-[54%]">
                <p className="text-white text-sm font-semibold flex items-center ">
                  <img
                    className="w-4 mr-2"
                    src={taiwan_flag_icon}
                    alt="Taiwan Flag"
                  />
                  OmTrans in Taiwan
                </p>
                <p className="text-white text-sm flex items-center">
                  <svg
                    className="w-5 mr-2 text-red-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m18.4 14.8-1.2-1.3a1.7 1.7 0 0 0-2.4 0l-.7.7a1.7 1.7 0 0 1-2.4 0l-1.9-1.9a1.7 1.7 0 0 1 0-2.4l.7-.6a1.7 1.7 0 0 0 0-2.5L9.2 5.6a1.6 1.6 0 0 0-2.4 0c-3.2 3.2-1.7 6.9 1.5 10 3.2 3.3 7 4.8 10.1 1.6a1.6 1.6 0 0 0 0-2.4Z"
                    />
                  </svg>
                  +91-123456789
                </p>
                <p className="text-white text-sm flex items-center ">
                  <svg
                    className="w-5 mr-2 text-red-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-width="2"
                      d="m3.5 5.5 7.9 6c.4.3.8.3 1.2 0l7.9-6M4 19h16c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H4a1 1 0 0 0-1 1v12c0 .6.4 1 1 1Z"
                    />
                  </svg>
                  info@omtrans.in
                </p>
                <p className="text-white text-sm flex items-center ">
                  <svg
                    className="w-16 mr-2 text-red-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    />
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.8 14h0a7 7 0 1 0-11.5 0h0l.1.3.3.3L12 21l5.1-6.2.6-.7.1-.2Z"
                    />
                  </svg>
                  No. 17, Noble 1st street, Next to Engine Valves Ltd. Alandur,
                  Chennai - 600016
                </p>
              </div>
            )}

            {/* China */}

            {hoveredBox === 6 && (
              <div className="absolute w-[230px] h-[140px] p-2.5 bg-blue-500 rounded-lg right-[14%] bottom-[61%]">
                <p className="text-white text-sm font-semibold flex items-center ">
                  <img
                    className="w-4 mr-2"
                    src={taiwan_flag_icon}
                    alt="Taiwan Flag"
                  />
                  OmTrans in China
                </p>
                <p className="text-white text-sm flex items-center ">
                  <svg
                    className="w-5  text-red-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m18.4 14.8-1.2-1.3a1.7 1.7 0 0 0-2.4 0l-.7.7a1.7 1.7 0 0 1-2.4 0l-1.9-1.9a1.7 1.7 0 0 1 0-2.4l.7-.6a1.7 1.7 0 0 0 0-2.5L9.2 5.6a1.6 1.6 0 0 0-2.4 0c-3.2 3.2-1.7 6.9 1.5 10 3.2 3.3 7 4.8 10.1 1.6a1.6 1.6 0 0 0 0-2.4Z"
                    />
                  </svg>
                  +91-123456789
                </p>
                <p className="text-white text-sm flex items-center">
                  <svg
                    className="w-5 mr-2 text-red-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-width="2"
                      d="m3.5 5.5 7.9 6c.4.3.8.3 1.2 0l7.9-6M4 19h16c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H4a1 1 0 0 0-1 1v12c0 .6.4 1 1 1Z"
                    />
                  </svg>
                  info@omtrans.in
                </p>
                <p className="text-white text-sm flex items-center ">
                  <svg
                    className="w-16 mr-2 text-red-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    />
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.8 14h0a7 7 0 1 0-11.5 0h0l.1.3.3.3L12 21l5.1-6.2.6-.7.1-.2Z"
                    />
                  </svg>
                  No. 17, Noble 1st street, Next to Engine Valves Ltd. Alandur,
                  Chennai - 600016
                </p>
              </div>
            )}

            {/* UK */}

            {hoveredBox === 7 && (
              <div className="absolute sm:w-[230px] sm:h-[140px] w-[190px] h-[130px] sm:p-2.5 p-2 bg-blue-500 rounded-lg top-[-38%] right-[32%] sm:top-[1%] sm:right-[45%] ">
                <p className="text-white text-sm font-semibold flex items-center ">
                  <img
                    className="w-4 mr-2"
                    src={taiwan_flag_icon}
                    alt="UK Flag"
                  />
                  OmTrans in UK
                </p>
                <p className="text-white sm:text-sm text-xs flex items-center ">
                  <svg
                    className="w-5 mr-1 text-red-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m18.4 14.8-1.2-1.3a1.7 1.7 0 0 0-2.4 0l-.7.7a1.7 1.7 0 0 1-2.4 0l-1.9-1.9a1.7 1.7 0 0 1 0-2.4l.7-.6a1.7 1.7 0 0 0 0-2.5L9.2 5.6a1.6 1.6 0 0 0-2.4 0c-3.2 3.2-1.7 6.9 1.5 10 3.2 3.3 7 4.8 10.1 1.6a1.6 1.6 0 0 0 0-2.4Z"
                    />
                  </svg>
                  +91-123456789
                </p>
                <p className="text-white sm:text-sm text-xs flex items-center">
                  <svg
                    className="w-5 mr-1 text-red-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-width="2"
                      d="m3.5 5.5 7.9 6c.4.3.8.3 1.2 0l7.9-6M4 19h16c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H4a1 1 0 0 0-1 1v12c0 .6.4 1 1 1Z"
                    />
                  </svg>
                  info@omtrans.in
                </p>
                <p className="text-white sm:text-sm text-xs flex items-center ">
                  <svg
                    className="w-16 text-red-600 mr-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    />
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.8 14h0a7 7 0 1 0-11.5 0h0l.1.3.3.3L12 21l5.1-6.2.6-.7.1-.2Z"
                    />
                  </svg>
                  No. 17, Noble 1st street, Next to Engine Valves Ltd. Alandur,
                  Chennai - 600016
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Network;
