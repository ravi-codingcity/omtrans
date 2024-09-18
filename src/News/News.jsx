import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import BgImg from "../assets/News_img.jpg";
import Blog1 from "../assets/blog_2.jpg";
import Blog2 from "../assets/transport_b.jpg";
import Blog3 from "../assets/blog_3.jpg";
import Blog from "../Components/Blog";

function News() {
  return (
    <div>
      <Navbar />
      <div
        className="bg-no-repeat bg-center bg-cover "
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="flex sm:flex-row flex-col items-center justify-around sm:pt-24 pt-4 sm:pb-24 m-auto pb-10 w-[90%]">
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
        <h1 className="bg-gray-300 border-l-4 border-red-600 my-2 text-center w-32 m-auto ">
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
      </div>

      <Footer />
    </div>
  );
}

export default News;
