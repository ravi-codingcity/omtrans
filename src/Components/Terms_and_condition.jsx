import React from "react";
import Navbar from "../Navbar/Navbar";
import BgImg from "../assets/S_img.jpg";
import Scroll_Top from "../Components/Scroll_Top";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";

function Terms_and_condition() {
  return (
    <div>
      {/* SEO */}
      <Helmet>
        <title>Terms and Conditions | OmTrans Logistics Ltd.</title>
        <meta
          name="description"
          content="OmTrans' comprehensive Terms and Conditions governing our Freight Forwarding and Import-Export services. Understand our policies, rules, and guidelines designed to ensure smooth operations and customer satisfaction in the logistics industry."
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
              Terms and Condition
            </h1>
          </div>
          <div className="sm:w-2/5 h-44"></div>
        </div>
      </div>
      <div className="max-w-screen-lg m-auto py-8 px-2 sm:px-0">
        <h1 className="text-2xl font-bold py-3">Terms and Conditions</h1>
        <div className="py-2">
          Visitors to this website are bound by the following terms and
          conditions (“Terms”). Please read the Terms carefully before
          continuing to use this site. If you do not agree with any of these
          Terms, please do not use this site.
        </div>
        <div className="py-2">
          The use of this website is subject to the following terms of use:
        </div>
        <ul className="list-disc list-inside space-y-3">
          <li>
            The content of the pages of this website is for your general
            information and use only. It is subject to change without notice.
          </li>
          <li>
            This website uses cookies to monitor browsing preferences. If you
            allow cookies to be used, personal information may be stored by us
            for use by third parties.
          </li>
          <li>
            Your use of any information or materials on this website is entirely
            at your own risk, for which <strong>OmTrans Logistics</strong> shall
            not be liable. It is your responsibility to ensure that any
            products, services, or information available through this website
            meet your specific requirements, especially in the context of our
            core freight forwarding services.
          </li>
          <li>
            Neither <strong>OmTrans Logistics</strong> nor any third parties
            provide any warranty or guarantee as to the accuracy, timeliness,
            performance, completeness, or suitability of the information and
            materials found or offered on this website for any particular
            purpose. You acknowledge that such information and materials may
            contain inaccuracies or errors, and we expressly exclude liability
            for any such inaccuracies or errors to the fullest extent permitted
            by law.
          </li>
          <li>
            This website contains material that is owned by or licensed to us.
            This material includes, but is not limited to, the appearance,
            graphics, design, layout, etc.
          </li>
          <li>
            The <strong>OmTrans Logistics</strong> trademarks and all logos
            denoted with “TM” or “®” are trademarks or registered trademarks of
            OmTrans Logistics or its affiliates. These trademarks may not be
            used in connection with any product or service that is not an
            OmTrans Logistics product or service, particularly within the domain
            of freight forwarding.
          </li>
          <li>
            Unauthorized use of this website may give rise to a claim for
            damages and/or be a criminal offense.
          </li>
          <li>
            From time to time, this website may include links to other websites.
            These links are provided for your convenience to provide further
            information. They do not signify that{" "}
            <strong>OmTrans Logistics</strong> endorses the website(s), and we
            have no responsibility for the content of the linked website(s).
          </li>
        </ul>
        <div className="py-2">
          <strong>Applicable Law and Jurisdiction:</strong> The use of this
          website is governed by and interpreted in accordance with the laws of
          India, without regard to the choice or conflicts of law provisions of
          any jurisdiction. The user/site visitor agrees that in the event of
          any dispute arising in relation to this Disclaimer or any dispute
          related to the website, whether in contract, tort, or otherwise, they
          will submit to the jurisdiction of the courts located in Delhi only
          for the resolution of all such disputes.
        </div>
      </div>
      <Scroll_Top />
      <Footer />
    </div>
  );
}

export default Terms_and_condition;
