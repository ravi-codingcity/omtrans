import React, { useState, useEffect } from "react";

const IncrementingNumber = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    // Fetch the visitor count from the backend
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch("https://new-backend-yulp.onrender.com/api/visitorCount");
        const data = await response.json();
        setNumber(data.visitorCount);
      } catch (error) {
        console.error("Error fetching visitor count:", error);
      }
    };

    // Fetch the visitor count when the component mounts
    fetchVisitorCount();

    // Optionally set an interval to refresh the count every hour (if needed)
    const intervalId = setInterval(fetchVisitorCount, 1800000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col text-5xl sm:pt-12 sm:px-10 sm:items-center sm:mt-12">
      <div className="text-4xl">Visitors</div>
      <div>{number}</div>
    </div>
  );
};

export default IncrementingNumber;
