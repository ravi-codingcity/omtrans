import React from "react";
import Calendar from "../assets/calendar.svg";

function Blog(props) {
  return (
    <div className="flex flex-col sm:flex-row sm:w-[1000px] m-auto justify-evenly  py-8 px-2 border-t-2 border-gray-300">
      <div>
        <img src={props.img} alt="" />
      </div>
      <div className="text-center sm:py-0 py-4">
        <img src={Calendar} alt="" className="m-auto" />
        <p className="font-normal text-gray-600 text-base pt-1">Posted on</p>
        <p className="text-4xl font-bold	leading-none	py-2">
          {props.date}
          <p className="font-normal text-xl">{props.month}</p>
          <p className="font-normal text-lg">{props.year}</p>
        </p>
      </div>
      <div className="sm:w-1/3 border-l-2 border-gray-300 pl-5">
        <p className="text-2xl font-semibold text-red-600">{props.title}</p>
        <p className="text-normal py-2 text-gray-500">{props.description}</p>
      </div>
    </div>
  );
}

export default Blog;
