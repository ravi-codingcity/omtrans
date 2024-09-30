import React from "react";

function Icon_tab(props) {
  return (
    <div className="flex items-center  py-4">
      <img src={props.icon} alt="" className="px-4"/>
      <div className="border-l-2 pl-6 pr-2">
        <h3 className="text-2xl pb-2">{props.title}</h3>
        <p className="text-base">{props.description}</p>
      </div>
    </div>
  );
}

export default Icon_tab;
