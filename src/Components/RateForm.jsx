import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TrackShipment from "../../Tracking/TrackShipment";
import { motion } from "framer-motion";

const RateForm = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();
  const [activeForm, setActiveForm] = useState("quote");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption) {
      switch (selectedOption) {
        case "lcl_sea_export":
          navigate("/lcl_sea_export");
          window.scrollTo(0, 0);
          break;
        case "fcl_sea_export":
          navigate("/fcl_sea_export");
          window.scrollTo(0, 0);
          break;
        case "air_export":
          navigate("/air_export");
          window.scrollTo(0, 0);
          break;
        case "lcl_sea_import":
          navigate("/lcl_sea_import");
          window.scrollTo(0, 0);
          break;
        case "fcl_sea_import":
          navigate("/fcl_sea_import");
          window.scrollTo(0, 0);
          break;
        case "air_import":
          navigate("/air_import");
          window.scrollTo(0, 0);
          break;
        default:
          console.log("Please select a valid option");
      }
    } else {
      alert("Please select an option");
    }
  };

  const handleButtonClick = (formType) => {
    setActiveForm(formType);
  };

  const renderForm = () => {
    switch (activeForm) {
      case "quote":
        return (
          <form
            onSubmit={handleSubmit}
            className=" text-center  shadow-lg  mx-auto pt-6  h-48 "
          >
            <motion.span
              initial={{ opacity: 0, y: -200 }} // Start with opacity 0 and 20px above the original position
              animate={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2 className="text-xl md:text-3xl sm:mb-4 mb-0 text-red-600 pb-1">
                Tell us what you need
              </h2>
              <div className="max-w-screen-lg m-auto flex flex-col sm:flex-row justify-center sm:pt-5 pt-2 items-center sm:space-y-0 sm:space-x-4">
                <select
                  className="bg-gray-100 border border-blue-500 focus:ring-blue-500 focus:outline-none col-span-3 text-gray-800 block py-3 px-4 sm:w-[450px] w-80 shadow-md transition-all duration-300 ease-in-out hover:bg-white  pr-10 pl-4"
                  value={selectedOption}
                  onChange={(e) => {
                    setSelectedOption(e.target.value);
                  }}
                >
                  <option value="" disabled>
                    Choose your service
                  </option>
                  <option value="lcl_sea_export">LCL - Sea Export</option>
                  <option value="fcl_sea_export">FCL - Sea Export</option>
                  <option value="air_export">AIR Export</option>
                  <option value="lcl_sea_import">LCL - SEA Import</option>
                  <option value="fcl_sea_import">FCL - SEA Import</option>
                  <option value="air_import">AIR Import</option>
                </select>

                <button
                  type="submit"
                  className="bg-blue-600 text-white mt-3 sm:mt-0 relative px-8 py-2 hover:border-b-1 border-blue-600 transition-all duration-200 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:-mb-2 after:w-full after:bg-[#2663EB] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
                >
                  Request
                </button>
              </div>
            </motion.span>
          </form>
        );

      case "track":
        return <TrackShipment />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap sm:text-xl text-lg sm:font-bold font-semibold bg-red-600">
        <button
          className={`flex-1 py-2 px-1 sm:px-4 duration-300 ${
            activeForm === "quote"
              ? "bg-red-600 font-semibold -translate-y-3 text-white"
              : "bg-gray-300"
          }`}
          onClick={() => handleButtonClick("quote")}
        >
          Get a Quote
        </button>

        <button
          className={`flex-1  py-2 px-2 sm:px-4 duration-300 ${
            activeForm === "track"
              ? "bg-red-600 font-semibold -translate-y-3 text-white"
              : "bg-gray-300"
          }`}
          onClick={() => handleButtonClick("track")}
        >
          Track your Shipment
        </button>
      </div>

      {renderForm()}
    </div>
  );
};

export default RateForm;
