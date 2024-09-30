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
        "What services does OmTrans provide in supply chain management?",
      answer:
        "We offer comprehensive supply chain solutions, including freight forwarding, warehousing, inventory management, order fulfillment, customs clearance, and transportation services, tailored to meet the specific needs of your business.",
    },
    {
      id: 2,
      question: "Do you provide real-time tracking for shipments?",
      answer:
        "Yes, OmTrans offers real-time tracking for all shipments, allowing you to monitor your cargo's progress from origin to destination via our online platform.",
    },
    {
      id: 3,
      question: "What types of industries do you serve?",
      answer:
        "We cater to various industries, including manufacturing, retail, e-commerce, automotive, pharmaceuticals, and more. Our supply chain solutions are customized to meet the unique requirements of each industry.",
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
