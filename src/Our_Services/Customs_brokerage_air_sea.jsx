import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import BgImg from "../assets/CB_img.jpg";
import Icon_1 from "../assets/Icon1.svg";
import Icon_3 from "../assets/Icon3.svg";
import Icon_4 from "../assets/Icon4.svg";
import Companies_logo from "../Components/Companies_logo";
import Customs_img from "../assets/customs_img.jpg";
import Customs_img2 from "../assets/customs_img2.jpg";
import MyFaq from "../Components/FaqCB";
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

function Customs_brokerage_air_sea() {
  return (
    <div>
      {/* SEO */}
      <Helmet>
        <title>Best Customs Brokerage Services | OmTrans Logistics Ltd.</title>
        <meta
          name="description"
          content="OmTrans Our Customs Knowledge help ease Import and Export regulations and paper work in record time for all of your shipments."
        />

        <meta
          name="keywords"
          content="Best Customs Brokerage Services in india , Customs Brokerage Services in Delhi, Import Export Company in Delhi,  Customs Brokerage Services"
        />
      </Helmet>

      <Navbar />
      {/* Header */}
      <div
        className="bg-no-repeat bg-center bg-cover "
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="flex sm:flex-row flex-col items-center justify-around sm:pt-24 pt-4 sm:pb-24 m-auto w-[90%]">
          <div className="sm:w-3/5	w-full py-6">
            <p className="text-white sm:text-lg text-sm">Our Services</p>
            <h1 className="text-white sm:text-[3.4vw] font-bold  leading-none text-4xl">
              Customs and Brokerage
            </h1>
          </div>
          <div className="sm:w-2/5 h-44"></div>
        </div>
      </div>

      <div className="flex sm:flex-row flex-col justify-center items-center max-w-screen-lg m-auto py-10 px-5 sm:px-0">
        <div className="sm:w-[50%]  sm:pr-10 pr-0">
          <h3 className="sm:text-4xl text-3xl font-bold text-[#1C1F35] py-2 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-[#ff3d3d] after:mt-2">
            Why Choose Us for Customs Brokerage?
          </h3>
          <p className="text-base  mt-1">
            We ensure smooth and easy customs clearance for all our customers,
            so that they receive their goods on time. Our Customs Knowledge help
            ease Import and Export regulations and paper work in record time for
            all of your shipments. We help clear consignments by sea, land and
            air more efficiently. It is our endeavour to enhance our customer’s
            satisfaction by offering them right solution at right time.
          </p>
        </div>
        <div className=" pt-6 sm:pt-0">
          <img src={Customs_img} alt="about us image" />
        </div>
      </div>

      {/* Services */}
      <div className="bg-gray-100">
        <div className=" max-w-screen-lg m-auto   sm:py-14 py-14">
          <div className="flex flex-wrap items-center justify-center flex-col sm:flex-row py-3   ">
            <div className="py-4  px-6 w-[310px] h-[280px] border-2 border-blue-700 mt-2 mx-2">
              <img src={Icon_4} alt="" />
              <div className="pt-2">
                <h3 className="text-2xl pb-2 font-semibold">
                  Customs Broker Service
                </h3>
                <p className="text-base">
                  We help the customer and the customs authority in completing a
                  satisfactory trade for both export and import customs
                  clearance.
                </p>
              </div>
            </div>
            <div className="  py-4 px-6 w-[310px] h-[280px] border-2 border-blue-700  sm:mt-2 mt-5 mx-2">
              <img src={Icon_1} alt="" />
              <div className="pt-2">
                <h3 className="text-2xl pb-2 font-semibold">
                  Customs procedure Consulting
                </h3>
                <p className="text-base">
                  Customized advice on regulations, procedures, customs regimes
                  for our clients.
                </p>
              </div>
            </div>
            <div>
              <div className=" py-3 px-4 w-[310px] h-[280px] border-2 border-blue-700 sm:mt-2 mt-5 mx-2">
                <img src={Icon_3} alt="" />
                <div className="pt-2">
                  <h3 className="text-2xl pb-2 font-semibold">
                    Bonding and De bonding Clearance
                  </h3>
                  <p className="text-base">
                    We guide our customers with bonding procedures to avoid port
                    and shipping line penalties. We also help them De bonding
                    the goods from the port
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Strength */}

      <div className="bg-white py-10 ">
        <p className="text-4xl font-bold my-6 text-center">Group Strength</p>
        <div className="flex justify-center flex-wrap  items-stretch py-3 text-white">
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
            <img src={Customs_img2} alt="about us image" />
          </div>
          <div className="sm:w-[50%]  w-full sm:pl-10 pl-0 sm:py-1 py-5">
            <h3 className="sm:text-4xl text-3xl font-bold text-[#1C1F35] py-2 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-[#ff3d3d] after:mt-3">
              Redefining Customs Clearance Excellence with OmTrans
            </h3>
            <div className="list-inside list-disc mt-3">
              <ul className="list-disc pl-6">
                <li className="">Client-Centric Approach</li>
                <li>Cost Effective Compliance</li>
                <li>Experienced Expertise</li>
                <li>Quality Never Compromise</li>
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
        <div className="flex flex-wrap items-center justify-center  text-center ">
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
        <div className="py-20  m-auto flex justify-center sm:flex-row flex-col max-w-screen-lg">
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

      {/* Footer */}
      <Scroll_Top />
      <Footer />
    </div>
  );
}

export default Customs_brokerage_air_sea;
