import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Thank_you() {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-lg m-auto py-4">
        <h1 className="text-4xl font-bold py-4 ">
          Thank you for your Quote Request.
        </h1>
        <p className="py-5">
          <p className="py-6">Dear Madam/Sir,</p> Your request will be send
          directly to our Office. <br />
          We will return with an answer as soon as possible.
        </p>
        <p className="font-semibold py-10 text-lg">
          {" "}
          We have sent a copy of your request to your email.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Thank_you;
