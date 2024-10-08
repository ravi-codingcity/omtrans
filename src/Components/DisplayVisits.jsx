import React, { useEffect, useState } from "react";
import axios from "axios";

const IncrementingNumber = () => {
  const [visitorCount, setVisitorCount] = useState(null); // Default starting value

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await axios.get("https://new-backend-yulp.onrender.com/api/visitorCount");
        setVisitorCount(response.data.visitorCount);
      } catch (error) {
        console.error("Error fetching visitor count:", error);
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <div className="flex flex-col text-5xl sm:pt-12 sm:px-10 sm:items-center sm:mt-12">
      <div className="text-4xl">Visitors</div>
      <div>{visitorCount}</div>
    </div>
  );
};

export default IncrementingNumber;
