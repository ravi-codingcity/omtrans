import React from "react";
import BgImg from "../assets/S_img.jpg";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CC1 from "../assets/cc1.jpg";
import CC2 from "../assets/cc2.jpg";
import CC3 from "../assets/cc3.jpg";
import CC4 from "../assets/cc4.jpg";
import CC5 from "../assets/cc5.jpg";
import CC6 from "../assets/cc6.jpg";
import CC7 from "../assets/cc7.jpg";
import CC8 from "../assets/cc8.jpg";
import CC9 from "../assets/cc9.jpg";
import CC10 from "../assets/cc10.jpg";
import CC11 from "../assets/cc11.jpg";
import CC12 from "../assets/cc12.jpg";
import CC13 from "../assets/cc13.jpg";
import CC14 from "../assets/cc14.jpg";
import CC15 from "../assets/cc15.jpg";
import CC16 from "../assets/cc16.jpg";
import CC17 from "../assets/cc17.jpg";
import CC18 from "../assets/cc18.jpg";
import CC19 from "../assets/cc19.jpg";
import CC20 from "../assets/cc20.jpg";
import CC21 from "../assets/cc21.jpg";
import CC22 from "../assets/cc22.jpg";
import CC23 from "../assets/cc23.jpg";
import CC24 from "../assets/cc24.jpg";
import CC25 from "../assets/cc25.jpg";
import CC26 from "../assets/cc26.jpg";
import CC27 from "../assets/cc27.jpg";
import CC28 from "../assets/cc28.jpg";
import CC29 from "../assets/cc29.jpg";
import CC30 from "../assets/cc30.jpg";
import CC31 from "../assets/cc31.jpg";
import CC32 from "../assets/cc32.jpg";
import CC33 from "../assets/cc33.jpg";
import CC34 from "../assets/cc34.jpg";
import CC35 from "../assets/cc35.jpg";
import CC36 from "../assets/cc36.jpg";
import CC37 from "../assets/cc37.jpg";
import CC38 from "../assets/cc38.jpg";
import CC39 from "../assets/cc39.jpg";

function Careers() {
  return (
    <div>
      <Navbar />
      {/* Header */}
      <div
        className="bg-no-repeat bg-center bg-cover "
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="flex sm:flex-row flex-col items-center justify-around sm:pt-24 pt-4 sm:pb-24 m-auto  w-[90%]">
          <div className="sm:w-3/5	w-full py-6">
            <p className="text-white sm:text-lg text-sm">OmTrans</p>
            <h1 className="text-white sm:text-[3.4vw] font-bold  leading-none text-4xl">
              Our Clients
            </h1>
          </div>
          <div className="sm:w-2/5 h-44"></div>
        </div>
      </div>

      <div className="bg-slate-100 py-5">
        <div className=" py-5 max-w-screen-lg m-auto sm:px-0 px-3 ">
          <h1 className="text-3xl font-bold py-2 text-center text-red-600">
            Our Clients
          </h1>
          <p className="text-xl font-semibold py-3">
            OmTrans is proud to be associated with the prestigious clients.
            Listing them all would take a little time so we thought we’d pull a
            few well-known ones from the list.
          </p>
        </div>

        <div className="sm:mx-0 mx-4 ">
          <div className="flex flex-wrap justify-center  max-w-screen-lg items-center m-auto my-5">
            {[
              {
                img: CC1,
              },
              {
                img: CC2,
              },
              {
                img: CC3,
              },
              {
                img: CC4,
              },
              {
                img: CC5,
              },
              {
                img: CC6,
              },
              {
                img: CC7,
              },
              {
                img: CC8,
              },
              {
                img: CC9,
              },
              {
                img: CC10,
              },
              {
                img: CC11,
              },
              {
                img: CC12,
              },
              {
                img: CC13,
              },
              {
                img: CC14,
              },
              {
                img: CC15,
              },
              {
                img: CC16,
              },
              {
                img: CC17,
              },

              {
                img: CC18,
              },
              {
                img: CC19,
              },
              {
                img: CC20,
              },
              {
                img: CC21,
              },
              {
                img: CC22,
              },
              {
                img: CC23,
              },
              {
                img: CC24,
              },
              {
                img: CC25,
              },
              {
                img: CC26,
              },
              {
                img: CC27,
              },
              {
                img: CC28,
              },
              {
                img: CC29,
              },
              {
                img: CC30,
              },
              {
                img: CC31,
              },
              {
                img: CC32,
              },
              {
                img: CC33,
              },
              {
                img: CC34,
              },
              {
                img: CC35,
              },
              {
                img: CC36,
              },
              {
                img: CC37,
              },
              {
                img: CC38,
              },
              {
                img: CC39,
              },
            ].map((item, index) => (
              <div key={index}>
                <img
                  src={item.img}
                  alt="Client Image"
                  className="w-32 hover:scale-110 duration-200 cursor-pointer border-[1px]	border-black my-2 mx-2 h-full shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Careers;
