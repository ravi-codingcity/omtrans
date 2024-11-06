import React from "react";


function Choose_icon(props) {
  return (
    <div className="flex  items-center  pb-3">
      <img src={props.icon} alt="" className="pr-3 w-16"/>
      <span className="text-base sm:text-base items-center pr-2 font-semibold">{props.title}</span>
    </div>
  );
}

export default Choose_icon;
