import React from "react";
import Navbar from "../Navbar/Navbar";
import BgImg1 from "../assets/Background_1.jpg";
import Automotive from "../assets/automotive.jpg";
import Technology from "../assets/technology.jpg";
import Healthcare from "../assets/healthcare.jpg";
import Energy from "../assets/energy.jpg";
import Industrial from "../assets/industry.jpg";
import Consumer from "../assets/consumer.jpg";
import Defence from "../assets/defence.jpg";
import Chemical from "../assets/chemical.jpg";
import Steel from "../assets/Steel_Industry.jpg";
import Break_Bulk from "../assets/Break_Bulk.jpg";
import Image1 from "../assets/container.jpg";
import Icon_5 from "../assets/w_icon7.png";
import Icon_6 from "../assets/w_icon8.png";
import P1 from "../assets/ff.jpg";
import P2 from "../assets/scm.jpg";
import P3 from "../assets/warehouse.jpg";
import P4 from "../assets/odc.jpg";
import P5 from "../assets/custom_clear.jpg";
import P6 from "../assets/Ship_Catering.jpg";
import Icon_7 from "../assets/w_icon1.png";
import Icon_8 from "../assets/w_icon2.png";
import Icon_9 from "../assets/w_icon3.png";
import Icon_10 from "../assets/w_icon4.png";
import Blog1 from "../assets/blog_img_4.jpeg";
import Blog2 from "../assets/blog_img_5.jpeg";
import Blog3 from "../assets/Blog_7.jpeg";
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
import { Helmet } from "react-helmet";

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

      {/* SEO */}
      <Helmet>
        <title>OmTrans Logistics Ltd. | Best Freight Forwarding Company</title>
        <meta
          name="description"
          content="OmTrans is your reliable partner in global logistics solutions. Operating in over 150 countries worldwide, OmTrans offers a comprehensive range of freight forwarding services through our offices and strategic partnerships"
        />

        <meta
          name="keywords"
          content="Best Freight Forwarding Company in india , Freight Forwarding Company in Delhi, Import Export Conpany in Delhi,  Freight Forwarding Company, Best global logistics solutions
Top freight forwarding services,
International shipping logistics
Comprehensive supply chain solutions,
Freight forwarding companies,
Affordable global shipping services,
Customs clearance experts,
Import-export logistics solutions,
Logistics and distribution services,
NVOCC services provider,
Cross-border logistics solutions,
Freight management experts"
        />
      </Helmet>

      {/* Industries we serve */}

      <div className="sm:py-14 py-10 pb-0 m-auto max-w-screen-xl">
        <h2 className="text-4xl font-bold text-center text-red-600 py-4">
          Industries We Serve
        </h2>
        <div className="max-w-screen-lg m-auto flex flex-wrap justify-evenly text-center">
          {/* Each card is individually animated grid grid-rows-2 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 py-4 text-center items-center justify-center */}
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
            description="Moving Temperature controlled cargo through Reefer containers worldwide to warehouse, distribution centers or direct-to-store so goods can reach the retailers directly."
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
            description="Moving the Hazardous Cargo under the Regulatory, Safety and Security Compliance, with dedicated solutions to maintain product integrity during transportation."
            delay={0.8}
          />
          <Industry_tab
            icon={Steel}
            title="Steel"
            description="OmTrans provides efficient global freight solutions for the steel industry, moving heavy steel from mills to warehouses, distribution centres, or direct to manufacturers."
            delay={0.9}
          />
        </div>
      </div>

      {/* Why Us*/}

      <div className="">
        <img
          src={BgImg1}
          alt=""
          className="m-auto w-full mb-0 sm:-mb-52 sm:block hidden "
        />
      </div>

      <div className="flex justify-center flex-col sm:flex-row  max-w-screen-lg m-auto">
        <div className=" sm:pl-10   bg-white sm:pt-6 pt-6 sm:w-1/2 w-full px-4 sm:px-0">
          <h3 className="sm:text-4xl text-3xl font-bold text-[#1C1F35] py-2 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-[#ff3d3d] after:mt-3">
            Why Choose Us
          </h3>
          <p className="text-base">
            Welcome to OmTrans, your trusted partner in global logistics
            solutions. With an international footprint spanning over 150+
            countries, We specialize in providing a full range of logistics
            services, including air, ocean, and land transportation.
          </p>
          <div className=" grid grid-cols-2  py-5 ">
            <Choose_icon icon={Icon_5} title="24+ Years of Experience" />
            <Choose_icon icon={Icon_6} title="Optimized Logistics Cost" />
            <Choose_icon icon={Icon_7} title="Best Connectivity Options" />
            <Choose_icon icon={Icon_8} title="Safe Cargo Delivery" />
            <Choose_icon icon={Icon_9} title="24x7 Availability" />
            <Choose_icon icon={Icon_10} title="No Hidden Costs" />
          </div>
        </div>
        <div className="flex px-8 bg-white sm:w-1/2 sm:py-10 py-0  pb-10 w-full">
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
            description="OmTrans, One of the established logistics companies in India, acts as a freight forwarder while delivering forwarding and groupage services to its clients."
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
            title="Capital Goods and Projects"
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
            title="Ship Catering and Brokerage"
            description="We specializes in transporting large-scale shipments globally. Let us streamline your bulk cargo needs with our expert logistics services."
            img={P6}
            onClick={() => {
              navigate("/project_cargo_ODC_handle");
              window.scrollTo(0, 0);
            }}
            delay={0.6}
          />
        </div>
      </div>

      {/* Group Strength */}

      <div className="bg-white py-10 ">
        <p className="text-4xl font-bold my-6 text-center ">Group Strength</p>
        <div className="flex justify-center flex-wrap  items-stretch py-3 text-white">
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

      {/* Testimonials */}

      <div className="flex items-center justify-center flex-wrap">
        <div className="py-t pb-10  sm:max-w-screen-lg max-w-[350px] m-auto">
          <Testimonials />
        </div>
      </div>

      {/* Our Blogs */}

      <div className="py-5 bg-gray-50">
        <p className="text-4xl font-bold my-4 text-center text-red-600 ">
          Our Latest News
        </p>

        <Blog
          img={Blog1}
          date="28"
          month="September"
          year="2024"
          title="OmTrans Moves 60ft BOPP Line from Nhava Sheva to Jammu."
          description="We are proud to announce the successful delivery of a 60ft long BOPP line from Nhava Sheva to Jammu. As a trusted name in freight forwarding, we ensure that even the most complex logistics are handled with precision, ensuring timely and safe delivery. This achievement underscores our commitment to delivering excellence across every mile."
        />

        <Blog
          img={Blog2}
          date="02"
          month="July"
          year="2024"
          title="OmTrans Completes First Joint Project with Partner Company Goto Korea."
          description="OmTrans is excited to share the successful delivery of first joint Project cargo after partnership with Goto Japan.The project was moved jointly with Goto Korea Ex Masan Port ( Korea ) to MBPT ( Mumbai ) and further truck down to final destination at Door in Noida. The project consisted of 36 pieces and all the pieces were Over dimension. The heaviest equipment weight was 149 MT & 91 MT."
        />

        <Blog
          img={Blog3}
          date="30"
          month="September"
          year="2024"
          title="Opening Soon Warehouse in Banchari Village ( Haryana )"
          description="OmTrans is thrilled to announce the opening of our first joint venture warehouse with at Banchari Village ( Haryana ), located on the main Faridabad-Agra Road, set to be fully operational by January 14. This strategically located facility is designed to meet diverse storage needs with modern infrastructure, ample space, and robust security. With streamlined logistics access and a dedicated team."
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

      {/* Associate Companies*/}

      <div>
        <p className="text-4xl font-bold pt-7 text-center text-red-600 ">
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
