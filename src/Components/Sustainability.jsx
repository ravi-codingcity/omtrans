import React from "react";
import BgImg from "../assets/S_img.jpg";
import Navbar from "../Navbar/Navbar";
import { RiGovernmentLine } from "react-icons/ri";
import { PiStrategyLight } from "react-icons/pi";
import { LuPalmtree } from "react-icons/lu";
import { GiLifeSupport } from "react-icons/gi";
import { GoLaw } from "react-icons/go";
import { BiLineChart } from "react-icons/bi";

import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

function sustainability() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      {/* Header */}
      <div
        className="bg-no-repeat bg-center bg-cover "
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="flex sm:flex-row flex-col items-center justify-around sm:pt-24 pt-4 sm:pb-24 m-auto pb-10 w-[90%]">
          <div className="sm:w-3/5	w-full py-6">
            <p className="text-white sm:text-lg text-sm">OmTrans</p>
            <h1 className="text-white sm:text-[3.4vw] font-bold  leading-none text-4xl">
              Sustainability
            </h1>
          </div>
          <div className="sm:w-2/5 h-44">
           
          </div>
        </div>
      </div>
      <div className=" py-5 w-3/5 m-auto">
        <h1 className="text-4xl font-bold py-2 text-center">
          Towards sustainable supply chains
        </h1>
        <p className="text-2xl font-semibold py-3">
          We keep global supply chains flowing and we are committed to enabling
          decarbonisation across our value chain and in the transport and
          logistic sector
        </p>
        <p className="py-5">
          As a large multinational Logistics Company, we understand our
          important role in the safety and well-being of the people of OmTrans,
          the sustainment and proper management of the environments in which we
          operate, and making the communities where we live and work better
          places to do both.
        </p>
        <p className="py-5">
          These are the pillars of OmTrans corporate citizens. Not only do they
          help us be better people, but they also help us achieve our mission of
          excellence in global logistics. We’re leaders at finding logistics
          solutions for our clients, and the additional leadership in corporate
          citizenship we demonstrate can also help our customers achieve their
          own similar goals.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 max-w-screen-lg items-center m-auto my-5 ">
        {[
          {
            title: "Governance",
            description:
              "Learn about the robust internal and external processes that govern our approach to sustainability.",
            icon: <RiGovernmentLine />,
          },
          {
            title: "Strategy",
            description:
              "See how environmental and social responsibility are an integral part of our business strategy.",
            icon: <PiStrategyLight />,
          },
          {
            title: "Environment",
            description:
              "Discover how we strive to lead the transition to greener, more environmentally-friendly practices.",
            icon: <LuPalmtree />,
          },
          {
            title: "Social Responsibility",
            description:
              "Read about our commitment to offering a safe and inclusive working environment for all employees.",
            icon: <GiLifeSupport />,
          },
          {
            title: "Our Integrity",
            description:
              "Explore how we live up to the highest ethical standards and expect the same from our business partners.",
            icon: <GoLaw />,
          },
          {
            title: "Reporting and Ratings",
            description:
              "Find out more about the internationally recognized guidelines and standards that we use for our sustainability reporting.",
            icon: <BiLineChart />,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-blue-100 w-full sm:w-72 md:w-64 lg:w-72 py-8 px-6 text-center flex flex-col justify-between rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-6xl m-auto text-red-600">{item.icon}</div>
            <h1 className="text-xl font-semibold py-3">{item.title}</h1>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <div className="flex py-20 bg-slate-100 justify-evenly items-center mt-10">
        <div>
          <p className="text-2xl py-5 w-3/5 text-center m-auto font-semibold">
            We continuously work with sustainability across all areas of our
            business, from air, sea and road freight in logistics.
          </p>
          <div className="text-center">
            <button
              onClick={() => {
                navigate("/");
                window.scrollTo(0, 0);
              }}
              onSubmit={(e) => e.preventDefault()}
              type="submit"
              className="bg-red-600 text-white relative px-7 py-3 hover:border-b-1 border-[#ff2b2b] transition-all duration-200 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:-mb-2 after:w-full after:bg-[#ff2b2b] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default sustainability;
