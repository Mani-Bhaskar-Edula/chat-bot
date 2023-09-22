import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ConfirmationPage = () => {
  const data = useSelector((state) => state.student.student);
  const { name, age } = data;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className="bg-orange-100 py-6 sm:py-8 lg:py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="rounded-lg bg-orange-200 px-4 py-6 md:py-8 lg:py-12">
          <p className="mb-2 text-center font-semibold text-indigo-600 md:mb-3 lg:text-lg">
            Student Management System
          </p>
          <p className="mx-auto max-w-screen-md text-center text-gray-700 md:text-lg">
            Your name <span className="text-indigo-600">{name}</span> aged{" "}
            <span className="text-indigo-600">{age}</span> has been added to
            the student system. You may now exit.
          </p>
          <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center py-3">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/"
                className="inline-block rounded-lg bg-indigo-600 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-700 focus-visible:ring active:bg-indigo-800 md:text-base"
              >
                Exit
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ConfirmationPage;
