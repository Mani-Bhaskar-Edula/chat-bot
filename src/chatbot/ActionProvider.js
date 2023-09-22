import React from "react";
import { createClientMessage } from "react-chatbot-kit";
import { useNavigate } from "react-router-dom";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const navigate = useNavigate();
  const handleGotItButton = () => {
    const botMessage = createClientMessage("got it");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
    handleName();
  };
  const handleName = () => {
    const botMessage = createChatBotMessage("Enter Your Name", {
      widget: "input",
      delay: 1000,
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleAge = () => {
    const botMessage = createChatBotMessage("Select Your Age", {
      widget: "userAge",
      delay: 1000,
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const addResult = () => {};

  const enrolledSuccess = () => {
    const botMessage = createChatBotMessage(
      "Thank you. In 5 seconds, bot will exit"
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
    let number = 5;
    setInterval(() => {
      if (number > 0) {
        const botMessage = createChatBotMessage(`${number--}.....`);
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      }
    }, 1000);
    setTimeout(() => {
      navigate("/confirmation");
    }, 6000);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleGotItButton,
            handleName,
            handleAge,
            enrolledSuccess,
            addResult,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;