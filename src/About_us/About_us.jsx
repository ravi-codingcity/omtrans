import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import BgImg from "../assets/Aboutus_img.jpg";
import about_us_img from "../assets/about_us_container.jpg";
import Experts from "../Components/Experts";
import Vikran_sir from "../assets/vikram_sir.jpg";
import ajay_singhal from "../assets/ajay_singhal.jpg";
import Companies_logo from "../Components/Companies_logo";
import about_us_img_network from "../assets/Networking.jpg";
import certificate_1 from "../assets/certificate_1.jpg";
import certificate_2 from "../assets/certificate_2.jpg";
import certificate_3 from "../assets/certificate_3.jpg";
import certificate_4 from "../assets/certificate_4.jpg";
import certificate_5 from "../assets/certificate_5.jpg";
import Global_Strength from "../Components/Global_Strength";
import india from "../assets/GS_india.png";
import globe from "../assets/GS_globe.png";
import warehouse from "../assets/GS_warehouse.png";
import staff from "../assets/GS_staff.png";
import truck from "../assets/GS_truck.png";

function About_us() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    certificate_1,
    certificate_2,
    certificate_3,
    certificate_4,
    certificate_5,
  ];

  return (
    <div>
      <Navbar />
      <div
        className="bg-no-repeat bg-center bg-cover "
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="flex sm:flex-row flex-col items-center justify-around sm:pt-24 pt-4 sm:pb-24 m-auto pb-0 w-[90%]">
          <div className="sm:w-3/5	w-full py-6">
            <h1 className="text-white sm:text-[3.4vw] font-bold  leading-none text-4xl">
              About Us
            </h1>
          </div>
          <div className="sm:w-2/5 h-40"></div>
        </div>
      </div>

      {/* About */}

      <div className="flex sm:flex-row flex-col justify-center items-center max-w-screen-lg m-auto py-10 px-5 sm:px-0">
        <div className="sm:w-[50%]  sm:pr-10 pr-0">
          <h3 className="sm:text-4xl text-3xl font-bold text-[#1C1F35] py-2 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-[#ff3d3d] after:mt-3">
            Welcome to OmTrans
          </h3>
          <p className="mt-1">
            Welcome to OmTrans, your trusted partner in global logistics
            solutions. With an international footprint spanning over 150+
            countries, OmTrans delivers comprehensive freight forwarding
            services through our offices and strategic partnerships. We
            specialize in providing a full range of logistics services,
            including air, ocean, and land transportation. Leveraging over 24
            years of industry expertise, our exclusive and non-exclusive tie-ups
            enable us to offer customized solutions, making us the leader in the
            global logistics landscape.
          </p>
        </div>
        <div className=" pt-6 sm:pt-0">
          <img src={about_us_img} alt="about us image" />
        </div>
      </div>

      {/* Management */}

      <div className=" py-6 bg-slate-100">
        <p className="bg-gray-200 py-1 px-3 border-l-4 border-yellow-400 w-24 m-auto">
          OmTrans
        </p>
        <h3 className="sm:text-4xl text-3xl font-bold	text-[#1C1F35]	py-2 text-center">
          Management
        </h3>
        <div className="flex justify-center py-6 flex-wrap gap-">
          <div className="py-2 sm:my-0 my-4">
            <Experts img={ajay_singhal} name="Mr. Ajay Singhal" title="" />
          </div>
          <div className="py-2 sm:my-0 my-4">
            <Experts
              img={Vikran_sir}
              name="Mr. Vikram Garg"
              title="(Full-time Director) "
            />
          </div>
          <div className="py-2 sm:my-0 my-4">
            <Experts
              img={Vikran_sir}
              name="Mr. Kapil Dalmia"
              title="(Full-time Director) "
            />
          </div>
        </div>
      </div>

      {/* Group Strength */}

      <div className="bg-white py-10 ">
        <p className="text-4xl font-bold my-6 text-center ">Group Strength</p>
        <div className="flex justify-center flex-wrap gap-5  items-stretch py-3 text-white">
          <Global_Strength
            icon={india}
            heading={"750+"}
            text={"Branch Offices (India)"}
          />
          <Global_Strength
            icon={globe}
            heading={"150+"}
            text={"Countries Presence Worldwide"}
          />
          <Global_Strength
            icon={warehouse}
            heading={"200+"}
            text={"Warehouses"}
          />
          <Global_Strength icon={staff} heading={"7500+"} text={"Staff"} />
          <Global_Strength icon={truck} heading={"5500+"} text={"Trucks"} />
        </div>
      </div>

      {/* infrastructure */}

      <div className="bg-slate-100 py-4">
        <div className="flex sm:flex-row flex-col-reverse justify-center items-center max-w-screen-lg m-auto py-10  ">
          <div className=" py-4 sm:py-0  px-4 sm:px-0">
            <img src={about_us_img_network} alt="about us image " />
          </div>
          <div className="sm:w-[50%] px-6">
            <h3 className="sm:text-4xl text-3xl font-bold text-[#1C1F35] py-2 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-[#ff3d3d] after:mt-2">
              Global Services
            </h3>
            To widely spread Indian Corporate and Multinational with globally
            spread market OmTrans offers the following range of services.
            <ul className="pl-6 list-disc	">
              <li>Door-to-Door pickup and delivery all over the world.</li>
              <li>Warehousing facilities all over the world.</li>
              <li>Heavy Project Handling</li>
              <li>Cargo consolidation Air/Sea.</li>
              <li>Custom broker for Export and Import</li>
              <li>Packing of machinery and other Exim cargo.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Companies Logo*/}

      <div>
        <p className="text-4xl font-bold pt-7 text-center text-red-600 ">
          Associate Companies
        </p>
        <Companies_logo />
      </div>

      {/* Certifications */}

      <div className="bg-slate-100">
        <div className="max-w-screen-lg m-auto py-10 px-4 sm:px-0">
          <h3 className="sm:text-4xl text-3xl font-bold	text-red-600	 py-4 text-center">
            Certifications
          </h3>
          <div className="text-base">
            <p>
              <b>OM TRANS LOGISTICS LIMITED</b> has implemented Integrated
              Management System, under which following standards has been
              adopted
            </p>
            <br />
            <p>
              <b>An ISO 9001:2015 Quality Management System: </b> We truly
              committed to providing our customers with the very best services.
              In whatever we do, we will consistently strive to meet & exceed
              customer expectations and continually improve the effectiveness of
              our Management System. Excellence, Quality, innovation and
              continuous improvement are a permanent objection of our
              organization.
            </p>
            <br />
            <p>
              <b> An ISO 14001:2015 Environmental Management System:</b> We
              assure to adopt measures that will help in protecting the
              environment and safeguarding our natural resources.
            </p>
            <br />
            <p>
              <b>
                An ISO 45001:2018 Occupational Health & Safety Management
                System:{" "}
              </b>{" "}
              We assure to provide healthy & safe environment in our workplaces
              by complying with all applicable Healthy & Safety, legal and other
              requirements.
            </p>
            <br />
            <p>
              <b> An ISO 37001:2016 Anti Bribery Management System: </b> We
              committed to conducting lawful, ethical business with integrity as
              part of this commitment. All forms of bribery and corruption are
              unacceptable and are not to be tolerated. We comply with Anti
              Bribery laws that are applicable to our organization.
            </p>
            <br />
          </div>
          <div className="relative">
            {/* Background overlay when image is selected */}
            {selectedImage && (
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}

            {/* Image Gallery */}
            <div className="flex py-3 flex-wrap max-w-screen-lg m-auto justify-center">
              {images.map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`Certificate ${index + 1}`}
                  className="w-60 sm:w-48 shadow-lg my-2 cursor-pointer hover:scale-110 duration-200 h-full mx-1"
                  whileHover={{ scale: 1.1, rotate: 2 }} // Add subtle rotate on hover
                  whileTap={{ scale: 0.9 }} // Add a slight press effect on click
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>

            {/* Enlarged Image with Close Icon */}
            {selectedImage && (
              <motion.div
                className="fixed inset-0 z-20 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1.2 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <div className="relative">
                  <motion.img
                    src={selectedImage}
                    alt="Enlarged Certificate"
                    className="w-[80%] h-auto rounded-lg shadow-xl"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 120 }}
                  />
                  {/* Close Icon */}
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-3 right-3 text-white bg-red-500 hover:bg-red-700 p-2 rounded-full shadow-lg"
                  >
                    <FaTimes size={24} />
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About_us;
