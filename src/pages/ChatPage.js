import React from "react";
import "react-chatbot-kit/build/main.css";
import Chatbot from "react-chatbot-kit";
import { motion } from "framer-motion";
import config from "../chatbot/config";
import MessageParser from "../chatbot/MessageParser";
import ActionProvider from "../chatbot/ActionProvider";

const ChatPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className="flex justify-center p-5 bg-orange-100"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        className="bg-white rounded-lg p-4"
      />
    </motion.div>
  );
};

export default ChatPage;
