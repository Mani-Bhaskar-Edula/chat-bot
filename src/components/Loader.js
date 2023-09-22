import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  const spinnerVariants = {
    start: { rotate: 0 },
    end: { rotate: 360, transition: { duration: 1.5, loop: Infinity } },
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <motion.div
        className="rounded-full h-12 w-12 border-t-2 border-orange-500"
        variants={spinnerVariants}
        initial="start"
        animate="end"
      ></motion.div>
    </div>
  );
};

export default Loader;
