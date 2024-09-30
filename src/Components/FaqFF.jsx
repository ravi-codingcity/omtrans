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
      question: "What types of freight services do you offer?",
      answer:
        "OmTrans provides a comprehensive range of freight services, including air freight, sea freight, road freight, and rail freight, catering to both domestic and international shipping needs.",
    },
    {
      id: 2,
      question: "Can OmTrans handle international shipments?",
      answer:
        "Yes, we specialize in international freight forwarding, managing shipments to and from destinations worldwide with expertise in navigating complex customs regulations and documentation.",
    },
    {
      id: 3,
      question: "What are your rates for freight forwarding services?",
      answer:
        "Our rates are competitive and depend on various factors such as shipment size, weight, mode of transport, and destination. Contact us for a customized quote tailored to your specific needs.",
    },
    {
      id: 4,
      question: "Can I track my shipment in real time?",
      answer:
        "Absolutely! We provide real-time tracking for all shipments through our online portal, allowing you to monitor your cargo’s progress at any stage of the journey.",
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
