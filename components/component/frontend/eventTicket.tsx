"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// API Status Component
function ApiStatusIndicator({ isOnline }: { isOnline: boolean }) {
  return (
    <div className="fixed bottom-4 right-4 flex items-center space-x-2 bg-white dark:bg-gray-800 shadow-lg rounded-full px-3 py-1.5 sm:px-4 sm:py-2 z-50 text-xs sm:text-sm">
      <span className="hidden sm:inline text-gray-600 dark:text-gray-300">
        API Status:
      </span>
      <div className="flex items-center space-x-1.5 sm:space-x-2">
        <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${isOnline ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
        <span className="font-medium text-gray-600 dark:text-gray-300">
          {isOnline ? 'Online' : 'Offline'}
        </span>
      </div>
    </div>
  );
}

// Status Indicator Component
function StatusIndicator({ status, error, isLoading }: { status: string; error: string; isLoading: boolean }) {
  return (
    <div className="fixed top-4 right-4 flex flex-col items-end space-y-2 z-50">
      {isLoading && (
        <div className="bg-yellow-500 dark:bg-yellow-600 text-white px-4 py-2 rounded-lg shadow-lg animate-pulse">
          Processing...
        </div>
      )}
      {error && (
        <div className="bg-red-500 dark:bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg">
          {error}
        </div>
      )}
      {status && !error && (
        <div className="bg-green-500 dark:bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg">
          {status}
        </div>
      )}
    </div>
  );
}

// Confirmation Modal Component
function ConfirmationModal({ show, onClose }: { show: boolean; onClose: () => void }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full mx-4 transform transition-all animate-bounce-once">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900">
            <svg className="h-6 w-6 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Ticket Generated Successfully!</h3>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Your ticket has been generated and downloaded automatically.
          </p>
          <div className="mt-4">
            <button
              onClick={onClose}
              className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
            >
              Got it, thanks!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TicketForm() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const [name, setName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [isApiOnline, setIsApiOnline] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // API status check effect
  useEffect(() => {
    const checkApiStatus = async () => {
      try {
        const response = await fetch(`${API_URL}api/py/health`, {
          cache: 'no-store',
        });
        setIsApiOnline(response.ok);
      } catch (error) {
        setIsApiOnline(false);
      }
    };

    checkApiStatus();
    const interval = setInterval(checkApiStatus, 30000);
    return () => clearInterval(interval);
  }, [API_URL]);

  const generateTicket = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setStatus("");
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}api/py/generate-ticket`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ name, reg_no: regNo }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail || 'Failed to generate ticket');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${regNo}_ticket.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      setStatus("Ticket generated successfully!");
      setShowConfirmation(true);
      setName("");
      setRegNo("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <StatusIndicator status={status} error={error} isLoading={isLoading} />
      <ApiStatusIndicator isOnline={isApiOnline} />
      <ConfirmationModal show={showConfirmation} onClose={() => setShowConfirmation(false)} />
      
      {/* Enhanced Header Section */}
      <div className="relative bg-blue-600 dark:bg-blue-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900 opacity-90"></div>
        <header className="relative py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <span className="inline-block p-2 bg-blue-200 dark:bg-blue-800 rounded-lg mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4">
                Event Registration
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 dark:text-blue-200 max-w-2xl mb-6">
                Generate your exclusive event ticket here
              </p>
              <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6 text-sm text-blue-100">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Event Date: February 22, 2025</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Venue: Academic Block 1, Room ###</span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:py-12 px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Form Section */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-4 sm:mb-6">
                Ticket Details
              </h2>
              <form onSubmit={generateTicket} className="space-y-4 sm:space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                             focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                             dark:bg-gray-700 dark:text-white transition-all
                             text-base sm:text-sm"
                    required
                  />
                </div>

                {/* Registration Number Input */}
                <div>
                  <label htmlFor="regNo" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Registration Number
                  </label>
                  <input
                    id="regNo"
                    type="text"
                    placeholder="Enter your registration number"
                    value={regNo}
                    onChange={(e) => setRegNo(e.target.value)}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                             focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                             dark:bg-gray-700 dark:text-white transition-all
                             text-base sm:text-sm"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full p-3 rounded-lg text-white font-medium transition-all duration-200 ${
                    isLoading 
                      ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 dark:bg-blue-700 dark:hover:bg-blue-800'
                  }`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Generating...
                    </span>
                  ) : 'Generate Ticket'}
                </button>
              </form>
            </div>
          </div>

          {/* Info Section */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-4 sm:mb-6">
                Event Information
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/50 rounded-lg">
                  <h3 className="font-medium text-blue-800 dark:text-blue-300">Important Notes</h3>
                  <ul className="mt-2 text-sm text-blue-700 dark:text-blue-200 list-disc list-inside">
                    <li>Please keep your ticket safe</li>
                    <li>Ticket is non-transferable</li>
                    <li>Show your ID along with the ticket</li>
                  </ul>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    Need help? Contact event support at support@example.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}