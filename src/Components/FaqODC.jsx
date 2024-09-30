
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

function MyFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const ClickFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const data = [
    {
      id: 1,
      question:
        "What types of projects does OmTrans handle for Project Cargo Management?",
      answer:
        "OmTrans Logistics handles Project Cargo Management for various projects involving bulk loads.",
    },
    {
      id: 2,
      question: "What is Over Dimensional Cargo (ODC), and how does OmTrans optimize solutions for it?",
      answer:
        "ODC refers to shipments that exceed standard dimensions. OmTrans Logistics specializes in optimizing solutions for various ODC shipments, including engines, engine stands, inlet and nose cowls, landing gear, and more.",
    },
    {
      id: 3,
      question: "Why choose OmTrans for Project Cargo Management?",
      answer:
        "OmTrans Logistics stands out with a proficient team, industry expertise, specialized solutions for ODC shipments, and a commitment to simplifying logistics for heavy and bulk cargo, ensuring efficient Project Cargo Management for our clients.",
    },
    {
      id: 4,
      question: "Can OmTrans handle international shipments?",
      answer:
        "Yes, we have extensive experience in managing international shipments, including import and export services, customs clearance, and compliance with international trade regulations.",
    },
  ];

  return (
    <div>
      {data.map((FaqData, index) => (
        <div key={FaqData.id}>
          <div
            className="flex items-center justify-between py-2 cursor-pointer"
            onClick={() => ClickFaq(index)}
          >
            <h1 className="text-lg font-medium">{FaqData.question}</h1>
            <IoIosArrowForward
              className={`${
                openIndex === index ? "rotate-90" : ""
              } duration-200`}
            />
          </div>

          <div
            className={`overflow-hidden transition-all duration-700 ${
              openIndex === index ? "max-h-screen" : "max-h-0"
            }`}
          >
            <p className="py-2">{FaqData.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyFaq;
