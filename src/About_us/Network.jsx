import React, { useState } from "react";
import Bg_map from "../assets/bg_map_4.png";
import Goto from "../assets/goto.png";
import seair from "../assets/seair_2.png";
import jc_omtrax from "../assets/jc_omtrax_1.png";
import Location from "../assets/location_icon.png";
import singapore_flag_icon from "../assets/singapore-flag-icon.png";
import vietnam_flag from "../assets/vietnam_flag.jpg";
import south_korea_flag_icon from "../assets/south-korea-flag-icon.png";
import NETHERLAND_flag from "../assets/NETHERLAND_flag.jpg";
import japan_flag_icon from "../assets/japan-flag-icon.png";
import china_flag from "../assets/china_flag.png";
import philippines_flag from "../assets/philippines_flag.jpg";
import taiwan_flag_icon from "../assets/taiwan-flag-icon.png";
import hongkong_flag_icon from "../assets/hong-kong-flag-icon.png";
import india_flag_icon from "../assets/indian_flag.png";
import Navbar from "../Navbar/Navbar";
import BgImg from "../assets/our_services.jpg";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";

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
      {/* SEO */}
      <Helmet>
        <title>OmTrans Logistics Ltd. | Best Freight Forwarding Company</title>
        <meta
          name="description"
          content="OmTrans featuring a comprehensive map of our branches and international associates in the Freight Forwarding and Import-Export industry. Discover our global presence and commitment to seamless logistics solutions, connecting you with reliable services worldwide"
        />

        <meta
          name="keywords"
          content="Best Freight Forwarding Company in india , Freight Forwarding Company in Delhi, Import Export Conpany in Delhi,  Freight Forwarding Company, Best global logistics solutions
Freight Forwarding Network,
Import Export Services,
Global Logistics Network,
International Freight Forwarders,
Supply Chain Solutions,
Logistics Branches Map,
Freight Forwarding Agents,
Global Shipping Partners,
Import Export Logistics,
Network of Freight Services,
International Shipping Solutions"
        />
      </Helmet>
      <Navbar />

      <div
        className="bg-no-repeat bg-center bg-cover "
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="flex sm:flex-row flex-col items-center justify-around sm:pt-24 pt-4 sm:pb-24 m-auto pb-0 w-[90%]">
          <div className="sm:w-3/5	w-full py-6">
            <p className="text-white sm:text-lg text-sm">OmTrans</p>
            <h1 className="text-white sm:text-[3.4vw] font-bold  leading-none text-4xl">
              Global Footprint
            </h1>
          </div>
          <div className="sm:w-2/5 h-40"></div>
        </div>
      </div>

      <div className="relative">
        <div className="relative sm:h-[670px]  h-[200px] my-10 sm:mb-0 mb-0">
          <div className="absolute left-[10%] right-[10%]">
            <img className="max-w-full h-auto" src={Bg_map} alt="World Map" />

            <img
              onMouseOver={() => handleMouseOver(1)}
              onMouseOut={handleMouseOut}
              className="absolute sm:h-6 sm:w-7 h-3 w-3 cursor-pointer right-[22%] bottom-[40%]"
              src={seair}
              alt="Location 1"
            />

            <img
              onMouseOver={() => handleMouseOver(2)}
              onMouseOut={handleMouseOut}
              className="absolute sm:h-5 sm:w-5 h-3 w-3 cursor-pointer right-[17%] bottom-[55%]"
              src={Goto}
              alt="Location 2 Korea"
            />

            <img
              onMouseOver={() => handleMouseOver(3)}
              onMouseOut={handleMouseOut}
              className="absolute sm:h-5 sm:w-5 h-3 w-3  cursor-pointer right-[13%] bottom-[55%]"
              src={Goto}
              alt="Location 3"
            />
            <img
              onMouseOver={() => handleMouseOver(4)}
              onMouseOut={handleMouseOut}
              className="absolute sm:h-5 sm:w-5 h-3 w-3  cursor-pointer right-[20.5%] bottom-[47%]"
              src={Goto}
              alt="Location 4"
            />
            <img
              onMouseOver={() => handleMouseOver(5)}
              onMouseOut={handleMouseOut}
              className="absolute sm:h-5 sm:w-5 h-3 w-3  cursor-pointer right-[18.5%] bottom-[47%]"
              src={Goto}
              alt="Location 5 Taiwan"
            />

            <img
              onMouseOver={() => handleMouseOver(6)}
              onMouseOut={handleMouseOut}
              className="absolute sm:h-7 sm:w-10 h-4 w-4  cursor-pointer right-[25%] bottom-[55%]"
              src={jc_omtrax}
              alt="Location 6"
            />

            <img
              onMouseOver={() => handleMouseOver(7)}
              onMouseOut={handleMouseOut}
              className="absolute sm:h-5 sm:w-5 h-3 w-3  cursor-pointer top-[31%] left-[48%]"
              src={Goto}
              alt="Location 7"
            />

            <img
              onMouseOver={() => handleMouseOver(8)}
              onMouseOut={handleMouseOut}
              className="absolute sm:h-5 sm:w-5 h-3 w-3  cursor-pointer top-[45%] left-[68%]"
              src={Location}
              alt="Location 8 (Delhi)"
            />

            <img
              onMouseOver={() => handleMouseOver(9)}
              onMouseOut={handleMouseOut}
              className="absolute sm:h-5 sm:w-5 h-3 w-3  cursor-pointer top-[50%] left-[67%]"
              src={Location}
              alt="Location 9 (Mumbai)"
            />

            <img
              onMouseOver={() => handleMouseOver(10)}
              onMouseOut={handleMouseOut}
              className="absolute sm:h-5 sm:w-5 h-3 w-3  cursor-pointer top-[48.5%] left-[66%]"
              src={Location}
              alt="Location 10 (Gujarat)"
            />

            <img
              onMouseOver={() => handleMouseOver(11)}
              onMouseOut={handleMouseOut}
              className="absolute sm:h-5 sm:w-5 h-3 w-3  cursor-pointer top-[48.5%] right-[28%]"
              src={Location}
              alt="Location 11 (West Bangal)"
            />

            <img
              onMouseOver={() => handleMouseOver(12)}
              onMouseOut={handleMouseOut}
              className="absolute sm:h-5 sm:w-5 h-3 w-3  cursor-pointer top-[53.5%] right-[30%]"
              src={Location}
              alt="Location 12 (Bengaluru)"
            />

            <img
              onMouseOver={() => handleMouseOver(13)}
              onMouseOut={handleMouseOut}
              className="absolute sm:h-5 sm:w-5 h-3 w-3  cursor-pointer top-[55.5%] right-[30%]"
              src={Location}
              alt="Location 13 (Chennai)"
            />

            <img
              onMouseOver={() => handleMouseOver(14)}
              onMouseOut={handleMouseOut}
              className="absolute sm:h-5 sm:w-5 h-3 w-3  cursor-pointer top-[52.7%] right-[31.2%]"
              src={Location}
              alt="Location 14 (Pune)"
            />

            <img
              onMouseOver={() => handleMouseOver(15)}
              onMouseOut={handleMouseOut}
              className="absolute sm:h-5 sm:w-5 h-3 w-3 cursor-pointer right-[23%] bottom-[36%]"
              src={Goto}
              alt="Location 15 (Singapore)"
            />

            <img
              onMouseOver={() => handleMouseOver(16)}
              onMouseOut={handleMouseOut}
              className="absolute sm:h-5 sm:w-5 h-3 w-3  cursor-pointer right-[18%] bottom-[40%]"
              src={Goto}
              alt="Location 5 (Philippines)"
            />

            {/* Info Boxes */}

            {/* Vietnam */}

            {hoveredBox === 1 && (
              <div className="absolute sm:w-[230px] sm:h-[135px] w-[190px] h-[130px] sm:p-2.5 p-2 bg-blue-500 rounded-lg sm:right-[14%]  right-[3%] bottom-[50%] sm:bottom-[46%]">
                <p className="text-white sm:text-sm text-xs font-semibold flex items-center ">
                  <img
                    className="w-4 mr-2"
                    src={vietnam_flag}
                    alt="Vietnam Flag"
                  />
                  Vietnam
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
                  lerasal@seairlinks.vn
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
                  +91-44-22336768
                </p>
                <p className="text-white sm:text-sm text-xs flex items-start ">
                  <svg
                    className="w-12 mr-2 text-red-600"
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
                  19 Dong Da, Ward 2, Tan Binh District, Ho Chi Minh City,
                  Vietnam
                </p>
              </div>
            )}

            {/* South Korea */}

            {hoveredBox === 2 && (
              <div className="absolute sm:w-[230px] sm:h-[135px] w-[190px] h-[130px] sm:p-2.5 p-2 bg-blue-500 rounded-lg right-[1%] bottom-[65%] sm:right-[7%] sm:bottom-[61%]">
                <p className="text-white sm:text-sm text-xs font-semibold flex items-center ">
                  <img
                    className="w-4 mr-2"
                    src={south_korea_flag_icon}
                    alt="Singapore Flag"
                  />
                  South Korea
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
                      stroke-width="2"
                      d="m3.5 5.5 7.9 6c.4.3.8.3 1.2 0l7.9-6M4 19h16c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H4a1 1 0 0 0-1 1v12c0 .6.4 1 1 1Z"
                    />
                  </svg>
                  oku@kaisoten.co.jp
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
                  +82-2-771-3691
                </p>

                <p className="text-white sm:text-sm text-xs flex items-start ">
                  <svg
                    className="w-10 mr-2 text-red-600"
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
                  GOTO KOREA CO., LTD. Head Office：Seoul Branch：Busan・Daegu
                </p>
              </div>
            )}

            {/* Japan */}

            {hoveredBox === 3 && (
              <div className="absolute w-[230px] h-[130px] p-2.5 bg-blue-500 rounded-lg right-[4%] bottom-[60%]">
                <p className="text-white text-sm font-semibold flex items-center ">
                  <img
                    className="w-4 mr-2"
                    src={japan_flag_icon}
                    alt="Japan Flag"
                  />
                  Japan
                </p>

                <p className="text-white text-sm flex items-start ">
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
                  matsushita@kaisoten.co.jp
                </p>
                <p className="text-white text-sm flex items-start ">
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
                  3 Chome Koyochohigashi, Higashinada Ward, Kobe, Hyogo
                  658-0031, Japan
                </p>
              </div>
            )}

            {/* Hong Kong */}

            {hoveredBox === 4 && (
              <div className="absolute w-[220px] h-[135px] p-2.5 bg-blue-500 rounded-lg right-[11%] bottom-[52%]">
                <p className="text-white text-sm font-semibold flex items-center ">
                  <img
                    className="w-4 mr-2"
                    src={hongkong_flag_icon}
                    alt="Hong Kong Flag"
                  />
                  Hong Kong
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
                      stroke-width="2"
                      d="m3.5 5.5 7.9 6c.4.3.8.3 1.2 0l7.9-6M4 19h16c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H4a1 1 0 0 0-1 1v12c0 .6.4 1 1 1Z"
                    />
                  </svg>
                  aigan_lau@hkgoto.com.hk
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
                  +852-2615-281
                </p>

                <p className="text-white text-sm flex items-start">
                  <svg
                    className="w-10 mr-2 text-red-600"
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
                  HONG KONG GOTO BUTSURYU LTD. Head Office：Hong Kong
                </p>
              </div>
            )}

            {/* Taiwan */}

            {hoveredBox === 5 && (
              <div className="absolute w-[270px] h-[120px] p-2.5 bg-blue-500 rounded-lg right-[9%] bottom-[52%]">
                <p className="text-white text-sm font-semibold flex items-center ">
                  <img
                    className="w-4 mr-2"
                    src={taiwan_flag_icon}
                    alt="Taiwan Flag"
                  />
                  Taiwan
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
                      stroke-width="2"
                      d="m3.5 5.5 7.9 6c.4.3.8.3 1.2 0l7.9-6M4 19h16c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H4a1 1 0 0 0-1 1v12c0 .6.4 1 1 1Z"
                    />
                  </svg>
                  michael0416@gotofairwind.com.tw
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
                  +886-2-2562-3297
                </p>

                <p className="text-white text-sm flex items-start ">
                  <svg
                    className="w-8 mr-2 text-red-600"
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
                  GOTO FAIRWIND CO., LTD. Head Office：Taipei
                </p>
              </div>
            )}

            {/* China */}

            {hoveredBox === 6 && (
              <div className="absolute w-[230px] h-[140px] p-2.5 bg-blue-500 rounded-lg right-[16%] bottom-[60%]">
                <p className="text-white text-sm font-semibold flex items-center ">
                  <img
                    className="w-4 mr-2"
                    src={china_flag}
                    alt="Taiwan Flag"
                  />
                  Shanghai (China)
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
                  setsu@jc-omtrax.com
                </p>
                <p className="text-white text-sm flex items-start ">
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
                  Room 301-302, Building 6, No.1080, Changyang Road, Shanghai,
                  China Post Code: 200092F
                </p>
              </div>
            )}

            {/* UK */}

            {hoveredBox === 7 && (
              <div className="absolute sm:w-[270px] sm:h-[120px] w-[190px] h-[130px] sm:p-2.5 p-2 bg-blue-500 rounded-lg top-[-38%] right-[32%] sm:top-[9%] sm:right-[40%] ">
                <p className="text-white text-sm font-semibold flex items-center ">
                  <img
                    className="w-4 mr-2"
                    src={NETHERLAND_flag}
                    alt="UK Flag"
                  />
                  Netherland
                </p>

                <p className="text-white sm:text-sm text-xs flex items-center ">
                  <svg
                    className="w-4 mr-1 text-red-600"
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
                  kentaro.katayama@gotokaisoten.com
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
                  +31-20-299-8793
                </p>

                <p className="text-white sm:text-sm text-xs flex items-start ">
                  <svg
                    className="w-4 text-red-600 mr-1"
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
                  GOTO EUROPE B.V. Office: Amsterdam
                </p>
              </div>
            )}

            {/* Delhi */}

            {hoveredBox === 8 && (
              <div className="absolute sm:w-[230px] sm:h-[140px] w-[190px] h-[130px] sm:p-2.5 p-2 bg-blue-500 rounded-lg top-[-38%] right-[32%] sm:top-[20%] sm:right-[22%] ">
                <p className="text-white text-sm font-semibold flex items-center ">
                  <img
                    className="w-4 mr-2"
                    src={india_flag_icon}
                    alt="UK Flag"
                  />
                  OmTrans in Delhi
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
                  +91-11-48316700
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
                <p className="text-white sm:text-sm text-xs flex items-start ">
                  <svg
                    className="w-[42px] text-red-600 mr-1"
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
                  159, Transport Center, Punjabi Bagh, New Delhi-110035
                </p>
              </div>
            )}

            {/* Mumbai */}

            {hoveredBox === 9 && (
              <div className="absolute sm:w-[230px] sm:h-[155px] w-[190px] h-[130px] sm:p-2.5 p-2 bg-blue-500 rounded-lg top-[-38%] right-[32%] sm:top-[22%] sm:right-[22%] ">
                <p className="text-white text-sm font-semibold flex items-center ">
                  <img
                    className="w-4 mr-2"
                    src={india_flag_icon}
                    alt="UK Flag"
                  />
                  OmTrans in Mumbai
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
                  +91-22-43889999-975
                </p>
                <p className="text-white sm:text-sm text-xs flex items-start">
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
                <p className="text-white sm:text-sm text-xs flex items-start ">
                  <svg
                    className="w-[70px] text-red-600 mr-1"
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
                  1301/1302,Building E Trade Link,A-wing , Kamala City , S.B
                  Marg, Mumbai 400013 Maharashtra
                </p>
              </div>
            )}

            {/* Gujarat */}

            {hoveredBox === 10 && (
              <div className="absolute sm:w-[230px] sm:h-[155px] w-[190px] h-[130px] sm:p-2.5 p-2 bg-blue-500 rounded-lg top-[-38%] right-[32%] sm:top-[21%] sm:right-[23%] ">
                <p className="text-white text-sm font-semibold flex items-center ">
                  <img
                    className="w-4 mr-2"
                    src={india_flag_icon}
                    alt="UK Flag"
                  />
                  OmTrans in Gujarat
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
                  +91-79-48927450
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
                <p className="text-white sm:text-sm text-xs flex items-start ">
                  <svg
                    className="w-[55px] text-red-600 mr-1"
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
                  Office No. B-705 , Sivanata One, Opposite Bank of Baroda,
                  Paldi, Ahmedabad - 380007
                </p>
              </div>
            )}

            {/* West Bangal */}

            {hoveredBox === 11 && (
              <div className="absolute sm:w-[235px] sm:h-[160px] w-[190px] h-[130px] sm:p-2.5 p-2 bg-blue-500 rounded-lg top-[-38%] right-[32%] sm:top-[20%] sm:right-[18.5%] ">
                <p className="text-white text-sm font-semibold flex items-center ">
                  <img
                    className="w-4 mr-2"
                    src={india_flag_icon}
                    alt="UK Flag"
                  />
                  OmTrans in West Bangal
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
                  +91-9830720256
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
                <p className="text-white sm:text-sm text-xs flex items-start ">
                  <svg
                    className="w-[70px] text-red-600 mr-1"
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
                  Ground Floor, 113, Delhi Kolkata Highway, Ashok Grah Kolkata
                  North Twenty Four Parganas, West Bengal, 700108
                </p>
              </div>
            )}

            {/* Bengaluru */}

            {hoveredBox === 12 && (
              <div className="absolute sm:w-[235px] sm:h-[160px] w-[190px] h-[130px] sm:p-2.5 p-2 bg-blue-500 rounded-lg top-[-38%] right-[32%] sm:top-[26%] sm:right-[21%] ">
                <p className="text-white text-sm font-semibold flex items-center ">
                  <img
                    className="w-4 mr-2"
                    src={india_flag_icon}
                    alt="UK Flag"
                  />
                  OmTrans in Bengaluru
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
                  +91-080-41258514
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
                <p className="text-white sm:text-sm text-xs flex items-start ">
                  <svg
                    className="w-[60px] text-red-600 mr-1"
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
                  No.3, 2nd Floor, Srinidhi Envoy, 4th 'C' Cross, 2nd Main,
                  Kasturinagar, Banaswadi, Bangalore -560043, India
                </p>
              </div>
            )}

            {/* Chennai */}

            {hoveredBox === 13 && (
              <div className="absolute sm:w-[235px] sm:h-[145px] w-[185px] h-[130px] sm:p-2.5 p-2 bg-blue-500 rounded-lg top-[-38%] right-[32%] sm:top-[29%] sm:right-[21%] ">
                <p className="text-white text-sm font-semibold flex items-center ">
                  <img
                    className="w-4 mr-2"
                    src={india_flag_icon}
                    alt="UK Flag"
                  />
                  OmTrans in Chennai
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
                  +91-44-22336768
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
                <p className="text-white sm:text-sm text-xs flex items-start ">
                  <svg
                    className="w-[60px] text-red-600 mr-1"
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

            {/* Pune */}

            {hoveredBox === 14 && (
              <div className="absolute sm:w-[235px] sm:h-[160px] w-[185px] h-[130px] sm:p-2.5 p-2 bg-blue-500 rounded-lg top-[-38%] right-[33%] sm:top-[25%] sm:right-[22%] ">
                <p className="text-white text-sm font-semibold flex items-center ">
                  <img
                    className="w-4 mr-2"
                    src={india_flag_icon}
                    alt="UK Flag"
                  />
                  OmTrans in Pune
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
                  +91-20-41311069
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
                <p className="text-white sm:text-sm text-xs flex items-start ">
                  <svg
                    className="w-[60px] text-red-600 mr-1"
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
                  Office no 208, 2nd Floor, Ashoka Mall, Bund Garden Road Survey
                  Number 49/A, Pune - 411001
                </p>
              </div>
            )}

            {/* Singapore */}

            {hoveredBox === 15 && (
              <div className="absolute sm:w-[230px] sm:h-[140px] w-[190px] h-[130px] sm:p-2.5 p-2 bg-blue-500 rounded-lg sm:right-[14%]  right-[3%] bottom-[50%] sm:bottom-[42%]">
                <p className="text-white sm:text-sm text-xs font-semibold flex items-center ">
                  <img
                    className="w-4 mr-2"
                    src={singapore_flag_icon}
                    alt="Vietnam Flag"
                  />
                  Singapore
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
                      stroke-width="2"
                      d="m3.5 5.5 7.9 6c.4.3.8.3 1.2 0l7.9-6M4 19h16c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H4a1 1 0 0 0-1 1v12c0 .6.4 1 1 1Z"
                    />
                  </svg>
                  takashi@gotokaisoten.com
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
                  +65-6272-9929
                </p>

                <p className="text-white sm:text-sm text-xs flex items-start ">
                  <svg
                    className="w-12 mr-2 text-red-600"
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
                  GOTO SOUTH EAST ASIA PTE LTD. Head Office：Singapore
                </p>
              </div>
            )}

            {/* Philippines */}

            {hoveredBox === 16 && (
              <div className="absolute w-[230px] h-[135px] p-2.5 bg-blue-500 rounded-lg right-[9%] bottom-[46%]">
                <p className="text-white text-sm font-semibold flex items-center ">
                  <img
                    className="w-4 mr-2"
                    src={philippines_flag}
                    alt="Philippines Flag"
                  />
                  Philippines
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
                      stroke-width="2"
                      d="m3.5 5.5 7.9 6c.4.3.8.3 1.2 0l7.9-6M4 19h16c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H4a1 1 0 0 0-1 1v12c0 .6.4 1 1 1Z"
                    />
                  </svg>
                  cesar@gotophilippines.com.ph
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
                  +63-2-397-9198
                </p>

                <p className="text-white text-sm flex items-start ">
                  <svg
                    className="w-8 mr-2 text-red-600"
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
                  GOTO PHILIPPNES LOGISTICS, INC. Office：Manila
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
