import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import BgImg from "../assets/News_img.jpg";
import Blog1 from "../assets/blog_2.jpg";
import Blog2 from "../assets/Blog_6.jpg";
import Blog4 from "../assets/blog_img_4.jpeg";
import Blog5 from "../assets/blog_img_5.jpeg";
import Blog from "../Components/Blog";
import Scroll_Top from "../Components/Scroll_Top";
import { Helmet } from "react-helmet";

function News() {
  return (
    <div>
      {/* SEO */}
      <Helmet>
        <title>News | OmTrans Logistics Ltd.</title>
        <meta
          name="description"
          content="Stay updated with the latest achievements of OmTrans in the freight forwarding industry. Discover our successful large-scale project deliveries, import-export milestones, and innovative integration projects that are transforming global logistics and supply chain management."
        />

        <meta
          name="keywords"
          content="OmTrans logistics achievements, Freight forwarding projects, Global logistics updates, Import-export success stories, Large-scale freight forwarding, Supply chain integration, Freight forwarding industry news, Cargo handling milestones, Logistics technology integration, Global shipping solutions, Supply chain management news, Freight forwarding innovations, Logistics project updates, Import-export logistics, Global transportation news"
        />
      </Helmet>

      <Navbar />
      <div
        className="bg-no-repeat bg-center bg-cover "
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="flex sm:flex-row flex-col items-center justify-around sm:pt-24 pt-4 sm:pb-24 m-auto  w-[90%]">
          <div className="sm:w-2/5	w-full py-6 pl-3">
            <p className="text-white sm:text-lg text-sm"></p>
            <h1 className="text-white sm:text-[3.4vw] font-bold  leading-none text-4xl">
              News
            </h1>
          </div>
          <div className="sm:w-2/5 h-40"></div>
        </div>
      </div>

      <div className="py-5 bg-gray-50">
        <p className="text-4xl font-bold my-4 text-center text-red-600">
          Our Latest News
        </p>

        <Blog
          img={Blog4}
          date="28"
          month="September"
          year="2024"
          title="OmTrans Moves 60ft BOPP Line from Nhava Sheva to Jammu."
          description="We are proud to announce the successful delivery of a 60ft long BOPP line from Nhava Sheva to Jammu. As a trusted name in freight forwarding, we ensure that even the most complex logistics are handled with precision, ensuring timely and safe delivery. This achievement underscores our commitment to delivering excellence across every mile."
        />

        <Blog
          img={Blog5}
          date="02"
          month="July"
          year="2024"
          title="OmTrans Completes First Joint Project with Partner Company Goto Korea."
          description="Omtrans is excited to share the successful delivery of first joint Project cargo after partnership with Goto Japan.The project was moved jointly with Goto Korea Ex Masan Port ( Korea ) to MBPT ( Mumbai ) and further truck down to final destination at Door in Noida. The project consisted of 36pieces and all the pieces were Over dimension. The heaviest equipment weight was 149MT & 91MT ."
        />

        <Blog
          img={Blog1}
          date="11"
          month="November"
          year="2022"
          title="Delivering Oxygen concentrators from China to India by air to fight Covid."
          description="During the second wave of Covid in India, OmTrans has successfully imported 250 oxygen concentrators from China to India in time line manner which was a great support in fighting Covid and helped in saving thousands of lives during the pandemic time."
        />

        <Blog
          img={Blog2}
          date="08"
          month="September"
          year="2022"
          title="Saving Freight Cost by 50%"
          description="With having experience team OmTrans have helped their Exporters in saving 50% freight cost by moving the cargo through Break Bulk to Houston and Baltimore which was really appreciated by the Exporters. OmTrans has successfully delivered 4000 metric tonnes of cargo and monthly moving such volume of cargo to Houston & Baltimore through Break Bulk."
        />
      </div>
      <Scroll_Top />
      <Footer />
    </div>
  );
}

export default News;
