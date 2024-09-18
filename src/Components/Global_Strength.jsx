import React from "react";

function Global_Strength(props) {
  return (
    <div className="flex justify-center flex-wrap gap-5  items-stretch py-3">
      <div className="text-center py-4  px-3 w-48 bg-red-600 shadow-lg cursor-pointer hover:scale-110 duration-300">
        <img src={props.icon} className="m-auto text-6xl text-white " />
        <h1 className="text-3xl font-bold">{props.heading}</h1>
        <p className="">{props.text}</p>
      </div>
    </div>
  );
}

export default Global_Strength;
