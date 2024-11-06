import React, { useRef, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import BgImg from "../assets/our_services.jpg";
import Icon_call from "../assets/phoneno.png";
import Icon_sms from "../assets/email.png";
import Icon_location from "../assets/location.png";
import Icon_time from "../assets/w_icon7.png";
import MyFaq from "../Components/FaqFF";
import Companies_logo from "../Components/Companies_logo";
import Office_Card from "../Components/Office_Card";
import emailjs from "@emailjs/browser";
import Scroll_Top from "../Components/Scroll_Top";
import { Helmet } from "react-helmet";

function Contact() {
  const form = useRef();
  const [sendButton, setsendButton] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setsendButton(true);

    emailjs
      .sendForm("service_04u0cox", "template_l5iu6gd", form.current, {
        publicKey: "ZBesjVFYR6UiVfrP4",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setsendButton(false);
          form.current.reset(); // Clear the form after successful submission
        },
        (error) => {
          console.log("FAILED...", error.text);
          setsendButton(false);
        }
      );
  };

  return (
    <div>
      {/* SEO */}
      <Helmet>
        <title>Contact Us | OmTrans Logistics Ltd.</title>
        <meta
          name="description"
          content="Get in touch with OmTrans, a leading Freight Forwarding company offering seamless import-export solutions. Our experts are here to assist you with global logistics, customs clearance, and supply chain management. Contact us today for personalized service and efficient cargo handling."
        />

        <meta
          name="keywords"
          content="Freight forwarding services ,
Global logistics solutions,
Import-export services,
International cargo shipping,
Supply chain management,
Customs clearance assistance,
Freight forwarding company India,
Efficient cargo handling,
International freight forwarding,
Om Trans logistics services"
        />
      </Helmet>

      <Navbar />
      <div
        className="bg-no-repeat bg-center bg-cover "
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="flex sm:flex-row flex-col items-center justify-around sm:pt-24 pt-4 sm:pb-24 m-auto  w-[90%]">
          <div className="sm:w-3/5	w-full py-6">
            <p className="text-white sm:text-lg text-sm"></p>
            <h1 className="text-white sm:text-[3.4vw] font-bold  leading-none text-4xl">
              Contact Us
            </h1>
          </div>
          <div className="sm:w-2/5 h-40"></div>
        </div>
      </div>

      {/*Contact Form */}
      <div className="max-w-screen-lg m-auto">
        <div className=" pt-4 sm:pt-10 ">
          <h2 className="text-center sm:text-4xl text-3xl font-bold text-[#1C1F35] py-2 relative after:content-[''] after:block after:w-28 after:h-1 after:bg-[#ff3d3d] after:mt-3  after:m-auto">
            Get in Touch with us
          </h2>
          <p className="text-base	py-2 text-center m-auto px-5 sm:w-2/4 w-full">
            Whether you need assistance with air, sea, or land freight, our
            dedicated team is here to ensure your goods reach their destination
            efficiently and safely.
          </p>
        </div>
        <div className="flex justify-evenly py-4 sm:flex-row flex-col">
          <div className="flex sm:contents justify-evenly py-2">
            <div>
              <img src={Icon_call} alt="" className="m-auto" />
              <p className=" text-center">+91-11-48316700</p>
            </div>
            <div>
              <img src={Icon_sms} alt="" className="m-auto" />
              <p className=" text-center">info@omtrans.in</p>
            </div>
          </div>

          <div className="text-center">
            <img src={Icon_location} alt="" className="m-auto" />
            <p className=" text-center">
              159, Transport Center,Punjabi <br />
              Bagh, New Delhi-110035
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-lg m-auto flex justify-center content-center sm:flex-row flex-col-reverse">
        {/* Google Map*/}

        <div className="py-0 sm:py-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14001.824054970064!2d77.13450410046387!3d28.676002599814993!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d032af961e89d%3A0xd697821e33e7c047!2som%20trans%20logistics%20ltd!5e0!3m2!1sen!2sin!4v1720156703964!5m2!1sen!2sin"
            width="500"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>

        {/* Form */}

        <div className="bg-[#091242] sm:w-[550px]  py-4  ">
          <div className="text-4xl font-bold	py-2 text-center m-auto text-white">
            <h1>Contact Us</h1>
          </div>

          <div className="flex sm:flex-row flex-col py-2 justify-center bg-[#091242]  px-4 sm:px-0 ">
            <form ref={form} onSubmit={sendEmail}>
              <div className="sm:pt-2 pt-0">
                <div className="flex flex-col sm:flex-row gap-2 items-center text-white">
                  <div>
                    <label htmlFor="username"></label>
                    <input
                      className=" sm:w-48 w-80 my-2 ring-1 focus:ring-1  placeholder:text-gray-400 placeholder:px-2 placeholder:py-1 py-2 px-2 bg-transparent"
                      type="text"
                      name="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="sm:pl-3">
                    <label htmlFor="email"></label>
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      className="sm:w-48 w-80 my-2 ring-1 focus:ring-1 placeholder:text-gray-400  placeholder:px-2   placeholder:py-1 py-2 px-2 bg-transparent"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 items-center text-white">
                  <div>
                    <label htmlFor="phoneno"></label>
                    <input
                      className="sm:w-48 w-80 my-2 ring-1 focus:ring-1 placeholder:text-gray-400  placeholder:px-2 placeholder:py-1 py-2 px-2 bg-transparent"
                      type="text"
                      name="contact"
                      placeholder="Phone No."
                    />
                  </div>
                  <div className="sm:pl-3">
                    <label htmlFor="city"></label>
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      className=" sm:w-48 w-80 ring-1 focus:ring-1 placeholder:text-gray-400  placeholder:px-2 placeholder:py-1 py-2 px-2 my-2 bg-transparent"
                    />
                  </div>
                </div>
                <div className="py-2 text-center text-white ">
                  <label htmlFor="message"></label>
                  <textarea
                    rows={3}
                    type="text"
                    name="message"
                    placeholder="Your Message"
                    className="sm:w-full w-80 my-2 ring-1 focus:ring-0  placeholder:text-gray-400  placeholder:px-2 placeholder:py-1 h-24 bg-transparent"
                  />
                </div>

                <div className="m-auto text-center py-4">
                  <button
                    className=" bg-gray-300 py-4 px-6 hover:scale-110 duration-300 rounded-md "
                    type="submit"
                    value="send"
                    disabled={sendButton}
                  >
                    {sendButton ? (
                      <svg
                        className="animate-spin h-5 w-10 text-black inline-block"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v2a6 6 0 00-6 6H4z"
                        ></path>
                      </svg>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Office Locations */}

      <div className="max-w-screen-lg flex justify-center m-auto flex-wrap pt-10">
        <Office_Card
          office="OmTrans in Delhi"
          address="159, Transport Center, Punjabi Bagh, New Delhi-110035"
          mail="info@omtrans.in"
        />
        <Office_Card
          office="OmTrans in Mumbai"
          address="1301/1302,Building E Trade Link,A-wing , Kamala City , S.B Marg, Mumbai 400013 Maharashtra"
          mail="info@omtrans.in"
        />
        <Office_Card
          office="OmTrans in Bangalore"
          address="No.3, 2nd Floor, Srinidhi Envoy, 4th 'C' Cross, 2nd Main, Kasturinagar, Banaswadi, Bangalore -560043, India"
          mail="info@omtrans.in"
        />
        <Office_Card
          office="OmTrans in Pune"
          address="Office no 208, 2nd Floor, Ashoka Mall, Bund Garden Road Survey Number 49/A, Pune - 411001"
          mail="info@omtrans.in"
        />
        <Office_Card
          office="OmTrans in West Bengal"
          address="Ground Floor, 113, Delhi Kolkata Highway, Ashok Grah Kolkata North Twenty Four Parganas, West Bengal, 700108"
          mail="info@omtrans.in"
        />
        <Office_Card
          office="OmTrans in Ahmedabad"
          address="Office No. B-705 , Sivanta One, Opposite Bank of Baroda, Paldi, Ahmedabad - 380007"
          mail="info@omtrans.in"
        />
        <Office_Card
          office="OmTrans in Chennai"
          address="No. 17, Noble 1st street, Next to Engine Valves Ltd. Alandur Chennai - 600016"
          mail="info@omtrans.in"
        />
        <Office_Card
          office="Japan"
          address="3 Chome Koyochohigashi, Higashinada Ward, Kobe, Hyogo 658-0031, Japan"
          mail="matsushita@kaisoten.co.jp"
        />
        <Office_Card
          office="Shanghai (China)"
          address="Room 301-302, Building 6, No.1080, Changyang Road, Shanghai, China Post Code: 200092"
          mail="setsu@jc-omtrax.com"
        />
        <Office_Card
          office="Vietnam"
          address=" 19 Dong Da, Ward 2, Tan Binh District, Ho Chi Minh City, Vietnam"
          mail="lerasal@seairlinks.vn"
        />
      </div>

      {/* Associate Companies*/}

      <div>
        <p className="text-4xl font-bold pt-7 text-center text-red-600 ">
          Associate Companies
        </p>
        <Companies_logo />
      </div>

      {/* Faq */}

      <div className="bg-[#F4F4F4]">
        <div className="py-20  m-auto flex justify-center gap-10 sm:flex-row flex-col max-w-screen-lg ">
          <div className="sm:w-[500px] sm:px-0 px-5">
            <p className="bg-gray-200 py-1 px-3 border-l-4 border-yellow-400 w-20 mb-4 sm:mb-0  ">
              FAQ
            </p>
            <h2 className="text-2xl font-bold	py-2 m-auto pb-10">
              Frequently Asked <br /> Questions
            </h2>
            <div>
              <MyFaq />
            </div>
          </div>
          <div className="">
            <div className="bg-[#091242]  py-8 px-12">
              <p className="bg-[#ececec2c] py-1 px-3 border-l-4 border-yellow-400 w-24 mb-4  text-white ">
                Let's Talk
              </p>
              <div className="text-white text-xl">
                You need any help? get free consultation
              </div>
              <div className="flex flex-col py-4 m-auto items-start gap-4">
                <div className="flex">
                  <img src={Icon_call} alt="" />
                  <div className="text-white ml-3">
                    <p>Have Any Questions</p>
                    <p>+91-11-48316700</p>
                  </div>
                </div>

                <div className="flex">
                  <img src={Icon_time} alt="" className="w-14 h-14" />
                  <div className="text-white ml-3">
                    <p>Monday - Saturday</p>
                    <p>10:00 AM to 06:00 PM (Available)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Scroll_Top />
      <Footer />
    </div>
  );
}

export default Contact;
