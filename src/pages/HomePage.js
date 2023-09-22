import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2, duration: 0.8 } },
  };

  return (
    <motion.div
      className="bg-orange-100 py-6 sm:py-8 lg:py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <motion.h4
            className="mb-8 text-medium font-bold text-black sm:text-2xl md:mb-12 md:text-3xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
          Enter into Student Info System
          </motion.h4>

          <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
            <Link
              to="/chat-page"
              className="inline-block rounded-lg bg-orange-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-orange-300 transition duration-100 hover:bg-orange-600 focus-visible:ring active:bg-orange-700 md:text-base"
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enroll Now!
              </motion.span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
