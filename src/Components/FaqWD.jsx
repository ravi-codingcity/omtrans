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
      question: "What types of warehousing services do you offer?",
      answer:
        "We offer a range of warehousing services including storage, inventory management, order fulfillment, cross-docking, and pick-and-pack services to meet diverse business needs.",
    },
    {
      id: 2,
      question: "Where are your warehouse facilities located?",
      answer:
        "Our warehouse facilities are strategically located near major ports, highways, and distribution centers across various regions to ensure efficient and timely delivery.",
    },
    {
      id: 3,
      question: "Do you provide temperature-controlled warehousing?",
      answer:
        "Yes, we provide temperature-controlled warehousing for goods that require specific storage conditions, such as perishable items, pharmaceuticals, and sensitive materials.",
    },
    {
      id: 4,
      question: "What security measures are in place at your warehouses?",
      answer:
        "Our warehouses are equipped with 24/7 surveillance, fire protection systems, access control, and on-site security personnel to ensure the safety and security of your goods.",
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
