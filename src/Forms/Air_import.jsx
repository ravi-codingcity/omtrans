import React, { useState, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import Scroll_Top from "../Components/Scroll_Top";
import { IoLocationOutline } from "react-icons/io5";
import { BsBoxSeamFill, BsBoxFill } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
import { GiCargoCrate } from "react-icons/gi";
import { FaBoxOpen } from "react-icons/fa6";
import { GoPackageDependents } from "react-icons/go";
import { FaSearchLocation } from "react-icons/fa";
import { LuPackageCheck } from "react-icons/lu";
import { GiWeightScale } from "react-icons/gi";
import { FaBoxes } from "react-icons/fa";
import { FaPlaneDeparture } from "react-icons/fa";

function Air_import() {
  const navigate = useNavigate();
  const form = useRef();
  const [hsCode, setHsCode] = useState("");
  const [Fix_shipment, setShipment] = useState("Air Export");
  const [customHSCode, setCustomHSCode] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [terms, setTerms] = useState("");
  const [hazeCargo, setHazeCargo] = useState(false);
  const [form1Data, setForm1Data] = useState({
    shipment: "Air Export",
    airport_of_departure: "",
    airport_of_destination: "",
    cargo_weight: "",
    pick_up_address: "",
    delivery_address: "",
    number_of_pkgs: "",
    pkg_dimension: "",
    Items: "",
    cargo_value: "",
    hs_code: "",
    haze_cargo: "",
    Terms: "",
  });

  // Handle form inputs and updates
  const handleChange = (e) => {
    setForm1Data({
      ...form1Data,
      [e.target.name]: e.target.value,
    });
  };

  // Handle HS Code select change
  const handleSelectChange = (e) => {
    if (e.target.value === "custom") {
      setIsCustom(true);
      setHsCode("");
    } else {
      setIsCustom(false);
      setHsCode(e.target.value);
    }
  };

  // Handle custom HS code input change
  const handleInputChange = (e) => {
    setCustomHSCode(e.target.value);
  };

  // Handle shipment change
  const handleChangeshipment = (e) => {
    setShipment(e.target.value);
    setForm1Data((prevData) => ({
      ...prevData,
      shipment: e.target.value, // Update shipment in form1Data
    }));
  };

  // Handle radio button change
  const handleRadioChange = (e) => {
    setTerms(e.target.value);
    setForm1Data((prevData) => ({
      ...prevData,
      Terms: e.target.value, // Update terms in form1Data
    }));
  };

  // Handle checkbox toggle
  const handleCheckboxChange = () => {
    setHazeCargo(!hazeCargo);
    setForm1Data((prevData) => ({
      ...prevData,
      haze_cargo: !hazeCargo, // Update haze cargo in form1Data
    }));
  };

  // Save form data to local storage and navigate to next page
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      ...form1Data,
      hs_code: isCustom ? customHSCode : hsCode,
      terms,
      haze_cargo: hazeCargo,
    };

    localStorage.setItem("form1Data", JSON.stringify(formData)); // Save form data to local storage

    navigate("/air_import/step2");
    window.scrollTo(0, 0);
  };

  const hsCodes = [
    "010121", // Horses
    "020110", // Bovine carcasses, fresh or chilled
    "030212", // Salmon, fresh or chilled
    "040221", // Milk and cream, in powder form
    "050400", // Guts, bladders, and stomachs of animals
    "060110", // Bulbs, tubers, tuberous roots, corms, crowns, and rhizomes
    "070200", // Tomatoes, fresh or chilled
    "080300", // Bananas, including plantains
    "090210", // Green tea, not fermented
    "100610", // Rice, in the husk (paddy or rough)
    "110100", // Wheat or meslin flour
    "120100", // Soya beans, whether or not broken
    "130120", // Natural gums, resins, and gum resins
    "140490", // Vegetable products, not elsewhere specified or included
    "150710", // Crude soya bean oil, whether or not degummed
    "160250", // Meat or meat offal
    "170199", // Cane or beet sugar
    "180620", // Chocolate and other food preparations containing cocoa
    "190531", // Sweet biscuits
    "200410", // Potatoes, prepared or preserved
    "210390", // Sauces and preparations
    "220300", // Beer made from malt
    "230910", // Dog or cat food
    "240220", // Cigarettes containing tobacco
    "250100", // Salt (including table salt)
    "260111", // Iron ores and concentrates
    "270112", // Bituminous coal
    "280440", // Oxygen
    "290531", // Ethylene glycol (ethanediol)
    "300490", // Medicaments (pharmaceutical products)
    "310210", // Urea, whether or not in aqueous solution
    "320890", // Paints and varnishes
    "330210", // Mixtures of odoriferous substances
    "340120", // Soap in forms of bars, cakes, or molded
    "350610", // Products suitable for use as glues or adhesives
    "360300", // Safety fuses; detonating fuses
    "370110", // Photographic plates and films
    "380830", // Herbicides, anti-sprouting products
    "390110", // Polyethylene, in primary forms
    "401110", // New pneumatic tires
    "420221", // Handbags, with outer surface of leather
    "440710", // Coniferous wood sawn or chipped lengthwise
    "450410", // Blocks, plates, sheets, strip of agglomerated cork
    "480255", // Uncoated paper and paperboard
    "490199", // Printed books, brochures, and similar printed matter
    "500200", // Raw silk (not thrown)
    "520100", // Cotton, not carded or combed
    "610910", // T-shirts, singlets, and other vests
    "620342", // Men's or boys' trousers, bib and brace overalls
    "630790", // Made-up articles of textile materials
    "640399", // Footwear with rubber/plastic soles and leather uppers
    "650500", // Hats and other headgear
    "680293", // Worked marble, travertine, and alabaster
    "690890", // Glazed ceramic flags and paving
    "700510", // Float glass and surface ground or polished glass
    "710812", // Gold, unwrought or semi-manufactured
    "720449", // Ferrous waste and scrap
    "730890", // Iron or steel structures
    "740311", // Copper, refined, in unwrought forms
    "760429", // Aluminum alloys, in unwrought forms
    "820730", // Tools for pressing, stamping, or punching
    "840810", // Marine propulsion engines
    "850440", // Static converters
    "860900", // Containers for one or more modes of transport
    "870322", // Motor vehicles for the transport of persons
    "890110", // Cruise ships, excursion boats, and similar vessels
    "900110", // Optical fibers and optical fiber bundles
    "910211", // Wrist-watches, electrically operated
    "940320", // Metal furniture
    "950450", // Video game consoles and machines
    "960810", // Ball-point pens
    "970110", // Paintings, drawings, and pastels
  ];

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center bg-slate-200">
        <div className="max-w-screen-lg m-auto py-3">
          <h1 className="text-4xl py-3 font-bold">Air Import</h1>
          <p className="py-1">
            Fill in our form below and our freight forward experts will contact
            you as soon as possible.
          </p>
        </div>
      </div>
      <div className="py-5 bg-slate-100">
        <div className="max-w-screen-md m-auto">
          <div className="flex items-center py-3">
            <hr className="flex-grow border-gray-300" />
            <span className="px-3 text-3xl font-bold text-red-500">Step 1</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <h1 className="text-2xl pb-3 font-bold text-center ">
            Describe Your Shipment Details
          </h1>
        </div>
        {/*   <Form_animation />*/}

        <form ref={form} onSubmit={handleSubmit}>
          <div className="max-w-screen-lg m-auto px-4 text-base">
            {/* Form fields here */}
            <div className="pt-2 pb-6">
              <div className="flex items-center space-x-4 py-3">
                <h1 className="text-xl font-bold text-red-600">Routes </h1>{" "}
                <FaPlaneDeparture className="ml-1 text-4xl text-red-600" />
                <hr className="flex-grow h-[2px] bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-full border-0 animate-pulse" />
              </div>

              <div className="grid grid-cols-2 grid-rows-1">
                <div className="my-3 hidden grid-cols-4 grid-rows-1 items-center bg-white py-1 px-5">
                  <label
                    for="shipment"
                    className="block  font-medium text-gray-900  border-r-2"
                  >
                    Shipment for
                  </label>
                  <select
                    name="shipment"
                    type="text"
                    id="shipment"
                    value={Fix_shipment}
                    required
                    onChange={handleChangeshipment}
                    className="bg-white  focus:ring-white focus:outline-none focus:ring-0 col-span-3  text-gray-900 text-sm rounded-lg  block  p-2.5"
                  >
                    <option value="Air Import" selected>
                      Air Import
                    </option>
                  </select>
                </div>

                {/* Port of Loading Field */}

                <div className="my-2 flex items-center bg-white px-5 mx-1 py-1 border border-blue-600">
                  <label
                    htmlFor="airport_of_departure"
                    className="flex items-center font-medium text-gray-900 border-r-2 border-red-600 pr-3"
                  >
                    Airport of Departure
                    <IoLocationOutline className="ml-1 text-2xl text-red-600" />
                  </label>
                  <input
                    name="airport_of_departure"
                    type="text"
                    id="airport_of_departure"
                    className="bg-white focus:ring-white focus:outline-none focus:ring-0 text-gray-900 text-sm rounded-lg p-2.5 flex-grow ml-3"
                    placeholder="Enter Your Airport of Departure"
                    required
                    onChange={handleChange}
                  />
                </div>
                {/* Port of Destination Field */}
                <div className="my-2 flex items-center bg-white px-5 mx-1 py-1 border border-blue-600">
                  <label
                    htmlFor="airport_of_destination"
                    className="flex items-center font-medium text-gray-900 border-r-2 border-red-600 pr-3"
                  >
                    Airport of Destination{" "}
                    <IoLocationOutline className="ml-1 text-2xl text-red-600" />
                  </label>
                  <input
                    name="airport_of_destination"
                    type="text"
                    id="airport_of_destination"
                    className="bg-white focus:ring-white focus:outline-none focus:ring-0 text-gray-900 text-sm rounded-lg p-2.5 flex-grow ml-3"
                    placeholder="Enter Your Airport of Destination"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="pt-2 pb-6">
              <div className="flex items-center space-x-4 py-3">
                <h1 className="text-xl font-bold text-red-600">
                  Package Details
                </h1>
                <GoPackageDependents className="ml-1 text-4xl text-red-600" />
                <hr className="flex-grow h-[2px] bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-full border-0 animate-pulse" />
              </div>

              <div className="grid grid-cols-2 grid-rows-1">
                {/* Number of PKGsField */}
                <div className="my-2 flex items-center bg-white px-5 mx-1 py-1 border border-blue-600">
                  <label
                    htmlFor="number_of_pkgs"
                    className="flex items-center font-medium text-gray-900 border-r-2 border-red-600 pr-3"
                  >
                    Number of PKGs{" "}
                    <BsBoxSeamFill className="ml-2 text-2xl text-red-600" />
                  </label>
                  <input
                    name="number_of_pkgs"
                    type="text"
                    id="number_of_pkgs"
                    className="bg-white focus:ring-white focus:outline-none focus:ring-0 text-gray-900 text-sm rounded-lg p-2.5 flex-grow ml-3"
                    placeholder="Enter Your Number of PKG"
                    onChange={handleChange}
                  />
                </div>

                {/* PKG Dimension Field */}
                <div className="my-2 flex items-center bg-white px-5 mx-1 py-1 border border-blue-600">
                  <label
                    htmlFor="pkg_dimension"
                    className="flex items-center font-medium text-gray-900 border-r-2 border-red-600 pr-3"
                  >
                    PKG Dimension{" "}
                    <BsBoxFill className="ml-2 text-2xl text-red-600" />
                  </label>
                  <input
                    name="pkg_dimension"
                    type="text"
                    id="pkg_dimension"
                    className="bg-white focus:ring-white focus:outline-none focus:ring-0 text-gray-900 text-sm rounded-lg p-2.5 flex-grow ml-3"
                    placeholder="Enter Your PKG Dimension"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 grid-rows-1 items-center">
                {/* Terms Section */}
                <div className="my-2 grid grid-cols-4 items-center bg-white px-5 mx-1 border border-blue-600 py-2">
                  <label
                    htmlFor="Terms"
                    className=" flex items-center font-medium text-gray-900 border-r-2 border-red-600"
                  >
                    Terms
                    <GiCargoCrate className="ml-1 text-4xl text-red-600" />
                  </label>
                  <div className="col-span-3 flex items-center space-x-4 ml-3">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="CIF"
                        name="Terms"
                        value="CIF"
                        className="focus:ring-red-500 h-4 w-4 text-red-600 border-blue-600"
                        onChange={handleRadioChange}
                      />
                      <label
                        htmlFor="CIF"
                        className="ml-2 text-gray-900 text-sm"
                      >
                        CIF
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="DAP"
                        name="Terms"
                        value="DAP"
                        className="focus:ring-red-500 h-4 w-4 text-red-600 border-blue-600"
                        onChange={handleRadioChange}
                      />
                      <label
                        htmlFor="DAP"
                        className="ml-2 text-gray-900 text-sm"
                      >
                        DAP
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="DDP"
                        name="Terms"
                        value="DDP"
                        className="focus:ring-red-500 h-4 w-4 text-red-600 border-blue-600"
                        onChange={handleRadioChange}
                      />
                      <label
                        htmlFor="DDP"
                        className="ml-2 text-gray-900 text-sm"
                      >
                        DDP
                      </label>
                    </div>
                  </div>
                </div>

                {/* HS Code Section */}
                <div className="my-2 flex items-center bg-white px-5 mx-1 py-1 border border-blue-600">
                  <label
                    htmlFor="hs_code"
                    className="flex items-center font-medium text-gray-900 border-r-2 border-red-600 pr-3"
                  >
                    HS Code <FaBoxOpen className="ml-2 text-2xl text-red-600" />
                  </label>
                  <select
                    name="hs_code"
                    id="hs_code"
                    className="bg-white focus:ring-white focus:outline-none focus:ring-0 text-gray-900 text-sm rounded-lg p-2.5 flex-grow ml-3"
                    value={hsCode}
                    onChange={handleSelectChange}
                  >
                    <option value="" disabled>
                      Select HS Code
                    </option>
                    {hsCodes.map((code) => (
                      <option key={code} value={code}>
                        {code}
                      </option>
                    ))}
                  </select>
                  {isCustom && (
                    <input
                      type="text"
                      placeholder="Enter Custom HS Code"
                      value={customHSCode}
                      onChange={handleInputChange}
                      className="bg-white focus:ring-white focus:outline-none focus:ring-0 text-gray-900 text-sm rounded-lg p-2.5 ml-3"
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="pt-2 pb-6">
              <div className="flex items-center space-x-4 py-3">
                <h1 className="text-xl font-bold text-red-600">
                  Pick and Drop Address
                </h1>{" "}
                <FaSearchLocation className="ml-1 text-4xl text-red-600" />
                <hr className="flex-grow h-[2px] bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-full border-0 animate-pulse" />
              </div>

              <div className="grid grid-cols-2 grid-rows-1">
                {/* Pick Up Address Field */}
                <div className="my-2 flex items-center bg-white px-5 mx-1 py-1 border border-blue-600">
                  <label
                    htmlFor="pick_up_address"
                    className="flex items-center font-medium text-gray-900 border-r-2 border-red-600 pr-3"
                  >
                    Pick Up Address{" "}
                    <IoLocationOutline className="ml-1 text-2xl text-red-600" />
                  </label>
                  <input
                    name="pick_up_address"
                    type="text"
                    id="pick_up_address"
                    className="bg-white focus:ring-white focus:outline-none focus:ring-0 text-gray-900 text-sm rounded-lg p-2.5 flex-grow ml-3"
                    placeholder="Enter Your Pick up Address"
                    onChange={handleChange}
                  />
                </div>

                {/* Delivery Address Field */}
                <div className="my-2 flex items-center bg-white px-5 mx-1 py-1 border border-blue-600">
                  <label
                    htmlFor="delivery_address"
                    className="flex items-center font-medium text-gray-900 border-r-2 border-red-600 pr-3"
                  >
                    Delivery Address
                    <IoLocationOutline className="ml-1 text-2xl text-red-600" />
                  </label>
                  <input
                    name="delivery_address"
                    type="text"
                    id="delivery_address"
                    className="bg-white focus:ring-white focus:outline-none focus:ring-0 text-gray-900 text-sm rounded-lg p-2.5 flex-grow ml-3"
                    placeholder="In case of term DDP or DAP"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 py-3">
              <h1 className="text-xl font-bold text-red-600">Cargo Details</h1>
              <FaBoxes className="ml-1 text-4xl text-red-600" />
              <hr className="flex-grow h-[2px] bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-full border-0 animate-pulse" />
            </div>

            <div className="grid grid-cols-2 grid-rows-1">
              {/* Pick Up Address Field */}
              <div className="my-2 flex items-center bg-white px-5 mx-1 py-1 border border-blue-600">
                <label
                  htmlFor="Cargo Weight"
                  className="flex items-center font-medium text-gray-900 border-r-2 border-red-600 pr-3"
                >
                  Cargo Weight
                  <GiWeightScale className="ml-2 text-2xl text-red-600" />
                </label>
                <input
                  name="cargo_weight"
                  type="text"
                  id="Cargo Weight"
                  className="bg-white focus:ring-white focus:outline-none focus:ring-0 text-gray-900 text-sm rounded-lg p-2.5 flex-grow ml-3"
                  placeholder="Enter Your Cargo Weight"
                  onChange={handleChange}
                />
              </div>

              {/* Delivery Address Field */}
              <div className="my-2 flex items-center bg-white px-5 mx-1 py-1 border border-blue-600">
                <label
                  htmlFor="cargo_value"
                  className="flex items-center font-medium text-gray-900 border-r-2 border-red-600 pr-3"
                >
                  Cargo Value
                  <MdAttachMoney className="ml-1 text-2xl text-red-600" />
                </label>
                <input
                  name="cargo_value"
                  type="text"
                  id="cargo_value"
                  className="bg-white focus:ring-white focus:outline-none focus:ring-0 text-gray-900 text-sm rounded-lg p-2.5 flex-grow ml-3"
                  placeholder="Enter Your Cargo Value"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 grid-rows-1">
              {/* Checkbox for Haze Cargo */}
              <div className="my-2 flex items-center bg-white px-5 mx-1 py-1 border border-blue-600">
                <input
                  type="checkbox"
                  id="haze_cargo"
                  name="haze_cargo"
                  checked={hazeCargo}
                  onChange={handleCheckboxChange}
                  className="ml-3 h-4 w-4 text-red-600  focus:ring-red-500"
                />
                <label
                  htmlFor="haze_cargo"
                  className="flex items-center font-medium text-gray-900 px-2"
                >
                  Haze Cargo <span className="ml-2 animate-pulse">🔥</span>
                </label>
              </div>

              {/* Items Field */}
              <div className="my-2 flex items-center bg-white px-5 mx-1 py-1 border border-blue-600">
                <label
                  htmlFor="Items"
                  className="flex items-center font-medium text-gray-900 border-r-2 border-red-600 pr-3"
                >
                  Items
                  <LuPackageCheck className="ml-2 text-2xl text-red-600" />
                </label>
                <input
                  name="Items"
                  type="text"
                  id="Items"
                  className="bg-white focus:ring-white focus:outline-none focus:ring-0 text-gray-900 text-sm rounded-lg p-2.5 flex-grow ml-3"
                  placeholder="Enter Your Item"
                  onChange={handleChange}
                />
              </div>

              {/* Delivery Address Field */}
            </div>

            {/* Submit Button */}
            <div className="my-3 flex justify-center">
              <button
                type="submit"
                className="bg-red-600 text-white font-semibold relative px-5 py-3 hover:border-b-1 border-[#ff2b2b] transition-all duration-200 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:-mb-2 after:w-full after:bg-[#ff2b2b] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
              >
                Next Page
              </button>
            </div>
          </div>
        </form>
      </div>
      <Scroll_Top />
      <Footer />
    </div>
  );
}

export default Air_import;
