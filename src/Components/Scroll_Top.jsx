import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";


const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on the scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-3 rounded-full bg-red-500 text-white shadow-md hover:bg-red-600 focus:outline-none"
        >
          <FaArrowUp/>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
