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
      <div className="fixed bottom-4 right-4 flex items-center">
        <div className="relative group">
          <div className="absolute -right-1 -top-1 w-3 h-3 bg-red-500 rounded-full animate-bounce"></div>
          <div className="absolute -top-12 right-0 bg-white text-gray-800 px-4 py-2 rounded-lg 
            shadow-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 
            whitespace-nowrap backdrop-blur-sm">
            Need help? Chat with us!
          </div>
          <div
            className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 rounded-full 
            cursor-pointer shadow-lg z-50 transition-all duration-300 ease-in-out 
            hover:scale-110 hover:shadow-xl transform active:scale-95 
            backdrop-blur-sm backdrop-filter"
            onClick={toggleChatbot}
          >
            <FaCommentDots size={24} className="text-white animate-pulse" />
          </div>
        </div>
      </div>
      {isChatbotOpen && (
        <div className="animate-fadeIn">
          <Chatbot onClose={toggleChatbot} />
        </div>
      )}
    </div>
  );
};

export default ChatComp;
