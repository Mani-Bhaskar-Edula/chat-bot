import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className="bg-orange-100 py-10 sm:py-16 lg:py-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col items-center justify-center text-center sm:text-left">
            <p className="mb-2 text-orange-500 text-lg font-semibold">
              Oops! Page not found
            </p>
            <h1 className="mb-4 text-3xl font-bold text-gray-800">
              We couldn't find what you were looking for.
            </h1>

            <p className="mb-8 text-gray-600">
              The page you're trying to access doesn't exist.
            </p>

            <motion.button
              onClick={() => goBack()}
              className="inline-block rounded-lg bg-orange-500 px-6 py-2 text-sm font-semibold text-white transition duration-100 hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Go Back
            </motion.button>
          </div>

          <div className="relative h-80 md:h-auto">
            <img
              src="https://s3.envato.com/files/265894738/Not-Found-404-Orange.png"
              loading="lazy"
              alt="Error 404"
              className="absolute inset-0 h-full w-full object-cover object-center rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFound;
