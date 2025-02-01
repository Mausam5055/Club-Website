"use client"; // Ensure this is included for client-side rendering
import { useState } from "react";

export default function TicketForm() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  console.log(API_URL);
  const [name, setName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [error, setError] = useState("");

  const generateTicket = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      fetch(`${API_URL}api/py/generate-ticket`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ name, reg_no: regNo }),
      })
        .then((response) => response.blob())  // Treat the response as a blob (binary data)
        .then((blob) => {
          // Create a temporary URL for the blob
          const href = URL.createObjectURL(blob);
    
          // Create a link element
          const a = document.createElement("a");
          document.body.appendChild(a);
    
          // Hide the link element (for cleaner UI)
          a.style.display = "none";
    
          // Set the download URL to the blob URL
          a.href = href;
    
          // Set the download file name
          a.download = `${regNo}_ticket.png`;
    
          // Trigger the download
          a.click();
    
          // Clean up the blob URL after download
          URL.revokeObjectURL(href);
        })
        .catch((err) => {
          // Handle errors
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError("An unknown error occurred");
          }
        });
    } catch (err) {
      setError("An unknown error occurred");
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-bold mb-4">Generate Ticket</h2>
      <form onSubmit={generateTicket} className="space-y-4">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          placeholder="Enter Reg No"
          value={regNo}
          onChange={(e) => setRegNo(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Generate Ticket
        </button>
      </form>

      {error && <p className="text-red-500 mt-2">{error}</p>}  
    </div>
  );
}