import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import BgImg from "../assets/our_services_bg.jpg";
import Icon_1 from "../assets/Icon1.svg";
import Icon_2 from "../assets/Icon2.svg";
import Icon_3 from "../assets/Icon3.svg";
import Icon_4 from "../assets/Icon4.svg";
import Image1 from "../assets/Image_4.jpg";
import Image2 from "../assets/Image_3.jpg";
import Icon_5 from "../assets/Icon5.svg";
import Icon_6 from "../assets/Icon6.svg";
import box from "../assets/Pattern.svg";
import Testimonials from "../Components/Testimonials";

function Our_services() {
  return (
    <div>
      <Navbar />

      <div
        className="bg-no-repeat bg-center bg-cover "
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="flex items-center sm:justify-center justify-around pt-32 pb-32 m-auto w-[80%]">
          <div className="sm:w-2/5	w-full">
            <p className="text-white sm:text-lg text-sm">Our Services</p>
            <h1 className="text-white sm:text-[3.4vw] font-bold sm:py-2 leading-none text-4xl pt-4 pb-8">
              Our Logistics Service
            </h1>
          </div>
          <div className="sm:w-2/5	bg-gray-500"></div>
        </div>
      </div>

      {/* What we do */}

      <div className=" w-[70%] m-auto   sm:py-14 py-14">
        <div className="text-center ">
          <p className="bg-gray-200 py-1 px-3 border-l-4 border-yellow-400 w-32 mb-4 sm:mb-0 m-auto">
            What we do
          </p>
          <h2 className="text-4xl font-bold	text-[#1C1F35]	py-2">
            Our Logistics Services
          </h2>
        </div>
        <div className="flex items-center justify-center flex-col sm:flex-row">
          <div>
            <div className=" gap-5 py-4 px-0 sm:px-6">
              <img src={Icon_1} alt="" />
              <div className="pt-2">
                <h3 className="text-2xl pb-2">Sea Transport Services</h3>
                <p className="text-base">
                  Following the quality of our service thus having gained trust
                  of our many clients.
                </p>
              </div>
            </div>

            <div className=" gap-5 py-4 px-0 sm:px-6">
              <img src={Icon_1} alt="" />
              <div className="pt-2">
                <h3 className="text-2xl pb-2">Sea Transport Services</h3>
                <p className="text-base">
                  Following the quality of our service thus having gained trust
                  of our many clients.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className=" gap-5 py-4 px-0 sm:px-6">
              <img src={Icon_1} alt="" />
              <div className="pt-2">
                <h3 className="text-2xl pb-2">Sea Transport Services</h3>
                <p className="text-base">
                  Following the quality of our service thus having gained trust
                  of our many clients.
                </p>
              </div>
            </div>

            <div className="gap-5 py-4 px-0 sm:px-6">
              <img src={Icon_2} alt="" />
              <div className="pt-2">
                <h3 className="text-2xl pb-2">Air Fright Services</h3>
                <p className="text-base">
                  Following the quality of our service thus having gained trust
                  of our many clients.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="gap-5 py-4 px-0 sm:px-6">
              <img src={Icon_3} alt="" />
              <div className="pt-2">
                <h3 className="text-2xl pb-2">Warehousing</h3>
                <p className="text-base">
                  Following the quality of our service thus having gained trust
                  of our many clients.
                </p>
              </div>
            </div>

            <div className="gap-5 py-4 px-0 sm:px-6">
              <img src={Icon_4} alt="" />
              <div className="pt-2">
                <h3 className="text-2xl pb-2">Local Shipping Services</h3>
                <p className="text-base">
                  Following the quality of our service thus having gained trust
                  of our many clients.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center py-10">
          <button className=" bg-gradient-to-r from-blue-900 to-blue-700 py-4 px-6 text-white hover:scale-110 duration-300 rounded-md">
            More Work
          </button>
        </div>
      </div>

      {/* Our Services */}
      <div className=" bg-[#F4F4F4] py-10 ">
        <div>
          <p className="bg-gray-200 py-1 px-3 border-l-4 border-yellow-400 w-36 text-center m-auto">
            Our Services
          </p>
          <h1 className="text-2xl m-auto text-center py-2">How We Works</h1>
        </div>
        <div className="flex justify-center  flex-col sm:flex-row w-[70%] py-10 m-auto">
          <div className="relative sm:w-2/5">
            <img className="" src={Image1} alt="" />
            <img
              className="absolute bottom-0 right-0 w-[35%]"
              src={Image2}
              alt=""
            />
          </div>
          <div className="sm:pl-10 sm:w-2/5">
            <div className="flex  items-center gap-5 py-5">
              <img src={Icon_5} alt="" />
              <div>
                <h1 className="text-2xl  items-center">Warehousing Services</h1>
                <p>
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster collaborative thinking
                </p>
              </div>
            </div>
            <div className="flex  items-center gap-5 pb-5">
              <img src={Icon_6} alt="" />
              <div>
                <h1 className="text-2xl  items-center">Safety & Quality</h1>
                <p>
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster collaborative thinking
                </p>
              </div>
            </div>
            <div className="flex  items-center gap-5 pb-5">
              <img src={Icon_6} alt="" />
              <div>
                <h1 className="text-2xl  items-center">Care for Environment</h1>
                <p>
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster collaborative thinking
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16">
        <div className="flex items-center justify-center flex-wrap">
          <div className="py-6 px-10 sm:w-[1000px] w-[500px] ">
            <Testimonials />
          </div>
        </div>
      </div>
      {/*  */}

      <div className="flex flex-col sm:flex-row justify-center py-10 ">
        <div className="flex flex-col sm:flex-row items-center justify-center  gap-5 font-lg py-10 px-10 border-r-2 border-t-2 border-b-2">
          <span className="text-4xl font-bold ">94</span>
          <img src={box} alt="" />
          Our Location
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center  gap-5 font-lg py-10 px-10 border-r-2 border-t-2 border-b-2">
          <span className="text-4xl font-bold ">1294</span>
          <img src={box} alt="" />
          Delivered Packages
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center  gap-5 font-lg py-10 px-10 border-r-2 border-t-2 border-b-2">
          <span className="text-4xl font-bold	">3594</span>
          <img src={box} alt="" />
          Satisfied Clients
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center  gap-5 font-lg py-10 px-10  border-t-2 border-b-2">
          <span className="text-4xl font-bold	">247</span>
          <img src={box} alt="" />
          Owned Vehicles
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Our_services;
