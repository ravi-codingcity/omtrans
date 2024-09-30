import React from "react";
import { useNavigate } from "react-router-dom";

function CTA() {
  const navigate = useNavigate();
  return (
    <div>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-lg px-4 py-28 lg:flex  lg:items-center justify-center">
          <div className=" text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl ">
              Providing Global Logistics Solutions
            </h1>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => {
                  window.scrollTo(0,0)
                  navigate("/lcl_sea_export");
                }}
               className="bg-red-600 text-white  relative px-7 my-2 py-3 hover:border-b-1 border-[#ff2b2b] transition-all duration-200 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:-mb-2 after:w-full after:bg-[#ff2b2b] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
                href="#"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CTA;
