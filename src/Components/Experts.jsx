import React from "react";
import { FaLinkedin } from "react-icons/fa";

function Experts(props) {
  return (
    <div className="px-4">
      <img src={props.img} alt="" />
      <div className="h-16 bg-blue-950 text-white w-[250px] py-2 flex justify-around items-center">
        <div>
          <p className="font-bold text-xl  px-4">{props.name}</p>
          <span className="text-base px-4">{props.title}</span>
        </div>
        <div className="text-white">
          <a href={props.linkedinUrl} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl hover:scale-110 duration-300 cursor-pointer mx-1" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Experts;
