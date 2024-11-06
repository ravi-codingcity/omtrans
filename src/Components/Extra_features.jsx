import React from "react";

function Extra_features(props) {
  return (
    <div className=" px-4 py-5 mt-6  rounded-lg shadow-lg  bg-red-600 w-80 mx-2">
      <div className="flex items-center justify-center w-12 h-12 mx-auto text-red bg-white rounded-md">
        {props.icon}
      </div>

      <h3 className="py-4 text-4xl font-semibold text-white sm:text-2xl ">
        {props.heading}
      </h3>
      <p className="pb-4 text-white text-md  px-2">{props.para}</p>
    </div>
  );
}

export default Extra_features;
