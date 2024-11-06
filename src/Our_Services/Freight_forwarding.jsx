import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import BgImg from "../assets/our_services_bg.jpg";
import Icon_1 from "../assets/Icon1.svg";
import Icon_3 from "../assets/Icon3.svg";
import Icon_4 from "../assets/Icon4.svg";
import Companies_logo from "../Components/Companies_logo";
import FF_1 from "../assets/ff_1.jpg";
import FF_2 from "../assets/ff_2.jpg";
import FaqComponent from "../Components/FaqFF";
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
import Scroll_Top from "../Components/Scroll_Top";
import Extra_features from "../Components/Extra_features";
import { Helmet } from "react-helmet";

function Freight_forwarding() {
  return (
    <div>
      {/* SEO */}
      <Helmet>
        <title>
          Best Freight Forwarding Services in India | OmTrans Logistics Ltd.
        </title>
        <meta
          name="description"
          content="OmTrans is your trusted partner in global logistics solutions. With an international footprint spanning over 150+ countries, We specialize in providing a full range of logistics services, including air, ocean, and land transportation."
        />

        <meta
          name="keywords"
          content="Best Freight Forwarding Services in india , Freight Forwarding Services in Delhi, Import Export Company in Delhi,  Freight Forwarding Services"
        />
      </Helmet>

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
              Freight Forwarding
            </h1>
          </div>
          <div className="sm:w-2/5 h-44"></div>
        </div>
      </div>

      <div className="flex sm:flex-row flex-col justify-center items-center max-w-screen-lg m-auto py-10 px-5 sm:px-0">
        <div className="sm:w-[50%]  sm:pr-10 pr-0">
          <h3 className="sm:text-4xl text-3xl font-bold text-[#1C1F35] py-2 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-[#ff3d3d] after:mt-2">
            International Cargo Movements in Just Few Simple Steps
          </h3>
          <p className="text-base  mt-2">
            Welcome to OmTrans, your trusted partner in global logistics
            solutions. With an international footprint spanning over 150+
            countries, OmTrans delivers comprehensive freight forwarding
            services through our own offices and strategic partnerships. We
            specialize in providing a full range of logistics services,
            including air, ocean, and land transportation.
          </p>
        </div>
        <div className=" pt-6 sm:pt-0">
          <img src={FF_1} alt="about us image" />
        </div>
      </div>

      {/* Services */}
      <div className="bg-gray-100">
        <div className=" max-w-screen-lg m-auto sm:py-14 py-14">
          <div className="flex flex-wrap items-center justify-center flex-col sm:flex-row py-3   ">
            <div className="py-4  px-6 w-[310px] h-[250px] border-2 border-blue-700 sm:mt-2 mt-0 mx-2">
              <img src={Icon_4} alt="" />
              <div className="pt-2">
                <h3 className="text-2xl pb-2 font-semibold">Air Freight</h3>
                <p className="text-base">
                  Experience rapid transportation with our air freight services,
                  ensuring your goods reach their destination quickly and
                  efficiently.
                </p>
              </div>
            </div>
            <div className="  py-4 px-6 w-[310px] h-[250px] border-2 border-blue-700  sm:mt-2 mt-5 mx-2">
              <img src={Icon_1} alt="" />
              <div className="pt-2">
                <h3 className="text-2xl pb-2 font-semibold">Ocean Freight</h3>
                <p className="text-base">
                  Optimize your shipping costs with our ocean freight services,
                  perfect for large and bulk shipments across international
                  waters.
                </p>
              </div>
            </div>
            <div>
              <div className=" py-4 px-6 w-[310px] h-[250px] border-2 border-blue-700 sm:mt-2 mt-5 mx-2">
                <img src={Icon_3} alt="" />
                <div className="pt-2">
                  <h3 className="text-2xl pb-2 font-semibold">Road Freight</h3>
                  <p className="text-base">
                    Depend on our road freight services for dependable and
                    timely delivery across all regions, supported by a robust
                    network and fleet.
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
            <img src={FF_2} alt="about us image" />
          </div>
          <div className="sm:w-[50%] w-full sm:pl-10 pl-0 sm:py-1 py-5">
            <h3 className="sm:text-4xl text-3xl font-bold text-[#1C1F35] py-2 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-[#ff3d3d] after:mt-3">
              We Support Importers/Exporters from Worldwide Locations
            </h3>
            <div className="list-inside list-disc">
              <ul className="list-disc pl-6 mt-3">
                <li className="">
                  We bring a modern touch to the world of freight forwarding,
                  ensuring cutting-edge solutions for logistics and transport.
                </li>
                <li className="">
                  Providing our clients with end to end visibility with a varied
                  network of carriers, ensuring price & service optimisation.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Extra Features */}

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
                <FaqComponent />
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

export default Freight_forwarding;
