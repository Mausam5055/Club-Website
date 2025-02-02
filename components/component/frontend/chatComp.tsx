"use client";

import { useState } from "react";
import { FaCommentDots } from "react-icons/fa";
import Chatbot from "./chatbot";

const ChatComp = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <div>
      <div
        className="fixed bottom-4 right-4 bg-lime-900 p-3 rounded-full cursor-pointer text-white shadow-lg z-50"
        onClick={toggleChatbot}
      >
        <FaCommentDots size={24} />
      </div>
      {isChatbotOpen && <Chatbot onClose={toggleChatbot} />}
    </div>
  );
};

export default ChatComp;
