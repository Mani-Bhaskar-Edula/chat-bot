import React from "react";
import { motion } from "framer-motion";

const Button = (props) => {
  return (
    <div className="flex justify-center">
      <motion.button
        type="button"
        className="inline-block rounded-lg bg-orange-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-orange-300 transition duration-100 hover:bg-orange-600 focus-visible:ring active:bg-orange-700 md:text-base"
        onClick={props.actions.handleGotItButton}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }} 
      >
        Got It
      </motion.button>
    </div>
  );
};

export default Button;
