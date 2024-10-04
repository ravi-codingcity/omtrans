import React from "react";
import Om_logo from "../assets/om_logo.jpg";
import tgl_logo from "../assets/tgl_logo.jpg";
import trax_logo from "../assets/trax_logo.jpg";
import transafe_logo from "../assets/transafe_logo.jpg";
import omx_logo from "../assets/omx_logo.jpg";
import telecome_logo from "../assets/telecome_logo.jpg";
import infra_logo from "../assets/infra_logo.jpg";
import rapid_logo from "../assets/rapidshyp_logo.jpg";
import sanjvik_logo from "../assets/sanjvik_logo.jpg";
import goto from "../assets/goto.jpg";
import seair from "../assets/seair.jpg";
import jc_omtrax from "../assets/jc_omtrax.jpg";

function Companies_logo() {
  return (
    <div>
      <div className="flex justify-center  py-8 flex-wrap max-w-screen-lg m-auto">
        <a
          href="https://omlogistics.co.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Om_logo}
            alt=""
            srcset=""
            className="w-36 px-3 hover:scale-110 duration-200 cursor-pointer border-[1px]	border-black my-2 mx-1 h-[70px]"
          />
        </a>

        <a
          href="https://tran-safe.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={tgl_logo}
            alt=""
            srcset=""
            className="w-36 px-3 hover:scale-110 duration-200 cursor-pointer border-[1px]	border-black my-2 mx-1 h-[70px]"
          />
        </a>

        <a
          href="https://transafeservices.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={transafe_logo}
            alt=""
            srcset=""
            className="w-36 px-3 hover:scale-110 duration-200 cursor-pointer border-[1px]	border-black my-2 mx-1 h-[70px]"
          />
        </a>

        <a
          href="https://omxinfo.co.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={omx_logo}
            alt=""
            srcset=""
            className="w-36 px-3 hover:scale-110 duration-200 cursor-pointer border-[1px]	border-black my-2 mx-1 h-[70px]"
          />
        </a>

        <a
          href="https://omtelecom.co.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={telecome_logo}
            alt=""
            srcset=""
            className="w-36 px-3 hover:scale-110 duration-200 cursor-pointer border-[1px]	border-black my-2 mx-1 h-[70px]"
          />
        </a>

        <a
          href="https://www.omtrax.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={trax_logo}
            alt=""
            srcset=""
            className="w-36 px-3 hover:scale-110 duration-200 cursor-pointer border-[1px]	border-black my-2 mx-1 h-[70px]"
          />
        </a>

        <a
          href="http://www.ominfra.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={infra_logo}
            alt=""
            srcset=""
            className="w-36 px-3 hover:scale-110 duration-200 cursor-pointer border-[1px]	border-black my-2 mx-1 h-[70px]"
          />
        </a>

        <a
          href="https://www.rapidshyp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={rapid_logo}
            alt=""
            srcset=""
            className="w-36 px-3 hover:scale-110 duration-200 cursor-pointer border-[1px]	border-black my-2 mx-1 h-[70px]"
          />
        </a>

        <a href="" rel="noopener noreferrer">
          <img
            src={sanjvik_logo}
            alt=""
            srcset=""
            className="w-36 px-3 hover:scale-110 duration-200 cursor-pointer border-[1px]	border-black my-2 mx-1 h-[70px]"
          />
        </a>

        <a
          href="https://www.kaisoten.co.jp/english/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={goto}
            alt=""
            srcset=""
            className="w-36 px-3 hover:scale-110 duration-200 cursor-pointer border-[1px]	border-black my-2 mx-1 h-[70px]"
          />
        </a>

        <a href="https://www.seairlinks.vn/" target="_blank" rel="noopener noreferrer">
          <img
            src={seair}
            alt=""
            srcset=""
            className="w-36 px-3 hover:scale-110 duration-200 cursor-pointer border-[1px]	border-black my-2 mx-1 h-[70px]"
          />
        </a>
        <a href="">
          <img
            src={jc_omtrax}
            alt="Company Logo"
            srcSet=""
            className="w-36 px-3 hover:scale-110 duration-200 cursor-pointer border-[1px] border-black my-2 mx-1 h-[70px]"
          />
        </a>
      </div>
    </div>
  );
}

export default Companies_logo;
