import React, { useState, useEffect } from "react";
import axios from "axios";
import BgImg from "../assets/S_img.jpg";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CareerForm from "./Careers_form";
import { Helmet } from "react-helmet";

function Careers() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const result = await axios.get(
      "https://new-backend-yulp.onrender.com/api/jobs"
    );
    setJobs(result.data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Function to format the date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div>
      {/* SEO */}
      <Helmet>
        <title>Careers | OmTrans Logistics Ltd.</title>
        <meta
          name="description"
          content="Explore exciting career opportunities at OmTrans, a leading player in the Freight Forwarding and Import-Export industry. Join our dynamic team and be a part of a global logistics network dedicated to delivering seamless supply chain solutions."
        />

        <meta
          name="keywords"
          content="OmTrans careers,
Freight forwarding jobs,
Logistics industry careers,
Import-export jobs,
Supply chain management careers,
OmTrans job opportunities,
Freight logistics careers,
Global logistics jobs,
Careers in freight forwarding,
Logistics and supply chain jobs,
Import-export industry careers,
Freight forwarding recruitment,
OmTrans job openings,
Logistics careers India,
Supply chain and logistics vacancies"
        />
      </Helmet>

      <Navbar />
      <div
        className="bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="flex sm:flex-row flex-col items-center justify-around sm:pt-24 pt-4 sm:pb-24 m-auto pb-10 w-[90%]">
          <div className="sm:w-3/5	w-full py-6">
            <p className="text-white sm:text-lg text-sm">OmTrans</p>
            <h1 className="text-white sm:text-[3.4vw] font-bold  leading-none text-4xl">
              Careers
            </h1>
          </div>
          <div className="sm:w-2/5 h-44"></div>
        </div>
      </div>

      <div className="bg-slate-100 py-5">
        <div className=" py-5 max-w-screen-lg m-auto sm:px-0 px-3 ">
          <h1 className="text-3xl font-bold py-2 text-center text-red-600">
            Unlock Your Potential with Us – Join Our Dynamic Team
          </h1>
          <p className="text-xl font-semibold py-3">
            Launch your career at OmTrans, World's leading Import Export and
            Logistics Expert! We offer endless opportunities to grow and make
            your mark in the industry:
          </p>
        </div>

        <div className="flex flex-wrap justify-center max-w-screen-lg m-auto my-5">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <div
                key={job._id}
                className="bg-white w-[305px] max-h-[295px] py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-blue-600 border mx-2 my-3"
              >
                <h2 className="text-xl font-bold pt-2 pb-1 text-red-600 text-center">
                  {job.title}
                </h2>
                <p className="text-base font-medium py-1 text-center">
                  {job.description}
                </p>
                <p className="text-sm font text-center pt-1">
                  Job Location: {job.location}
                </p>
                {/* Display formatted date */}
                <p className="text-sm text-center text-gray-500">
                  Posted on: {formatDate(job.datePosted)}
                </p>
              </div>
            ))
          ) : (
            <div className="text-center text-xl font-bold py-8 text-red-600">
              Currently we don't have any jobs openings at OmTrans. <br /> Check
              out our page sometime later
            </div>
          )}
        </div>
      </div>

      <div className="py-8 my-5 sm:mx-0 mx-2">
        <CareerForm />
      </div>
      <Footer />
    </div>
  );
}

export default Careers;
