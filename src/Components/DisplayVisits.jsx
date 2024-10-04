import React, { useState, useEffect } from "react";

const IncrementingNumber = () => {
  // Initialize state
  const [number, setNumber] = useState(825);

  useEffect(() => {
    // Function to increment the number
    const incrementNumber = () => {
      setNumber((prevNumber) => prevNumber + 1); // Increase by 1 for demonstration
    };

    // Set interval to increment the number every 2 hours (7200000 milliseconds)
    const intervalId = setInterval(incrementNumber, 7200000);

    // Cleanup function to clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures it runs only on mount

  return (
    <div>
      <h1 className="text-lg mt-4 px-2">Users: {number}</h1>
    </div>
  );
};

export default IncrementingNumber;
