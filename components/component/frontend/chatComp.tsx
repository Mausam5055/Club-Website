"use client";

import { useState } from "react";
import { FaCommentDots } from "react-icons/fa";
import Chatbot from "./chatbot";

const ChatComp = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleChatbot();
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 flex items-center z-40">
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
            onClick={handleClick}
          >
            <FaCommentDots size={24} className="text-white animate-pulse" />
          </div>
        </div>
      </div>
      {isChatbotOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 z-40 pointer-events-none"
        >
          <div 
            className="fixed bottom-20 right-4 z-50 pointer-events-auto"
          >
            <Chatbot onClose={toggleChatbot} />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatComp;
