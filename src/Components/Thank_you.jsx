import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Thank_you() {
  const [referenceNumber, setReferenceNumber] = useState("");

  useEffect(() => {
    // Retrieve the reference number from local storage
    const refNumber = localStorage.getItem("referenceNumber");
    setReferenceNumber(refNumber);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bg-slate-100">
        <div className="max-w-screen-lg m-auto py-4 ">
          <h1 className="text-4xl font-bold py-4 ">
            Thank you for your Quote Request.
          </h1>
          <div className="flex items-center py-2">
            <p className="font-semibold py-5 text-xl">
              Here is your Unique Reference Number:
            </p>
            {/* Display the reference number */}
            <p className="text-2xl font-semibold text-red-600 py-3 ml-2">
              {referenceNumber}
            </p>
          </div>

          <p className="pt-2 pb-10">
            <p className="py-3 font-semibold">Dear Madam/Sir,</p> Your request
            will be sent directly to our Office. <br />
            We will return with an answer as soon as possible.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Thank_you;
