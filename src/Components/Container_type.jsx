import React, { useState } from "react";

const DropdownWithManualInput = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [manualInput, setManualInput] = useState("");
  const [isManualInputEnabled, setIsManualInputEnabled] = useState(false);

  const options = [
    "20' Standard",
    "40' Standard",
    "40' High Cube",
    "20' Open Top",
    "40' Open Top",
    "20' Refrigerated ",
    "40' Refrigerated",
    "20' Collapsible Flat Rack",
    "40' Collapsible Flat Rack",
    "Other",
  ];

  const handleOptionChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);

    if (value === "Other") {
      setIsManualInputEnabled(true);
      setManualInput(""); // Reset manual input when switching to 'Other'
    } else {
      setIsManualInputEnabled(false);
      setManualInput(value); // Set manual input to selected option if it's not 'Other'
    }
  };

  const handleManualInputChange = (e) => {
    setManualInput(e.target.value);
  };

  return (
    <>
      <div className="my-3 grid grid-cols-4 grid-rows-1 items-center bg-white py-1 px-5">
        <label
          htmlFor="type_of_container"
          className="block  font-medium text-gray-900  border-r-2"
        >
          Type of Container
        </label>
        <select
          id="type_of_container"
          name="type_of_container"
          className="bg-white  focus:ring-white focus:outline-none focus:ring-0 col-span-3  text-gray-900 text-sm rounded-lg  block  p-2.5"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="" disabled selected>
            Please choose an Container Type
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        {isManualInputEnabled && (
          <input
            type="text"
            placeholder="Enter your option"
            className="bg-white  focus:ring-white focus:outline-none focus:ring-0 col-span-3  text-gray-900 text-sm rounded-lg  block  p-2.5"
            value={manualInput}
            onChange={handleManualInputChange}
          />
        )}
      </div>
    </>
  );
};

export default DropdownWithManualInput;
