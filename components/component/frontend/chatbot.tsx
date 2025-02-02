// "use client";

// import React, { useState } from "react";
// import clsx from "clsx";

// const Chatbot = ({ onClose }: { onClose: () => void }) => {
//   const [messages, setMessages] = useState<
//     { role: "user" | "assistant"; content: string }[]
//   >([]);
//   const [input, setInput] = useState("");

//   const formatMessageContent = (content: string) => {
//     const urlRegex = /(https?:\/\/[^\s]+)/g;
//     const parts = content.split(urlRegex);

//     return parts.map((part, index) => {
//       if (urlRegex.test(part)) {
//         return (
//           <a
//             key={index}
//             href={part}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-500 underline hover:text-blue-700"
//           >
//             {part}
//           </a>
//         );
//       }
//       return <span key={index}>{part}</span>;
//     });
//   };

//   const sendMessage = async () => {
//     if (!input) return;

//     const userMessage: { role: "user" | "assistant"; content: string } = { role: "user", content: input };
//     setMessages((prev) => [...prev, userMessage]);

//     try {
//       const response = await fetch("/api/chatbot", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ question: input }),
//       });
//       const data = await response.json();

//       if (response.ok) {
//         const assistantMessage: { role: "user" | "assistant"; content: string } = { role: "assistant", content: data.response };
//         setMessages((prev) => [...prev, assistantMessage]);
//       } else {
//         console.error("Failed to fetch response");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     } finally {
//       setInput("");
//     }
//   };

//   return (
//     <div className="fixed bottom-16 right-4 w-96 bg-white shadow-lg rounded-lg overflow-hidden z-50">
//       <div className="flex justify-between items-center bg-blue-500 text-white px-4 py-2">
//         <h3 className="font-bold">Chat Assistant</h3>
//         <button
//         title="close chat"
//           onClick={onClose}
//           className="text-xl font-bold hover:text-gray-300"
//         >
//           ×
//         </button>
//       </div>
//       <div className="p-4 h-96 overflow-y-auto space-y-3">
//         {messages.map((msg, idx) => (
//           <div
//             key={idx}
//             className={clsx(
//               "flex",
//               msg.role === "user" ? "justify-end" : "justify-start"
//             )}
//           >
//             <div
//               className={clsx(
//                 "px-4 py-2 rounded-lg max-w-md",
//                 msg.role === "user"
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-200 text-gray-800"
//               )}
//             >
//               <p className="text-sm">{formatMessageContent(msg.content)}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="flex items-center p-4 border-t border-gray-200">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Ask a question..."
//           className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <button
//           title="send message"
//           onClick={sendMessage}
//           className="ml-3 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;
"use client";

import React, { useState } from "react";
import clsx from "clsx";

const Chatbot = ({ onClose }: { onClose: () => void }) => {
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; content: string }[]
  >([]);
  const [input, setInput] = useState("");

  const formatMessageContent = (content: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = content.split(urlRegex);

    return parts.map((part, index) => {
      if (urlRegex.test(part)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700"
          >
            {part}
          </a>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  const sendMessage = async () => {
    if (!input) return;

    const userMessage: { role: "user" | "assistant"; content: string } = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input }),
      });
      const data = await response.json();

      if (response.ok) {
        const assistantMessage: { role: "user" | "assistant"; content: string } = { role: "assistant", content: data.response };
        setMessages((prev) => [...prev, assistantMessage]);
      } else {
        console.error("Failed to fetch response");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setInput("");
    }
  };

  return (
    <div className="fixed bottom-16 right-4 w-96 bg-white shadow-lg rounded-lg overflow-hidden z-50">
      <div className="flex justify-between items-center bg-blue-500 text-white px-4 py-2">
        <h3 className="font-bold">Chat Assistant</h3>
        <button
        title="close chat"
          onClick={onClose}
          className="text-xl font-bold hover:text-gray-300"
        >
          ×
        </button>
      </div>
      <div className="p-4 h-96 overflow-y-auto space-y-3">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={clsx(
              "flex",
              msg.role === "user" ? "justify-end" : "justify-start"
            )}
          >
            <div
              className={clsx(
                "px-4 py-2 rounded-lg max-w-md",
                msg.role === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              )}
            >
              <p className="text-sm">{formatMessageContent(msg.content)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center p-4 border-t border-gray-200">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
          className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          title="send message"
          onClick={sendMessage}
          className="ml-3 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
