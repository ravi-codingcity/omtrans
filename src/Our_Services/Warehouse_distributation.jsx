import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import BgImg from "../assets/WD_img.jpg";
import Icon_1 from "../assets/Icon1.svg";
import Icon_3 from "../assets/Icon3.svg";
import Icon_4 from "../assets/Icon4.svg";
import Companies_logo from "../Components/Companies_logo";
import wd_img from "../assets/wd_img.jpeg";
import wd_img_1 from "../assets/wd_img_1.jpeg";
import MyFaq from "../Components/FaqWD";
import freight_forwarding from "../assets/freight_forwarding.jpg";
import CTA from "../Components/CTA";
import { GiTakeMyMoney } from "react-icons/gi";
import { LiaToolsSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import Global_Strength from "../Components/Global_Strength";
import india from "../assets/GS_india.png";
import globe from "../assets/GS_globe.png";
import warehouse from "../assets/GS_warehouse.png";
import staff from "../assets/GS_staff.png";
import truck from "../assets/GS_truck.png";
import Extra_features from "../Components/Extra_features";
import Scroll_Top from "../Components/Scroll_Top";
import { Helmet } from "react-helmet";

function Warehouse_distribution() {
  return (
    <div>
      {/* SEO */}
      <Helmet>
        <title>Warehouse and Distribution Services | OmTrans Logistics Ltd.</title>
        <meta
          name="description"
          content="OmTrans Warehouse and Distribution services to help cater to your logistics complexities. Our local expertise along with our global infrastructure provides you with a strong supply chain backbone that will help you grow your business and exceed customer expectations."
        />

        <meta
          name="keywords"
          content="Best Warehouse and Distribution Services in India , Warehouse and Distribution Services in Delhi,  Warehouse and Distribution Services, Inventory Management Services, Best Inventory Management Services"
        />
      </Helmet>

      <Navbar />
      {/* Header */}
      <div
        className="bg-no-repeat bg-center bg-cover "
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="flex sm:flex-row flex-col items-center justify-around sm:pt-24 pt-4 sm:pb-24 m-auto  w-[90%]">
          <div className="sm:w-3/5	w-full py-6">
            <p className="text-white sm:text-lg text-sm">Our Services</p>
            <h1 className="text-white sm:text-[3.4vw] font-bold  leading-none text-4xl">
              Warehouse and Distribution
            </h1>
          </div>
          <div className="sm:w-2/5 h-44"></div>
        </div>
      </div>

      <div className="flex sm:flex-row flex-col justify-center items-center max-w-screen-lg m-auto sm:py-10 py-5 px-3 sm:px-0">
        <div className="sm:w-[50%]  sm:pr-10 pr-2">
          <h3 className="sm:text-4xl text-3xl font-bold text-[#1C1F35] py-2 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-[#ff3d3d] after:mt-3">
            Optimize Your Inventory with OmTrans Warehousing Solutions
          </h3>
          <p className="text-base  mt-2">
            The warehousing operations provided by OmTrans is applauded by its
            existing customers which is designed as per there requirements and
            is compatible for storing any type of cargo. OmTrans has bonded and
            non-bonded warehouses facility at almost all the major ports.
          </p>
        </div>
        <div className="pt-6 sm:pt-0 pb-6 sm:pb-0">
          <img src={wd_img} alt="about us image" />
        </div>
      </div>

      {/* Services */}

      <div className="bg-gray-100">
        <div className=" max-w-screen-lg m-auto   sm:py-14 py-14">
          <div className="flex flex-wrap items-center justify-center flex-col sm:flex-row py-3   ">
            <div className="py-4  px-6 w-[310px] h-[250px] border-2 border-blue-700  sm:mt-2 mx-2">
              <img src={Icon_4} alt="" />
              <div className="pt-2">
                <h3 className="text-2xl pb-2 font-semibold">Flexibility</h3>
                <p className="text-base">
                  Speed up or slow down your supply chain to meet market demands
                  efficiently across seasons.
                </p>
              </div>
            </div>
            <div className="  py-4 px-6 w-[310px] h-[250px] border-2 border-blue-700  mt-5 sm:mt-2 mx-2">
              <img src={Icon_1} alt="" />
              <div className="pt-2">
                <h3 className="text-2xl pb-2 font-semibold">Connectivity</h3>
                <p className="text-base">
                  Leverage our growing network of strategically located
                  facilities that connect you to key markets, vendors and
                  transport modes.
                </p>
              </div>
            </div>
            <div>
              <div className=" py-4 px-6 w-[310px] h-[250px] border-2 border-blue-700 mt-5 sm:mt-2 mx-2">
                <img src={Icon_3} alt="" />
                <div className="pt-2">
                  <h3 className="text-2xl pb-2 font-semibold">Ease</h3>
                  <p className="text-base">
                    Enjoy better cash flow and reduce in-transit storage needs
                    while keeping your goods ready for distribution.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className=" py-4 px-6 w-[310px] h-[250px] border-2 border-blue-700 mt-5 sm:mt-4 mx-2">
                <img src={Icon_3} alt="" />
                <div className="pt-2">
                  <h3 className="text-2xl pb-2 font-semibold">Global Reach</h3>
                  <p className="text-base">
                    Spread all over the globe, our warehousing and distribution
                    services are equipped to keep your supply chain moving.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className=" py-4 px-6 w-[310px] h-[250px] border-2 border-blue-700 mt-5 sm:mt-4 mx-2">
                <img src={Icon_3} alt="" />
                <div className="pt-2">
                  <h3 className="text-2xl pb-2 font-semibold">
                    Value-added services
                  </h3>
                  <p className="text-base">
                    Optimise your supply chain and minimise go-to-market efforts
                    with scanning, sorting, labelling and other value-added
                    services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Strength */}

      <div className="bg-white py-10 ">
        <p className="text-4xl font-bold my-6 text-center ">Group Strength</p>
        <div className="flex justify-center flex-wrap   items-stretch py-3 text-white">
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
        <div className="flex sm:flex-row flex-col justify-center items-center max-w-screen-lg m-auto sm:py-10 py-7 px-3 sm:px-0">
          <div className=" pt-0 sm:pt-0">
            <img src={wd_img_1} alt="about us image" />
          </div>
          <div className="sm:w-[50%]  w-full sm:pl-10 pl-0 sm:py-1 py-5">
            <h3 className="sm:text-4xl text-3xl font-bold text-[#1C1F35] py-2 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-[#ff3d3d] after:mt-3">
              Your One-Stop Solution for Warehousing and Distribution
            </h3>
            <div className="list-inside list-disc">
              <ul className="list-disc pl-6 mt-3">
                <li className="">
                  OmTrans maintains an excellent inventory management system in
                  these warehouses and stock up goods necessary for local and
                  international distribution.
                </li>
                <li>
                  With our 24 years of experience in building highly agile
                  warehousing and distribution solutions, your cargo can rest
                  easy during any planned and unplanned stoppages along the
                  journey.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Extra Features*/}

      <div className="max-w-screen-lg pb-16 m-auto py-5">
        <h3 className="sm:text-4xl text-3xl font-bold	text-[#1C1F35]	 text-center py-4">
          Some Benefits to Choose OmTrans
        </h3>
        <div className="flex flex-wrap items-center justify-center  text-center  ">
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
        <div className="py-20  m-auto flex justify-center  sm:flex-row flex-col max-w-screen-lg">
          <div>
            <div className="sm:w-[500px] sm:px-0 px-5 mr-6">
              <p className="bg-gray-200 py-1 px-3 border-l-4 border-yellow-400 w-20 mb-4 sm:mb-0  ">
                FAQ
              </p>
              <h2 className="text-2xl font-bold	py-2 m-auto pb-10">
                Frequently Asked <br /> Questions
              </h2>
              <div>
                <MyFaq />
              </div>
            </div>
          </div>

          <div className="">
            <img src={freight_forwarding} alt="" />
          </div>
        </div>
      </div>
      <Scroll_Top />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Warehouse_distribution;
