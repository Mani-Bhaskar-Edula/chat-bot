import React, { useState } from "react";
import { createClientMessage } from "react-chatbot-kit";
import { useDispatch } from "react-redux";
import { addStudentAge } from "../features/student/studentSlice.js";

const Age = (props) => {
  const [age, setAge] = useState("");
  const dispatch = useDispatch();
  const array = [];
  for (let i = 18; i <= 40; i++) {
    array.push(i);
  }

  const handleChange = (e) => {
    const selectedAge = e.target.value;
    setAge(selectedAge);

    // Create a bot message
    const botMessage = createClientMessage(selectedAge);

    // Update chat messages and dispatch Redux action
    props.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
    dispatch(addStudentAge(selectedAge));

    // Trigger success message from action provider
    props.actionProvider.enrolledSuccess();
  };

  return (
    <div className="flex flex-col items-center">
      <select
        className="border w-52 p-2 rounded-lg bg-orange-200 text-orange-800 focus:outline-none"
        value={age}
        onChange={handleChange}
      >
        <option disabled value="">
          Select Your Age
        </option>
        {array.map((num, ind) => (
          <option key={ind} value={num}>
            {num}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Age;
