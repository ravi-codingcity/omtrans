import React from "react";
import { motion } from "framer-motion";
import { GiCargoShip } from "react-icons/gi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoIosAirplane } from "react-icons/io";
import { TbTrain } from "react-icons/tb";

const AnimatedShippingContainer = () => {

    const gap = 100

  return (
    <div className="relative flex items-center justify-center  max-w-screen-lg m-auto h-12 overflow-hidden px-2">
      {/* Left Border */}
      <div className="flex-grow border-t border-red-600 mt-9"></div>

      {/* Animated Shipping Container */}
      <motion.div
        className="absolute text-red-500 text-5xl"
        initial={{ x: "510px"  }} // Start from right side off-screen
        animate={{ x: [`calc(-510px - 10px)`, `calc(510px + 400px)`] }} // Move from right to left
        transition={{
          duration: 30, // Duration for one complete cycle
          repeat: Infinity, // Loop infinitely
          ease: "linear", // Linear motion for smooth movement
        }}
      >
        <GiCargoShip className="transform scale-x-[-1]" />
      </motion.div>

      {/* Animated Shipping Truck */}
      <motion.div
        className="absolute text-red-500 text-5xl"
        initial={{ x: "510px"   }} // Start from right side off-screen
        animate={{ x: [`calc(-610px - 10px )`, `calc(510px + 300px ) `] }} // Move from right to left
        transition={{
          duration: 30, // Duration for one complete cycle
          repeat: Infinity, // Loop infinitely
          ease: "linear", // Linear motion for smooth movement
        }}
      >
        <LiaShippingFastSolid className="" />
      </motion.div>

      {/* Animated Shipping Plane */}
      <motion.div
        className="absolute text-red-500 text-5xl"
        initial={{ x: "510px"   }} // Start from right side off-screen
        animate={{ x: [`calc(-710px - 10px )`, `calc(510px + 200px )`] }}// Move from right to left
        transition={{
          duration: 30, // Duration for one complete cycle
          repeat: Infinity, // Loop infinitely
          ease: "linear", // Linear motion for smooth movement
        }}
      >
        <IoIosAirplane className="" />
      </motion.div>

      {/* Animated Shipping Train */}
      <motion.div
        className="absolute text-red-500 text-5xl"
        initial={{ x:  "510px"  }} // Start from right side off-screen
        animate={{ x: [`calc(-810px - 10px)`, `calc(510px + 100px)`] }} // Move from right to left
        transition={{
          duration: 30, // Duration for one complete cycle
          repeat: Infinity, // Loop infinitely
          ease: "linear", // Linear motion for smooth movement
        }}
      >
        <TbTrain className="" />
      </motion.div>

      {/* Right Border */}
      <div className="flex-grow border-t border-red-600 mt-9"></div>
    </div>
  );
};

export default AnimatedShippingContainer;
