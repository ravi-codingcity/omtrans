import { motion } from "framer-motion";
import { useState } from "react";

export default function TrackShipment() {
  const [selectedTrackingOption, setSelectedTrackingOption] = useState("");
  const [trackingNo, setTrackingNo] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    let trackingUrl = "";

    switch (selectedTrackingOption) {
      case "Container_Tracking":
        if (trackingNo) {
          trackingUrl = `http://www.efreightsuite.com/webtools/eContnr/home_container_main.aspx?company_code=S2OMT&container_no=${trackingNo}`;
        }
        break;
      case "Booking_Tracking":
        if (trackingNo) {
          trackingUrl = `http://www.efreightsuite.com/webtools/TracknTrace/booking_result.aspx?company_code=S2OMT&booking_no=${trackingNo}&remark_status=true`;
        }
        break;
      case "HBL_Tracking":
        if (trackingNo) {
          trackingUrl = `http://www.efreightsuite.com/webtools/trackntrace/hbldisplay.aspx?company_code=S2OMT&hbl_no=${trackingNo}`;
        }

        break;
      case "MAWB_Tracking":
        if (trackingNo) {
          trackingUrl = `http://efreightsuite.com/webtools/trackntrace/mawb_display.aspx?company_code=S2OMT&mawb_no=${trackingNo}`;
        }
        break;
      case "HAWB_Tracking":
        if (trackingNo) {
          trackingUrl = `http://www.efreightsuite.com/webtools/TracknTrace/hawb_result.aspx?company_code=S2OMT&hawb_no=${trackingNo}`;
        }
        break;
      case "MBL_Tracking":
        if (trackingNo) {
          trackingUrl = `http://efreightsuite.com/webtools/trackntrace/obl_display.aspx?OBL_No=${trackingNo}&company_code=S2OMT&remark_status=true`;
        }
        break;
      default:
        setError(
          "Please select a valid tracking option and enter a tracking number."
        );
        return;
    }

    if (trackingUrl) {
      window.open(trackingUrl, "_blank");
    } else {
      setError("Please enter a valid tracking number.");
    }
  };

  return (
    <div className="bg-white h-[210px] sm:h-48 shadow-lg mx-auto my-3 sm:my-6">
      <motion.span
        initial={{ opacity: 0, y: -200 }} // Start with opacity 0 and 20px above the original position
        animate={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <form onSubmit={handleSubmit} className="text-center ">
          <h2 className="text-xl md:text-3xl sm:mb-4 mb-0 text-red-600 ">
            Track Your Shipment
          </h2>
          <div className="sm:pb-3 pb-0 sm:max-w-screen-lg max-w-screen-sm px-1 m-auto">
            <div className="flex flex-wrap justify-center space-x-4 my-2 sm:my-3">
              <label className="inline-flex items-center space-x-2">
                <input
                  type="radio"
                  value="Container_Tracking"
                  checked={selectedTrackingOption === "Container_Tracking"}
                  onChange={(e) => setSelectedTrackingOption(e.target.value)}
                  className="form-radio  text-red-600 hover:scale-110 duration-200 cursor-pointer"
                />
                <span>Container No</span>
              </label>

              <label className="inline-flex items-center space-x-2">
                <input
                  type="radio"
                  value="HBL_Tracking"
                  checked={selectedTrackingOption === "HBL_Tracking"}
                  onChange={(e) => setSelectedTrackingOption(e.target.value)}
                  className="form-radio text-red-600 hover:scale-110 duration-200 cursor-pointer"
                />
                <span className="text-gray-700">HBL No</span>
              </label>

              <label className="inline-flex items-center space-x-2">
                <input
                  type="radio"
                  value="MAWB_Tracking"
                  checked={selectedTrackingOption === "MAWB_Tracking"}
                  onChange={(e) => setSelectedTrackingOption(e.target.value)}
                  className="form-radio text-red-600 hover:scale-110 duration-200 cursor-pointer"
                />
                <span className="text-gray-700">MAWB No</span>
              </label>

              <label className="inline-flex items-center space-x-2">
                <input
                  type="radio"
                  value="HAWB_Tracking"
                  checked={selectedTrackingOption === "HAWB_Tracking"}
                  onChange={(e) => setSelectedTrackingOption(e.target.value)}
                  className="form-radio text-red-600 hover:scale-110 duration-200 cursor-pointer"
                />
                <span className="text-gray-700">HAWB No</span>
              </label>

              <label className="inline-flex items-center space-x-2">
                <input
                  type="radio"
                  value="MBL_Tracking"
                  checked={selectedTrackingOption === "MBL_Tracking"}
                  onChange={(e) => setSelectedTrackingOption(e.target.value)}
                  className="form-radio text-red-600 hover:scale-110 duration-200 cursor-pointer"
                />
                <span className="text-gray-700">MBL/OBL</span>
              </label>
            </div>
          </div>

          <div className="max-w-screen-md m-auto ">
            <div className="flex sm:flex-row flex-col items-center justify-center  space-x-4">
              {/* Input Field */}
              <div className="flex-initial bg-white py-1 border border-blue-600 w-[315px]">
                <input
                  type="text"
                  placeholder={`Enter ${selectedTrackingOption
                    .replace("_Tracking", "")
                    .replace("_", " ")} Number`}
                  className="bg-white focus:ring-0 focus:outline-none text-gray-900 text-sm px-4 py-2 w-[310px]"
                  value={trackingNo}
                  onChange={(e) => setTrackingNo(e.target.value)}
                />
              </div>
              {/* Button */}
              <div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 sm:mt-0 mt-3  hover:border-b-1 border-blue-600 transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-[3px] after:-mb-2 after:w-full after:bg-[#2663EB] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
                >
                  Track Shipment
                </button>
              </div>
            </div>
          </div>

          {error && <p className="text-red-600 mt-4">{error}</p>}
        </form>
      </motion.span>
    </div>
  );
}
