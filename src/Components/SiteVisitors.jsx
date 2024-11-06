import React, { useState, useEffect } from "react";

const IncrementingNumber = () => {
  const [visitorCount, setVisitorCount] = useState(null);

  // Function to fetch count from the backend
  async function fetchCount() {
    try {
      const response = await fetch("https://new-backend-kappa.vercel.app/api/count");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setVisitorCount(data.count); // Update the state with the fetched count
    } catch (error) {
      console.error("Error fetching count:", error);
    }
  }

  useEffect(() => {
    // Fetch count immediately when the component mounts
    fetchCount();

    // Set a short interval to keep fetching the updated count
    const intervalId = setInterval(fetchCount, 60000); // Fetch every minute

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col text-5xl sm:pt-12 sm:px-10 sm:items-center sm:mt-12">
      <div className="text-4xl">Visitors</div>
      <div>
        {visitorCount !== null ? (
          visitorCount
        ) : (
          <div className="text-xl">Loading...</div>
        )}
      </div>
    </div>
  );
};

export default IncrementingNumber;
