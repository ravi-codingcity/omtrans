import React from "react";
import Icon_sms from "../assets/email.png";
import Icon_location from "../assets/location.png";

function Office_Card(props) {
  return (
    <div className="mx-2">
      <div className="bg-slate-200 my-2 rounded hover:scale-105 duration-300 w-80 h-64">
        <h1 className=" text-xl text-center py-4 px-2 font-bold	text-red-600">
          {props.office}
        </h1>
        <div className="py-2">
          <div className=" flex justify-start items-center py-2 px-3">
            <img src={Icon_location} alt="" className="px-2" />
            <p>
             {props.address}
            </p>
          </div>
          <div className=" flex justify-start items-center py-2 px-3">
            <img src={Icon_sms} alt="" className="px-2" />
            <p className=" ">{props.mail}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Office_Card;
