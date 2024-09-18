import React from "react";
import Om_logo from "../assets/om_logo.jpg";
import tgl_logo from "../assets/tgl_logo.jpg";
import trax_logo from "../assets/trax_logo.jpg";
import transafe_logo from "../assets/transafe_logo.jpg";
import omx_logo from "../assets/omx_logo.jpg";
import telecome_logo from "../assets/telecome_logo.jpg";
import infra_logo from "../assets/infra_logo.jpg";


function Companies_logo() {
  return (
    <div>
      <div className="flex justify-center  py-8 flex-wrap">
        <img
          src={Om_logo}
          alt=""
          srcset=""
          className="w-40 px-3 hover:scale-110 duration-200 cursor-pointer border-[1px]	border-black my-2 mx-1 h-full"
        />
        <img
          src={tgl_logo}
          alt=""
          srcset=""
          className="w-40 px-3 hover:scale-110 duration-200 cursor-pointer border-[1px]	border-black my-2 mx-1 h-full"
        />
        <img
          src={transafe_logo}
          alt=""
          srcset=""
          className="w-40 px-3 hover:scale-110 duration-200 cursor-pointer border-[1px]	border-black my-2 mx-1 h-full"
        />
        <img
          src={omx_logo}
          alt=""
          srcset=""
          className="w-40 px-3 hover:scale-110 duration-200 cursor-pointer border-[1px]	border-black my-2 mx-1 h-full"
        />
        <img
          src={telecome_logo}
          alt=""
          srcset=""
          className="w-40 px-3 hover:scale-110 duration-200 cursor-pointer border-[1px]	border-black my-2 mx-1 h-full"
        />
        <img
          src={trax_logo}
          alt=""
          srcset=""
          className="w-40 px-3 hover:scale-110 duration-200 cursor-pointer border-[1px]	border-black my-2 mx-1 h-full"
        />
        <img
          src={infra_logo}
          alt=""
          srcset=""
          className="w-40 px-3 hover:scale-110 duration-200 cursor-pointer border-[1px]	border-black my-2 mx-1 h-full"
        />
      </div>
    </div>
  );
}

export default Companies_logo;
