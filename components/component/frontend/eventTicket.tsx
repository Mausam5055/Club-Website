"use client"; // Ensure this is included for client-side rendering

import Image from "next/image";
import { useState } from "react";

export default function TicketForm() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  console.log(API_URL);
  const [name, setName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  const [error, setError] = useState("");
  const [ticketGenerated, setTicketGenerated] = useState(false); // Track if ticket is generated

  const generateTicket = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setDownloadUrl("");
    setTicketGenerated(false); // Reset ticket generation state

    try {
      const response = await fetch(`${API_URL}/py/generate-ticket`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ name, reg_no: regNo }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Something went wrong");
      }

      const data = await response.json();
      setDownloadUrl(`${API_URL}${data.ticket}`);
      setTicketGenerated(true); // Set the state to indicate ticket is ready
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

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

      {/* Show the download button only if the ticket is generated */}
      {ticketGenerated && downloadUrl && (
        <img
          width={2000}
          height={647}
          alt="Ticket"
          src={downloadUrl}
          className="block mt-4 text-center bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Download Ticket
        </img>
      )}
    </div>
  );
}
