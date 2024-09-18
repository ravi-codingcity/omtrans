import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BgImg1 from "../assets/Backgroundc.jpg";
import BgImg2 from "../assets/Bg-2.jpg";
import BgImg4 from "../assets/Bg-4.jpg";
import BgImg5 from "../assets/Bg-5.jpg";

const slides = [
  {
    image: BgImg1,
    text: ["Simplifying Your Business"],
  },
  {
    image: BgImg2,
    text: ["24 years of Global Experience", <br />, "in Freight Forwarding"],
  },

  {
    image: BgImg4,
    text: ["90+ Countries Presence Worldwide"],
  },
  {
    image: BgImg5,
    text: ["OmTrans Provides", <br />, "Integrated Logistics Solutions"],
  },
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(autoSlide);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full max-w-full mx-auto">
      {/* Slider Container */}
      <div className="overflow-hidden relative h-[450px] ">
        <AnimatePresence initial={false}>
          {slides.map((slide, index) =>
            currentSlide === index ? (
              <motion.div
                key={index}
                className="absolute w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.1 }} // Fade duration
              >
                <img
                  src={slide.image}
                  alt={slide.text}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 flex items-center text-center justify-center text-white text-5xl font-bold leading-snug"
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.7 }} // Slide duration
                >
                  {slide.text}
                </motion.div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white p-2 text-xl shadow-md"
      >
        &#8249;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white p-2 text-xl shadow-md"
      >
        &#8250;
      </button>
    </div>
  );
}
