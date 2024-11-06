import React from "react";
import { useNavigate } from "react-router-dom";
import FooterImg from "../assets/footer.jpg";
import logo from "../assets/omtrans_logo.png";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
import iso1 from "../assets/iso1.png";
import iso2 from "../assets/iso2.png";
import iso3 from "../assets/iso3.png";
import iso4 from "../assets/iso4.png";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";
import c5 from "../assets/c5.png";
import c6 from "../assets/c6.png";
import c7 from "../assets/c7.jpg";
import c8 from "../assets/c8.jpg";
import SiteVisitors from "../Components/SiteVisitors";

function Footer() {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <img src={FooterImg} alt="" className="m-auto w-full" />
      </div>
      <div className="bg-slate-500  ">
        <div className="flex items-flex-start justify-evenly sm:text-2xl text-xl font-bold text-white  "></div>
      </div>

      <div className="bg-[#091242] py-8">
        <div className="max-w-screen-xl m-auto px-8">
          <div className="flex  flex-col sm:flex-row items-flex-start justify-evenly text-2xl font-bold text-white px-2 sm:px-0">
            <div className="text-base font-normal text-white sm:w-72 w-4/5">
              <img src={logo} alt="" className="w-36 pb-2" />
              <p>
                OmTrans has developed a complete range of services to respond to
                the logistics and transportation needs comprising of Air, Ocean
                and Land transportation.
              </p>
              <div className="flex">
                <div className="py-4 text-white">
                  <div className="flex  items-center  pb-3">
                    <div className="bg-[#273270] py-3 px-3 rounded-full mr-2">
                      <CiMail className=" text-[#F6B426] text-2xl" />
                    </div>
                    <p className="font-medium	 items-center ">
                      Email
                      <br />
                      <span className="font-normal">info@omtrans.in</span>
                    </p>
                  </div>
                  <div className="flex  items-center  pb-3">
                    <div className="bg-[#273270] py-3 px-3 rounded-full mr-2">
                      <IoCallOutline className=" text-[#F6B426] text-2xl" />
                    </div>
                    <p className="font-medium	 items-center ">
                      Call Us
                      <br />
                      <span className="font-normal">+91-11-48316700</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 cursor-pointer">
              <div>Navigation</div>
              <div>
                <ul className="font-normal text-base list-none">
                  <li
                    className="py-2"
                    onClick={() => {
                      navigate("/careers");
                      window.scrollTo(0, 0);
                    }}
                  >
                    Careers
                  </li>

                  <li
                    className="py-2"
                    onClick={() => {
                      navigate("/contact-us");
                      window.scrollTo(0, 0);
                    }}
                  >
                    Contact
                  </li>
                  <li
                    className="py-2"
                    onClick={() => {
                      navigate("/About_us");
                      window.scrollTo(0, 0);
                    }}
                  >
                    About Us
                  </li>
                  <li
                    className="py-2 cursor-pointer"
                    onClick={() => {
                      navigate("/clients");
                      window.scrollTo(0, 0);
                    }}
                  >
                    Our Clients
                  </li>
                  <li
                    className="py-2 cursor-pointer"
                    onClick={() => {
                      navigate("/log-in");
                      window.scrollTo(0, 0);
                    }}
                  >
                    Job Portal
                  </li>
                  <li
                    className="py-2 cursor-pointer"
                    onClick={() => {
                      navigate("/privacy_policy");
                      window.scrollTo(0, 0);
                    }}
                  >
                    Privacy Policy
                  </li>
                  <li
                    className="py-2"
                    onClick={() => {
                      navigate("/terms_and_condition");
                      window.scrollTo(0, 0);
                    }}
                  >
                    Terms and Conditions
                  </li>
                </ul>
              </div>
            </div>

            <div className="mx-1">
              Certification
              <div className="flex  py-2  flex-wrap w-56">
                <img src={c1} alt="" className="px-1 py-1" />
                <img src={c2} alt="" className="px-1 py-1" />
                <img src={c3} alt="" className="px-1 py-1" />
                <img src={c4} alt="" className="px-1 py-1" />
                <img src={c5} alt="" className="px-1 py-1" />
                <img src={c6} alt="" className="px-1 py-1" />
                <img src={c7} alt="" className="px-1 py-1" />
                <img src={c8} alt="" className="px-1 py-1" />
              </div>
            </div>
            <div className="flex flex-col mx-1">
              ISO Certification
              <div className="flex space-x-2 py-2">
                <img src={iso1} alt="" />
                <img src={iso2} alt="" />
                <img src={iso3} alt="" />
                <img src={iso4} alt="" />
              </div>
              <SiteVisitors />
              {/*  <DisplayVisits />*/}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center bg-[#091242] text-white py-3 text-xl">
        <div className="px-2">
          <a
            href="https://www.facebook.com/omtrans/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="hover:scale-110 duration-300 rounded-md cursor-pointer" />
          </a>
        </div>
        <div className="px-2">
          <a
            href="https://www.instagram.com/omtransltd/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:scale-110 duration-300 rounded-md cursor-pointer" />
          </a>
        </div>
        <div className="px-2">
          <a
            href="https://www.linkedin.com/company/om-trans-logistics-limited/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:scale-110 duration-300 rounded-md cursor-pointer" />
          </a>
        </div>
        <div className="px-2">
          <a
            href="https://in.pinterest.com/om_trans_logistic/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPinterest className="hover:scale-110 duration-300 rounded-md cursor-pointer" />
          </a>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-around py-3 bg-[#091242] text-white border-t-2 text-center">
        <p>Copyright 2024 © OmTrans Logistics Ltd.</p>
      </div>
    </div>
  );
}

export default Footer;
