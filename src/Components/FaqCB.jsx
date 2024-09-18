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
      question: " Is there a difference between import and export clearance?",
      answer:
        "In terms of customs clearance, the process for export and import clearance is very similar. However, importing materials and products will involve an assessment of the goods and payment of import taxes and duties.",
    },
    {
      id: 2,
      question: "Who is responsible for customs clearance?",
      answer:
        "In the majority of international shipping situations, the seller is responsible for export customs clearance and the buyer for the import clearance. However, the exact prearrangement will depend on the agreed Incoterm for the sales transaction. The customs procedure itself is completed by a customs broker who is a logistics expert and ensures that shipments meet all standards, laws, and regulations for the import and export of the goods. The customs broker creates the customs entry and assists with all necessary administration, calculation of duties and taxes, and the payments thereof",
    },
    {
      id: 3,
      question: "Can I organize the customs clearance myself?",
      answer:
        "For many countries, there is no legal requirement that you must hire a customs broker to clear imports. However, we recommend you working with a licensed customs broker because only customs brokers have the knowledge and experience to complete the duties of clearing goods through customs. Engage with an experienced customs broker to avoid mistakes, delays, or extra costs.",
    },
    {
      id: 4,
      question: "How can I check the status of the customs clearance process?",
      answer:
        "Your customs broker or freight forwarder should be able to keep you up to date with the status of your customs clearance. They should immediately inform you if there are any holdups or delays and many customs brokers and freight forwarders have online/ digital services from which you can track your cargo to the completion of the journey.",
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
