import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Button from "../components/Button";
import InputWidget from "../components/InputWidget.js";
import Age from "../components/Age";

const config = {
  initialMessages: [
    createChatBotMessage('Hello, Welcome to Student Info System', {
      widget: "button",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#FCA527", 
      borderRadius: "8px", 
      padding: "12px",
      color: "white",
    },
    chatButton: {
      backgroundColor: "#FF8C00",
      borderRadius: "4px",
      padding: "8px 16px",
      color: "white",
      fontSize: "14px",
    },
  },
  
  widgets: [
    {
      widgetName: "button",
      widgetFunc: (props) => <Button {...props} />,
    },
    {
      widgetName: "input",
      widgetFunc: (props) => <InputWidget {...props} />,
    },
    {
      widgetName: "userAge",
      widgetFunc: (props) => <Age {...props} />,
    },
  ],
};

export default config;
