"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// API Status Component
function ApiStatusIndicator({ isOnline }: { isOnline: boolean }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed bottom-6 right-6 flex items-center space-x-3 bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-xl rounded-full px-4 py-2.5 sm:px-5 sm:py-3 z-50 text-sm sm:text-base border border-white/50 dark:border-gray-800"
    >
      <span className="hidden sm:inline text-gray-600 dark:text-gray-200 font-medium">
        API Status:
      </span>
      <div className="flex items-center space-x-2 sm:space-x-3">
        <div
          className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full ${
            isOnline ? "bg-green-500 animate-pulse" : "bg-red-500"
          }`}
        />
        <span className="font-medium text-gray-700 dark:text-gray-200">
          {isOnline ? "Online" : "Offline"}
        </span>
      </div>
    </motion.div>
  );
}

// Status Indicator Component
function StatusIndicator({
  status,
  error,
  isLoading,
}: {
  status: string;
  error: string;
  isLoading: boolean;
}) {
  return (
    <div className="fixed top-6 right-6 flex flex-col items-end space-y-3 z-50">
      {isLoading && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-5 py-3 rounded-full shadow-lg flex items-center"
        >
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Processing...</span>
        </motion.div>
      )}
      {error && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="bg-gradient-to-r from-red-500 to-red-600 text-white px-5 py-3 rounded-full shadow-lg"
        >
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 drop-shadow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{error}</span>
          </div>
        </motion.div>
      )}
      {status && !error && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-3 rounded-full shadow-lg"
        >
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 drop-shadow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{status}</span>
          </div>
        </motion.div>
      )}
    </div>
  );
}

// Confirmation Modal Component
function ConfirmationModal({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-black rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl border border-white/20 dark:border-gray-800"
      >
        <div className="text-center">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              delay: 0.1 
            }}
            className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-green-400 to-green-600 mb-6 shadow-lg"
          >
            <svg
              className="h-8 w-8 text-white drop-shadow"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-extralight text-gray-900 dark:text-white mb-2"
          >
            Certificate Generated <span className="font-semibold bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">Successfully!</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 dark:text-gray-300 mb-8"
          >
            Your Certificate has been Generated and Downloaded Automatically...
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <button
              onClick={onClose}
              className="inline-flex justify-center w-full px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 border border-transparent rounded-xl hover:from-blue-700 hover:to-purple-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 shadow-lg transition-all duration-300"
            >
              Got it, thanks!
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default function CertificateForm() {
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
          cache: "no-store",
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

  // Add useEffect to clear status message after 3 seconds
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (status) {
      timeoutId = setTimeout(() => {
        setStatus("");
      }, 3000);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [status]);

  const generatecertificate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setStatus("");
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}api/py/generate-certificate`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
           name, reg_no: regNo }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail || "Failed to generate certificate");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${regNo}_certificate.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      setStatus("Certificate Generated Successfully!");
      setShowConfirmation(true);
      setName("");
      setRegNo("");
      // Confirmation modal will auto-close after 3 seconds
      setTimeout(() => {
        setShowConfirmation(false);
      }, 3000);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-black dark:to-black">
      <StatusIndicator status={status} error={error} isLoading={isLoading} />
      <ApiStatusIndicator isOnline={isApiOnline} />
      <ConfirmationModal
        show={showConfirmation}
        onClose={() => setShowConfirmation(false)}
      />

      {/* Enhanced Header Section with Magazine-style Design */}
      <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 dark:from-black dark:to-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-600/90 dark:from-black/90 dark:to-black/90"></div>
        {/* Background pattern for better visibility in dark mode */}
        <div className="absolute inset-0 bg-[url('/images/hero-image.jpg')] bg-cover bg-center opacity-10 dark:opacity-20"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 left-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        <header className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center mb-8"
              >
                <div className="p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-2xl">
                  <svg
                    className="w-12 h-12 text-white drop-shadow-lg"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                    />
                  </svg>
                </div>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-[-0.02em] text-white mb-6 leading-[0.9] font-serif max-w-4xl drop-shadow-xl"
              >
                Event <span className="font-bold bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">Registration</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl sm:text-2xl text-blue-100 dark:text-blue-200 max-w-3xl mb-10 font-extralight drop-shadow-md"
              >
                Generate your Exclusive Event Certificate here...
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-10 text-lg text-blue-100"
              >
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 shadow-lg">
                  <svg
                    className="w-6 h-6 mr-3 drop-shadow"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Event Date: February 22, 2025</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 shadow-lg">
                  <svg
                    className="w-6 h-6 mr-3 drop-shadow"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Venue: Academic Block 1, Room ###</span>
                </div>
              </motion.div>
            </div>
          </div>
        </header>
        
        {/* Corner accents with better visibility in dark mode */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-white/30" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-white/30" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-white/30" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-white/30" />
      </div>

      {/* Spacer section with subtle gradient */}
      <div className="h-16 bg-gradient-to-b from-blue-500/30 to-transparent dark:from-blue-900/30"></div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Form Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="bg-white/80 dark:bg-black/80 backdrop-blur-xl shadow-2xl rounded-3xl p-6 sm:p-8 border border-white/50 dark:border-gray-800">
              <h2 className="text-2xl sm:text-3xl font-extralight text-gray-800 dark:text-white mb-6">
                Certificate <span className="font-semibold bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">Details</span>
              </h2>
              <form
                onSubmit={generatecertificate}
                className="space-y-6"
              >
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-4 border border-gray-300 dark:border-gray-800 rounded-xl 
                               focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                               dark:bg-black/50 dark:text-white transition-all
                               text-base backdrop-blur-sm bg-white/50
                               dark:placeholder-gray-400"
                      required
                    />
                    <div className="absolute inset-0 rounded-xl shadow-[0_0_0_1px_rgba(0,0,0,0.1)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.1)] pointer-events-none"></div>
                  </div>
                </div>

                {/* Registration Number Input */}
                <div>
                  <label
                    htmlFor="regNo"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                  >
                    Registration Number
                  </label>
                  <div className="relative">
                    <input
                      id="regNo"
                      type="text"
                      placeholder="Enter your registration number"
                      value={regNo}
                      onChange={(e) => setRegNo(e.target.value)}
                      className="w-full p-4 border border-gray-300 dark:border-gray-800 rounded-xl 
                               focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                               dark:bg-black/50 dark:text-white transition-all
                               text-base backdrop-blur-sm bg-white/50
                               dark:placeholder-gray-400"
                      required
                    />
                    <div className="absolute inset-0 rounded-xl shadow-[0_0_0_1px_rgba(0,0,0,0.1)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.1)] pointer-events-none"></div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full p-4 rounded-xl text-white font-medium transition-all duration-300 transform hover:scale-[1.02] ${
                    isLoading
                      ? "bg-gray-400 dark:bg-gray-700 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
                  }`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Generating Certificate...
                    </span>
                  ) : (
                    "Generate Certificate"
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="bg-white/80 dark:bg-black/80 backdrop-blur-xl shadow-2xl rounded-3xl p-6 sm:p-8 border border-white/50 dark:border-gray-800">
              <h2 className="text-2xl sm:text-3xl font-extralight text-gray-800 dark:text-white mb-6">
                Event <span className="font-semibold bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">Information</span>
              </h2>
              <div className="space-y-6">
                <div className="p-5 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-900 rounded-2xl border border-blue-100 dark:border-gray-800">
                  <h3 className="font-medium text-blue-800 dark:text-blue-300 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Important Notes
                  </h3>
                  <ul className="text-sm text-blue-700 dark:text-blue-200 space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-red-500 mt-2 mr-2"></span>
                      <span>Please keep your certificate safe</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-red-500 mt-2 mr-2"></span>
                      <span>Certificate is non-transferable</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-red-500 mt-2 mr-2"></span>
                      <span>Show your ID along with the certificate</span>
                    </li>
                  </ul>
                </div>
                
                <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
                  <p className="text-gray-600 dark:text-gray-300 flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>
                      Need help? Contact Event Support at{" "}
                      <a
                        href="mailto:linpack@vitbhopal.ac.in"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        linpack@vitbhopal.ac.in
                      </a>
                    </span>
                  </p>
                </div>
                
                {/* Verify Certificate Button as Link */}
                <div className="pt-4">
                  <Link href="/scanner">
                    <motion.div 
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full sm:w-auto bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium py-3 px-6 rounded-xl transition text-center shadow-lg cursor-pointer"
                    >
                      Verify Certificate
                    </motion.div>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
