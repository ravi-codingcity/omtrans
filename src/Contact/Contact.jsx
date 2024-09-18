import React, { useRef, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import BgImg from "../assets/our_services.jpg";
import Icon_call from "../assets/phoneno.png";
import Icon_sms from "../assets/email.png";
import Icon_location from "../assets/location.png";
import MyFaq from "../Components/FaqFF";
import Companies_logo from "../Components/Companies_logo";
import Office_Card from "../Components/Office_Card";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [sendButton, setsendButton] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setsendButton(true);

    console.log("User Name:", form.current["user_name"].value);
    console.log("User Email:", form.current["user_email"].value);
    console.log("Shippment Details:", form.current["message"].value);

    emailjs
      .sendForm("service_zgk525k", "template_pigu21j", form.current, {
        publicKey: "WP8GUCcsZ82MFUSAr",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setsendButton(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setsendButton(false);
        }
      );
  };

  return (
    <div>
      <Navbar />
      <div
        className="bg-no-repeat bg-center bg-cover "
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="flex sm:flex-row flex-col items-center justify-around sm:pt-24 pt-4 sm:pb-24 m-auto pb-10 w-[90%]">
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
      <div className=" pt-4 sm:pt-10 ">
        <p className="bg-gray-200 py-1 px-3 border-l-4 border-yellow-400 w-32 mb-4 sm:mb-0 text-center m-auto">
          What we do
        </p>
        <h2 className="text-4xl font-bold	py-2 text-center m-auto">
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
            <p className=" text-center">cc@omtrans.in</p>
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

      <div className="mx-2 flex justify-center content-center sm:flex-row flex-col-reverse">
        {/* Google Map*/}

        <div className="py-6 sm:py-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14001.824054970064!2d77.13450410046387!3d28.676002599814993!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d032af961e89d%3A0xd697821e33e7c047!2som%20trans%20logistics%20ltd!5e0!3m2!1sen!2sin!4v1720156703964!5m2!1sen!2sin"
            width="500"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
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
                      name="user_name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="sm:pl-3">
                    <label htmlFor="email"></label>
                    <input
                      type="email"
                      placeholder="Email"
                      name="user_email"
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
                      name="phoneno"
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
                  <label htmlFor="city"></label>
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
                    className=" bg-gray-300 py-4 px-6 hover:scale-110 duration-300 rounded-md"
                    type="submit"
                    value="send"
                  >
                    {sendButton ? "Loading..." : "Send Message"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Office Locations */}

      <div className="w-[90%] flex justify-center m-auto flex-wrap pt-10">
        <Office_Card
          office="OmTrans in Delhi"
          address="159, Transport Center, Punjabi Bagh, New Delhi-110035"
        />
        <Office_Card
          office="OmTrans in Mumbai"
          address="1301/1302,Building E Trade Link,A-wing , Kamala City , S.B Marg, Mumbai 400013 Maharashtra"
        />
        <Office_Card
          office="OmTrans in Bangalore"
          address="No.3, 2nd Floor, Srinidhi Envoy, 4th 'C' Cross, 2nd Main, Kasturinagar, Banaswadi, Bangalore -560043, India"
        />
        <Office_Card
          office="OmTrans in Pune"
          address="Office no 208, 2nd Floor, Ashoka Mall, Bund Garden Road Survey Number 49/A, Pune - 411001"
        />
        <Office_Card
          office="OmTrans in West Bengal"
          address="Ground Floor, 113, Delhi Kolkata Highway, Ashok Grah Kolkata North Twenty Four Parganas, West Bengal, 700108"
        />
        <Office_Card
          office="OmTrans in Ahmedabad"
          address="Office No. B-705 , Sivanata One, Opposite Bank of Baroda, Paldi, Ahmedabad - 380007"
        />
        <Office_Card
          office="OmTrans in Chennai"
          address="No. 17, Noble 1st street, Next to Engine Valves Ltd. Alandur Chennai - 600016"
        />
        <Office_Card
          office="OmTrans in China"
          address="Room 301-302, Building 6, No.1080, Changyang Road, Shanghai, China Post Code: 200092"
        />
      </div>

      {/* Compaines Logo */}

      <div>
        <p className="text-4xl font-bold my-4 text-center text-[#1C1F35] ">
          Associate Companies
        </p>
        <Companies_logo />
      </div>

      {/* Faq */}

      <div className="bg-[#F4F4F4]">
        <div className="py-20  m-auto flex justify-center gap-10 sm:flex-row flex-col">
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
              <div className="flex py-4 m-auto items-center gap-4">
                <div>
                  <img src={Icon_call} alt="" />
                </div>
                <div className="text-white">
                  <p>Have Any Questions</p>
                  +91-11-48316700
                </div>
              </div>
              <div className=" py-4">
                <button className=" bg-gray-300 py-4 px-6 hover:scale-110 duration-300 rounded-md">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
