import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

function Experts(props) {
  return (
    <div className="px-4">
      <img src={props.img} alt="" />
      <div className="h-16 bg-blue-950 text-white w-[250px] py-2 absolute">
        <p className="font-bold text-xl  px-4">{props.name}</p>
        <span className="text-base px-4">{props.title}</span>
      </div>
      <div className="bg-[#FFB629] w-[130px] h-12 relative left-[165px] py-1 -top-10  flex justify-evenly items-center">
        <FaFacebook className="text-2xl  text-[#1C1F35] hover:scale-110 duration-300 cursor-pointer" />
        <FaLinkedin className="text-2xl  text-[#1C1F35] hover:scale-110 duration-300 cursor-pointer" />
        <FaInstagram className="text-2xl  text-[#1C1F35] hover:scale-110 duration-300 cursor-pointer" />
      </div>
    </div>
  );
}

export default Experts;
