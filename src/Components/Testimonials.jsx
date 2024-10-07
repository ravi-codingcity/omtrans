import React, { useRef, useState } from "react";
import Star from "../assets/Star.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Blue_Arrow from "../assets/arrow1.svg";
import Yellow_Arrow from "../assets/t_arrow.svg";
import User_1 from "../assets/t2.png";
import User_2 from "../assets/t1.png";

import Quote from "../assets/quote.svg";

function Testimonials(props) {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };

  const previous = () => {
    sliderRef.slickPrev();
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="flex items-center justify-between py-5 sm:w-[90%] m-auto px-4 sm:px-0 w-100%">
        <div>
          <h1 className="bg-[#F4F4F4] border-l-4 border-red-600 pl-2 w-28">
            Testimonial
          </h1>
          <p className="text-2xl font-bold">What Our Clients Say</p>
        </div>
        <div className="flex">
          <img
            src={Yellow_Arrow}
            alt=""
            className="cursor-pointer hover:scale-110 duration-300 rounded-md"
            onClick={previous}
          />{" "}
          <img
            src={Blue_Arrow}
            alt=""
            className="cursor-pointer hover:scale-110 duration-300 rounded-md"
            onClick={next}
          />
        </div>
      </div>

      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        <div className="bg-[#F4F4F4] py-6 px-10 h-[355px]">
          <div className="flex justify-evenly  py-4">
            <div className="flex items-center">
              <img src={User_1} alt="" className="w-20" />
              <p className="text-xl font-medium px-4 leading-none">
              Dish TV
                <br />
                <span className="text-base font-medium"></span>
              </p>
            </div>
            <img src={Quote} alt="" className="w-10 sm:w-16"/>
          </div>
          <p>
          We would like to take this opportunity
 & express our sincere thanks and satis
faction in providing import services Ex
 China & Korea till door at our regional
 warehouses in Kolkata, Delhi, Jaipur &
 Pune.
          </p>
          <div className="flex gap-2 py-4">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
          </div>
        </div>

        <div className="bg-[#091242] py-6 px-10 flex-wrap  text-white h-[355px]">
          <div className="flex justify-evenly py-4">
            <div className="flex items-center">
              <img src={User_2} alt="" className="w-20" />
              <p className="text-xl font-medium px-4 leading-none">
              Jindal SAW Ltd
                <br />
                <span className="text-base font-medium"></span>
              </p>
            </div>
            <img src={Quote} alt="" className="w-10 sm:w-16"/>
          </div>
          <p>
          OmTrans Logistics has done a stupendous
 job for Jindal SAW Ltd. We appreciate the 
efforts put in by all for executing the 
clearance and delivery of the pipes till
 the final destination, keeping in mind
 the HSE and Quality standards.
          </p>
          <div className="flex gap-2 py-4">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
          </div>
        </div>

       

      
      </Slider>
    </>
  );
}
export default Testimonials;
