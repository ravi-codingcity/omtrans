import React from "react";
import Navbar from "../Navbar/Navbar";
import BgImg from "../assets/S_img.jpg";
import Scroll_Top from "../Components/Scroll_Top";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";

function Privacy_policy() {
  return (
    <div>
      {/* SEO */}
      <Helmet>
        <title>Privacy Policy | OmTrans Logistics Ltd.</title>
        <meta
          name="description"
          content="Om Trans's commitment to safeguarding your privacy in the freight forwarding and import-export industry. Our privacy policy outlines how we collect, use, and protect your personal information, ensuring transparency and trust. Learn about your rights and our practices for a secure experience."
        />
      </Helmet>

      <Navbar />
      <div
        className="bg-no-repeat bg-center bg-cover "
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="flex sm:flex-row flex-col items-center justify-around sm:pt-24 pt-4 sm:pb-24 m-auto pb-10 w-[90%]">
          <div className="sm:w-3/5	w-full py-6">
            <p className="text-white sm:text-lg text-sm">OmTrans</p>
            <h1 className="text-white sm:text-[3.4vw] font-bold  leading-none text-4xl">
              Privacy Policy
            </h1>
          </div>
          <div className="sm:w-2/5 h-44"></div>
        </div>
      </div>
      <div className="max-w-screen-lg m-auto py-8 px-2 sm:px-0">
        <h1 className="text-2xl font-bold py-3">Privacy Policy</h1>
        <div className="py-2">
          We at <b>OmTrans Logistics</b> respect the privacy of everyone who
          visits this website and are committed to maintaining the privacy and
          security of the personal information of all visitors.
        </div>
        <div className="py-2">
          By using our website, you hereby consent to our Privacy Policy and
          agree to its terms. Our policy on the collection and use of personal
          information and other information is as follows:
        </div>
        <div className="py-2">
          If you are visiting this website to read or download information,
          please note that <b>OmTrans Logistics</b> collects and stores standard
          internet-related information, such as your Internet Protocol (IP)
          address, the date and time of your visit, the type of browser used,
          the pages visited, etc. This information is collected to help
          <b> OmTrans Logistics</b> make this site more useful to its customers
          and is used solely for statistical purposes.
        </div>
        <div className="py-2">
          Our website provides users access to features such as Shipment
          Tracking, Pickup Request, Network Details, Services Offered, Pin Codes
          Served, Proof of Delivery (POD), Shipment Reports, and other services.
          In line with our core business, <b>OmTrans Logistics,</b> as a leading
          player in the freight forwarding industry, may enhance these offerings
          to include additional logistics and freight-related services to
          improve the customer experience.
        </div>
        <div className="py-2">
          Certain areas of the website, such as "Shipment Tracking," may require
          a registration ID or tracking ID for access. Information obtained from
          registered users is used only for <b>'OmTrans Logistics'</b> marketing
          and operational purposes to provide better service to our customers in
          the freight forwarding domain.
        </div>
        <div className="py-2">
          Except as outlined in this privacy policy, <b>OmTrans Logistics </b>
          will not disclose any personally identifiable information without
          consent unless legally required to do so or if we believe it is
          necessary to protect our rights, property, or personal safety.
        </div>
        <div className="py-2">
          <b>OmTrans Logistics</b> reserves the right to change, alter, amend,
          or modify the contents of this privacy policy at any time without
          prior notice.
        </div>
      </div>
      <Scroll_Top />
      <Footer />
    </div>
  );
}

export default Privacy_policy;
