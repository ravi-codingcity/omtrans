import React, { useRef, useState } from "react";
import Star from "../assets/Star.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Blue_Arrow from "../assets/arrow1.svg";
import Yellow_Arrow from "../assets/t_arrow.svg";
import User_1 from "../assets/t3.png";
import User_2 from "../assets/t2.png";
import User_3 from "../assets/t1.png";
import User_4 from "../assets/t4.png";
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
        <div className="bg-[#F4F4F4] py-6 px-10 h-[340px]">
          <div className="flex justify-evenly  py-4">
            <div className="flex items-center">
              <img src={User_1} alt="" className="w-20" />
              <p className="text-xl font-medium px-4 leading-none">
                Mr. Rakesh Singh
                <br />
                <span className="text-base font-medium">Jindal Group</span>
              </p>
            </div>
            <img src={Quote} alt="" />
          </div>
          <p>
            We appreciate OmTrans Logistics for Very Good service in Air and
            Train movement for TAFE Critical responsiveness and on time delivery
            is really Good. Keep it up.
          </p>
          <div className="flex gap-2 py-4">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
          </div>
        </div>

        <div className="bg-[#091242] py-6 px-10 flex-wrap  text-white h-[340px]">
          <div className="flex justify-evenly py-4">
            <div className="flex items-center">
              <img src={User_2} alt="" className="w-20" />
              <p className="text-xl font-medium px-4 leading-none">
                Mr. Mukesh Kumar
                <br />
                <span className="text-base font-medium">Tata Steel</span>
              </p>
            </div>
            <img src={Quote} alt="" />
          </div>
          <p>
            Outstanding service and professionalism from OmTrans. Their air
            freight solutions have been a game-changer for our business. We look
            forward to continuing our partnership.
          </p>
          <div className="flex gap-2 py-4">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
          </div>
        </div>

        <div className="bg-[#F4F4F4] py-6 px-10 h-[340px]">
          <div className="flex justify-evenly py-4">
            <div className="flex items-center">
              <img src={User_3} alt="" className="w-20" />
              <p className="text-xl font-medium px-4 leading-none">
                Mrs. Dipti Khanna
                <br />
                <span className="text-base font-medium">Adani Power</span>
              </p>
            </div>
            <img src={Quote} alt="" />
          </div>
          <p>
            The team at OmTrans consistently goes above and beyond. Their land
            transportation solutions have been crucial for our supply chain
            efficiency. Highly recommended!
          </p>
          <div className="flex gap-2 py-4">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
          </div>
        </div>

        <div className="bg-[#091242] py-6 px-10 flex-wrap text-white h-[340px]">
          <div className="flex justify-evenly py-4">
            <div className="flex items-center">
              <img src={User_4} alt="" className="w-20" />
              <p className="text-xl font-medium px-4 leading-none">
                Mr. Rajeev Singh
                <br />
                <span className="text-base font-medium">Airtel</span>
              </p>
            </div>
            <img src={Quote} alt="" />
          </div>
          <p>
            OmTrans has been a reliable partner in our logistics operations.
            Their expertise in ocean freight has ensured our shipments arrive
            safely and on time. Exceptional service!"
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
