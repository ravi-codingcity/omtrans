import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import BgImg from "../assets/ODC_img.jpg";
import Icon_1 from "../assets/Icon1.svg";
import Companies_logo from "../Components/Companies_logo";
import FF_1 from "../assets/ODC_1.jpeg";
import FF_2 from "../assets/ODC_2.jpeg";
import FaqComponent from "../Components/FaqODC";
import freight_forwarding from "../assets/freight_forwarding.jpg";
import CTA from "../Components/CTA";
import Extra_features from "../Components/Extra_features";
import { GiTakeMyMoney } from "react-icons/gi";
import { LiaToolsSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import Global_Strength from "../Components/Global_Strength";
import india from "../assets/GS_india.png";
import globe from "../assets/GS_globe.png";
import warehouse from "../assets/GS_warehouse.png";
import staff from "../assets/GS_staff.png";
import truck from "../assets/GS_truck.png";

function Project_cargo_ODC_Handle() {
  return (
    <div>
      <Navbar />
      {/* Header */}
      <div
        className="bg-no-repeat bg-center bg-cover "
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="flex sm:flex-row flex-col items-center justify-around sm:pt-24 pt-4 sm:pb-24 m-auto pb-0 w-[90%]">
          <div className="sm:w-3/5	w-full py-6">
            <p className="text-white sm:text-lg text-sm">Our Services</p>
            <h1 className="text-white sm:text-[3.4vw] font-bold  leading-none text-4xl">
              Project Cargo & ODC Handle
            </h1>
          </div>
          <div className="sm:w-2/5 h-44"></div>
        </div>
      </div>

      <div className="flex sm:flex-row flex-col justify-center items-center max-w-screen-lg m-auto sm:py-10 py-3 px-3 sm:px-0">
        <div className="sm:w-[50%]  sm:pr-10 pr-0 ">
          <div>
            <h3 className="sm:text-4xl text-3xl font-bold text-[#1C1F35] py-2 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-[#ff3d3d] after:mt-2">
              Handling of Over Dimensional Cargo
            </h3>
            <p className="text-base  mt-2">
              OmTrans Logistics specializes in providing solutions for the safe
              transportation of any over-dimensional cargo, as well as heavy and
              bulk cargo. We are experienced to develop a complete strategy that
              takes into consideration every feature of the project, from
              freight estimation and carrier selection to site surveys and route
              clearances. This results in considerable savings in both time and
              money for our clients and the avoidance of costly mistakes.
            </p>
          </div>
        </div>
        <div className="pt-6 sm:pt-0 pb-12 sm:pb-0">
          <img src={FF_1} alt="about us image" />
        </div>
      </div>

      {/* Services */}
      <div className="bg-gray-100">
        <div className=" max-w-screen-lg m-auto   sm:py-14 py-10">
          <p className="sm:text-4xl text-3xl  font-bold my-4 text-center text-[#1C1F35] ">
            Handled Projects
          </p>
          <div className="flex items-center justify-evenly flex-col sm:flex-row py-3 flex-wrap">
            <div className="py-4  px-6 w-[310px] h-[150px] border-2 border-blue-700 mt-2 mx-2">
              <img src={Icon_1} alt="" />
              <div className="pt-2">
                <h3 className="text-xl pb-2 font-semibold">
                  Suzuki Motorcycles ltd.
                </h3>
              </div>
            </div>

            <div className="py-4  px-6 w-[310px] h-[150px] border-2 border-blue-700 mt-2 mx-2">
              <img src={Icon_1} alt="" />
              <div className="pt-2">
                <h3 className="text-xl pb-2 font-semibold">
                  Maruti Suzuki Automobile India Ltd.
                </h3>
              </div>
            </div>
            <div className="py-4  px-6 w-[310px] h-[150px] border-2 border-blue-700 mt-2 mx-2">
              <img src={Icon_1} alt="" />
              <div className="pt-2">
                <h3 className="text-xl pb-2 font-semibold">
                  Porrits and Spencer Asia Ltd.
                </h3>
              </div>
            </div>
            <div className="py-4  px-6 w-[310px] h-[150px] border-2 border-blue-700 mt-2 mx-2">
              <img src={Icon_1} alt="" />
              <div className="pt-2">
                <h3 className="text-xl pb-2 font-semibold">NTN Bearing</h3>
              </div>
            </div>

            <div className="py-4  px-6 w-[310px] h-[150px] border-2 border-blue-700 mt-2 mx-2">
              <img src={Icon_1} alt="" />
              <div className="pt-2">
                <h3 className="text-xl pb-2 font-semibold">
                  Jindal Polyesters
                </h3>
              </div>
            </div>
            <div className="py-4  px-6 w-[310px] h-[150px] border-2 border-blue-700 mt-2 mx-2">
              <img src={Icon_1} alt="" />
              <div className="pt-2">
                <h3 className="text-xl pb-2 font-semibold">Automax</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Strength */}

      <div className="bg-white py-10 ">
        <h1 className="bg-gray-200 border-l-4 border-red-600 my-2 text-center w-28 m-auto ">
          OmTrans
        </h1>
        <p className="text-4xl font-bold my-6 text-center ">Global Strength</p>
        <div className="flex justify-center flex-wrap gap-5  items-stretch py-3 text-white">
          <Global_Strength
            icon={india}
            heading={"750+"}
            text={"Branch Offices (India)"}
          />
          <Global_Strength
            icon={globe}
            heading={"150+"}
            text={"Countries Presence Worldwide"}
          />
          <Global_Strength
            icon={warehouse}
            heading={"200+"}
            text={"Warehouses"}
          />
          <Global_Strength icon={staff} heading={"7500+"} text={"Staff"} />
          <Global_Strength icon={truck} heading={"5500+"} text={"Trucks"} />
        </div>
      </div>

      {/* Services 2*/}

      <div className="bg-gray-100 py-4">
        <div className="flex sm:flex-row flex-col justify-center items-center max-w-screen-lg m-auto py-10">
          <div className=" pt-0 sm:pt-0 px-3 sm:px-0">
            <img src={FF_2} alt="about us image" />
          </div>
          <div className="sm:w-[50%]  sm:pl-10 pl-3">
            <h3 className="sm:text-4xl text-3xl font-bold text-[#1C1F35] py-2 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-[#ff3d3d] after:mt-5">
              Reliable Project Cargo Management
            </h3>
            <div className="list-inside list-disc">
              <p className="text-base  mt-5">
                Our focus is on simplifying logistics for heavy and bulk cargo
                in standard and non-standard quantities, guaranteeing the timely
                delivery of shipments.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Extra Features*/}

      <div className="max-w-screen-lg pb-16 m-auto py-5">
        <h3 className="sm:text-4xl text-3xl font-bold	text-[#1C1F35]	 text-center py-4">
          Some Benefits to Choose OmTrans
        </h3>
        <div className="flex flex-wrap items-center justify-center  text-center  sm:space-x-4 space-x-0">
          <Extra_features
            icon={<GiTakeMyMoney className="text-4xl" />}
            heading="Flexible Pricing"
            para="OmTrans Provides you the advantage of adaptable pricing structures to fit different shipment sizes and schedules."
          />
          <Extra_features
            icon={<LiaToolsSolid className="text-4xl" />}
            heading="Customized Solutions"
            para="Benefit from personalized freight forwarding solutions designed to meet your unique requirements and preferences."
          />
          <Extra_features
            icon={<BiSupport className="text-4xl" />}
            heading="24/7 Support"
            para="Access round-the-clock customer support to assist you with any inquiries or issues, ensuring seamless service at all times."
          />
        </div>
      </div>

      {/* Associate Companies*/}

      <div>
        <p className="text-4xl font-bold pt-7 text-center text-red-600 ">
          Associate Companies
        </p>
        <Companies_logo />
      </div>

      {/* CTA */}

      <div>
        <CTA />
      </div>

      {/* Faq */}

      <div>
        <div className="py-20  m-auto flex justify-center gap-10 sm:flex-row flex-col max-w-screen-lg">
          <div>
            <div className="sm:w-[500px] sm:px-0 px-5">
              <p className="bg-gray-200 py-1 px-3 border-l-4 border-yellow-400 w-20 mb-4 sm:mb-0  ">
                FAQ
              </p>
              <h2 className="text-2xl font-bold	py-2 m-auto pb-10">
                Frequently Asked <br /> Questions
              </h2>
              <div>
                <FaqComponent />
              </div>
            </div>
          </div>

          <div className="">
            <img src={freight_forwarding} alt="" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Project_cargo_ODC_Handle;
