import React from "react";
import Navbar from "../Navbar/Navbar";
import BgImg1 from "../assets/Background1.jpg";
import Automotive from "../assets/automotive.jpg";
import Technology from "../assets/technology.jpg";
import Healthcare from "../assets/healthcare.jpg";
import Energy from "../assets/energy.jpg";
import Industrial from "../assets/industry.jpg";
import Consumer from "../assets/consumer.jpg";
import Defence from "../assets/defence.jpg";
import Chemical from "../assets/chemical.jpg";
import Image1 from "../assets/container.jpg";
import Icon_5 from "../assets/w_icon7.png";
import Icon_6 from "../assets/w_icon8.png";
import P1 from "../assets/ff.jpg";
import P2 from "../assets/scm.jpg";
import P3 from "../assets/warehouse.jpg";
import P4 from "../assets/odc.jpg";
import P5 from "../assets/custom_clear.jpg";
import P6 from "../assets/server.jpg";
import Icon_7 from "../assets/w_icon1.png";
import Icon_8 from "../assets/w_icon2.png";
import Icon_9 from "../assets/w_icon3.png";
import Icon_10 from "../assets/w_icon4.png";
import Blog1 from "../assets/blog_2.jpg";
import Blog2 from "../assets/transport_b.jpg";
import Blog3 from "../assets/blog_3.jpg";
import Footer from "../Footer/Footer";
import Img_card from "../Components/Img_card";
import Testimonials from "../Components/Testimonials";
import Choose_icon from "../Components/Choose_icon";
import Blog from "../Components/Blog";
import QuoteRequest from "../Components/RateForm";
import Companies_logo from "../Components/Companies_logo";
import Industry_tab from "../Components/Industry_tab";
import { useNavigate } from "react-router-dom";
import Slider from "../Components/Slider";
import Global_Strength from "../Components/Global_Strength";
import india from "../assets/GS_india.png";
import globe from "../assets/GS_globe.png";
import warehouse from "../assets/GS_warehouse.png";
import staff from "../assets/GS_staff.png";
import truck from "../assets/GS_truck.png";
import Scroll_Top from "../Components/Scroll_Top";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      {/* Header */}

      <Slider />

      {/* Rate Request Form*/}

      <div>
        <QuoteRequest />
      </div>

      {/* Industries we serve */}

      <div className="sm:py-14 py-10 m-auto">
        <h2 className="text-4xl font-bold text-center text-red-600 py-4">
          Industries We Serve
        </h2>

        <div className="max-w-screen-xl m-auto grid grid-rows-2 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 py-4 text-center items-center justify-center">
          {/* Each card is individually animated */}
          <Industry_tab
            icon={Automotive}
            title="Automotive"
            description="Transportation and logistics services to optimise supply chains and meet tighter production schedules."
            delay={0.1}
          />
          <Industry_tab
            icon={Technology}
            title="Technology"
            description="End-to-end, integrated and reliable supply chain solutions to link production sites with distribution channels across the world."
            delay={0.2}
          />
          <Industry_tab
            icon={Healthcare}
            title="Healthcare"
            description="Dedicated teams and a wide range of solutions to ensure compliance with quality standards and regulations."
            delay={0.3}
          />
          <Industry_tab
            icon={Energy}
            title="Energy"
            description="Innovative, reliable and tailored solutions for energy transport logistics, whenever and wherever needed."
            delay={0.4}
          />
          <Industry_tab
            icon={Industrial}
            title="Industrial"
            description="Tailor-made solutions to manage complex demands and make supply chains leaner and more agile."
            delay={0.5}
          />
          <Industry_tab
            icon={Consumer}
            title="Consumer"
            description="Transport to warehouse, distribution centre or direct-to-store so goods can reach the retailers directly."
            delay={0.6}
          />
          <Industry_tab
            icon={Defence}
            title="Defence & Aerospace"
            description="Dedicated teams to move your defence and aerospace cargo around the globe in the safest fashion."
            delay={0.7}
          />
          <Industry_tab
            icon={Chemical}
            title="Chemical"
            description="Regulatory, safety and security compliance, and dedicated solutions to maintain product integrity during transportation."
            delay={0.8}
          />
        </div>
      </div>

      {/* Why Us*/}

      <div className="">
        <img src={BgImg1} alt="" className="m-auto w-full mb-0 sm:-mb-52" />
      </div>

      <div className="flex justify-center flex-col sm:flex-row  max-w-screen-lg m-auto">
        <div className=" sm:pl-10   bg-white sm:pt-6 pt-6 w-1/2">
          <h3 className="sm:text-4xl text-2xl font-bold	text-red-600	py-4">
            Why Choose Us
          </h3>
          <p className="text-base">
            Welcome to OmTrans, your trusted partner in global logistics
            solutions. With an international footprint spanning over 90+
            countries, We specialize in providing a full range of logistics
            services, including air, ocean, and land transportation.
          </p>
          <div className=" grid grid-cols-2  py-5">
            <Choose_icon icon={Icon_5} title="24+ Years of Experience" />
            <Choose_icon icon={Icon_6} title="Optimized Logistics Cost" />
            <Choose_icon icon={Icon_7} title="Best Connectivity Options" />
            <Choose_icon icon={Icon_8} title="Safe Cargo Delivery" />
            <Choose_icon icon={Icon_9} title="24x7 Availability" />
            <Choose_icon icon={Icon_10} title="No Hidden Costs" />
          </div>
        </div>
        <div className="flex px-8 bg-white w-1/2 sm:py-10 py-6">
          <img className=" " src={Image1} alt="" />
        </div>
      </div>

      {/*Our Services */}

      <div className="bg-slate-100 py-5 ">
        <div className="py-5">
          <h1 className="sm:text-4xl text-2xl font-bold text-red-600 text-center px-5 sm:px-0 leading-[45px] ">
            Our Services
          </h1>
        </div>

        <div className="max-w-screen-xl	m-auto flex flex-wrap justify-center">
          <Img_card
            title="Freight Forwarding"
            description="Om Trans, one of the established logistics companies in India, acts as a freight forwarder while delivering forwarding and groupage services to its clients."
            img={P1}
            onClick={() => {
              navigate("/freight_forwarding");
              window.scrollTo(0, 0);
            }}
            delay={0.1}
          />

          <Img_card
            title="Supply Chain Management"
            description="Efficient and strategic supply chain management can make a substantial difference in an organizations success and profitability."
            img={P2}
            onClick={() => {
              navigate("/supply_chain_management");
              window.scrollTo(0, 0);
            }}
            delay={0.2}
          />

          <Img_card
            title="Warehousing & Distribution"
            description="OmTrans offers warehousing and distribution services, with bonded and non-bonded facilities at major ports."
            img={P3}
            onClick={() => {
              navigate("/warehouse_distributation");
              window.scrollTo(0, 0);
            }}
            delay={0.3}
          />

          <Img_card
            title="Project Cargo & ODC Handle"
            description="OmTrans offers specializing in transporting oversized and heavy equipment efficiently across the globe."
            img={P4}
            onClick={() => {
              navigate("/project_cargo_ODC_handle");
              window.scrollTo(0, 0);
            }}
            delay={0.4}
          />
          <Img_card
            title="Custom Brokerage"
            description="We operate under the valid license of the Customs Authority of India and help in smooth local transportation and freight services."
            img={P5}
            onClick={() => {
              navigate("/customs_brokerage_services");
              window.scrollTo(0, 0);
            }}
            delay={0.5}
          />
          <Img_card
            title="IT Infrastructure & Usage"
            description="OM Logistics stands as a distinguished player in the world of IT and consumer electronics, providing specialized solutions tailored to specific needs."
            img={P6}
            delay={0.6}
          />

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
            heading={"90+"}
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

      {/* Testimonials */}

      <div className="flex items-center justify-center flex-wrap">
        <div className="py-6  sm:w-[70%] w-[100%]">
          <Testimonials />
        </div>
      </div>

      {/* Our Blogs */}

      <div className="py-5 bg-gray-50">
        <h1 className="bg-gray-300 border-l-4 border-red-600 my-2 text-center w-36 m-auto ">
          Our Blogs
        </h1>
        <p className="text-4xl font-bold my-4 text-center text-[#1C1F35]">
          Our Latest News
        </p>

        <Blog
          img={Blog1}
          date="11"
          month="November"
          title="Delivering Oxygen concentrators from China to India by air to fight Covid."
          description="During the second wave of Covid in India, OmTrans has successfully imported 250 oxygen concentrators from China to India in time line manner which was a great support in fighting Covid and helped in saving thousands of lives during the pandemic time."
        />

        <Blog
          img={Blog2}
          date="08"
          month="September"
          title="Saving Freight cost by 50%"
          description="With having experience team OmTrans have helped their Exporters in saving 50% freight cost by moving the cargo through Break Bulk to Houston and Baltimore which was really appreciated by the Exporters. OmTrans has successfully delivered 4000 metric tonnes of cargo and monthly moving such volume of cargo to Houston & Baltimore through Break Bulk."
        />

        <Blog
          img={Blog3}
          date="15"
          month="August"
          title="Delivered 150 Tonnes of Medicines during Covid "
          description="We take pride in mentioning that during the first wave of Pandemic, we moved over 50 tons of Covid related medicines to Brazil by Air freight maintained in cold chain temperature. It was a challenging task due to lockdown to handle operations at airport with negligible transportation, ground team."
        />

        <div className=" m-auto text-center py-5">
          <button
            onClick={() => {
              navigate("/News");
              window.scrollTo(0, 0);
            }}
            onSubmit={(e) => e.preventDefault()}
            type="submit"
            className="bg-red-600 text-white  relative px-5 py-3 hover:border-b-1 border-[#ff2b2b] transition-all duration-200 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:-mb-2 after:w-full after:bg-[#ff2b2b] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
          >
            More Blogs
          </button>
        </div>
      </div>

      {/* Meet Our Team*/}

      <div>
        <p className="text-4xl font-bold py-6 text-center text-[#1C1F35] ">
          Associate Companies
        </p>
        <Companies_logo />
      </div>

      {/* Bottom Contact */}

      <div className="sm:flex flex flex-col sm:flex-row py-20 bg-slate-100 justify-evenly items-center">
        <div>
          <h1 className="text-3xl font-bold py-3 text-center sm:text-left">
            Any Questions?
          </h1>
          <p className="text-lg text-center px-2">
            Our experts are ready to help. Get in touch and we'll find the
            solution you need.
          </p>
        </div>
        <div>
          <button
            onClick={() => {
              navigate("/contact");
              window.scrollTo(0, 0);
            }}
            onSubmit={(e) => e.preventDefault()}
            type="submit"
            className="bg-red-600 text-white  relative px-7 my-2 py-3 hover:border-b-1 border-[#ff2b2b] transition-all duration-200 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:-mb-2 after:w-full after:bg-[#ff2b2b] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
          >
            Contact Us
          </button>
        </div>
      </div>

      <Scroll_Top />
      <Footer />
    </div>
  );
}
export default Home;
