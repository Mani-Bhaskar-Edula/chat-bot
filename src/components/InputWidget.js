import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudentName } from "../features/student/studentSlice";
import { createClientMessage } from "react-chatbot-kit";
import { motion } from "framer-motion";

const InputWidget = (props) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleFunction = (event) => {
    if (event.key === "Enter") {
      dispatch(addStudentName(name));

      const botMessage = createClientMessage(name);
      props.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
      props.actionProvider.handleAge();
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.6 } },
  };

  return (
    <motion.div
      variants={inputVariants}
      initial="hidden"
      animate="visible"
      className="mb-4"
    >
      <input
        type="text"
        className="p-2 border bg-orange-100 focus:outline-none focus:ring focus:ring-orange-300"
        placeholder="Enter Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={handleFunction}
      />
    </motion.div>
  );
};

export default InputWidget;
