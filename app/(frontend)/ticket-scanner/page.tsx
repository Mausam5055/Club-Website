"use client";
import { useState, useEffect, useRef, useCallback } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import userData from '@/api/assets/data2.json';

export default function ScannerPage() {
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState<{
    verified: boolean;
    name?: string;
    team?: string;
    regNumber?: string;
    event?: string;
  } | null>(null);
  const [error, setError] = useState<string>('');
  const scannerRef = useRef<Html5Qrcode | null>(null);

  const stopScanner = useCallback(async () => {
    try {
      if (scannerRef.current) {
        // Check if scanner is actually running before attempting to stop
        const isRunning = scannerRef.current.isScanning;
        
        if (isRunning) {
          await scannerRef.current.stop();
          console.log('Scanner stopped successfully');
        }
        setIsScanning(false);
      }
    } catch (error) {
      console.log('Error while stopping scanner:', error);
    
      setIsScanning(false);
    }
  }, []);

  const startScanner = async () => {
    try {
      // First ensure any existing scanner is properly stopped
      if (scannerRef.current) {
        try {
          await scannerRef.current.stop();
        } catch (e) {
          console.log('Cleanup of previous scanner instance:', e);
        }
      }

      if (!window.isSecureContext) {
        throw new Error('Page must be served over HTTPS to access the camera');
      }

      // Request camera permissions with explicit mobile configuration
      const constraints = {
        video: {
          facingMode: { ideal: 'environment' },
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      };

      // Test camera access first
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      // Stop the test stream immediately
      stream.getTracks().forEach(track => track.stop());

      if (!scannerRef.current) {
        scannerRef.current = new Html5Qrcode("qr-reader");
      }

      const config = {
        fps: 10,
        qrbox: { width: 250, height: 250 },
        aspectRatio: 1.0,
        formatsToSupport: ["QR_CODE"]
      };

      await scannerRef.current.start(
        { facingMode: "environment" },
        config,
        (decodedText) => {
          const user = userData.find(user => user.certificate_hash === decodedText);
          if (user) {
            setResult({
              verified: true,
              name: user.name,
              event: user.event_name,
              regNumber: user.reg_number
            });
            stopScanner();
          } else {
            setResult({ verified: false });
          }
        },
        (errorMessage) => {
          // Only log critical errors
          if (!errorMessage.includes('Frame')) {
            console.warn('Scan error:', errorMessage);
          }
        }
      );
      setIsScanning(true);
      setError('');
    } catch (err) {
      let errorMessage = 'Failed to start scanner';
      if (err instanceof Error) {
        errorMessage = err.message;
        // Add more specific error messages
        if (err.name === 'NotAllowedError') {
          errorMessage = 'Camera permission denied. Please allow camera access and try again.';
        } else if (err.name === 'NotFoundError') {
          errorMessage = 'No camera found. Please ensure your device has a working camera.';
        } else if (err.name === 'NotReadableError') {
          errorMessage = 'Camera is in use by another application. Please close other apps using the camera.';
        }
      }
      setError(errorMessage);
      console.error('Scanner error:', err);
    }
  };

  useEffect(() => {
    return () => {
      if (scannerRef.current) {
        try {
          scannerRef.current.stop().catch(console.error);
        } catch (error) {
          console.log('Cleanup error:', error);
        }
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 transition-colors duration-200">
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-200">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Ticket Scanner
        </h1>
        
        {error && (
          <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl text-red-800 dark:text-red-200">
            <p className="font-medium">{error}</p>
            {error.includes('permission') && (
              <p className="text-sm mt-2 text-red-600 dark:text-red-300">
                Please check your browser settings and ensure camera permissions are enabled.
                You may need to refresh the page after allowing access.
              </p>
            )}
            {error.includes('HTTPS') && (
              <p className="text-sm mt-2 text-red-600 dark:text-red-300">
                This feature requires a secure HTTPS connection. Please ensure you&apos;re accessing the site via HTTPS.
              </p>
            )}
          </div>
        )}

        {!isScanning ? (
          <button
            onClick={startScanner}
            className="w-full bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-xl mb-6 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Start Scanner
          </button>
        ) : (
          <button
            onClick={stopScanner}
            className="w-full bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 text-white font-medium py-4 px-6 rounded-xl mb-6 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Stop Scanner
          </button>
        )}

        <div id="qr-reader" className="mb-6 overflow-hidden rounded-xl shadow-inner dark:bg-gray-700" />

        {result && (
          <div className={`p-6 rounded-xl transition-all duration-200 ${
            result.verified 
              ? 'bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800' 
              : 'bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800'
          }`}>
            {result.verified ? (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-green-800 dark:text-green-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-bold text-lg">Valid Ticket</span>
                </div>
                <div className="space-y-2 text-gray-700 dark:text-gray-200">
                  <p className="font-semibold">Name: <span className="font-normal">{result.name}</span></p>
                  <p className="font-semibold">Team: <span className="font-normal">{result.team}</span></p>
                  <p className="font-semibold">Reg No: <span className="font-normal">{result.regNumber}</span></p>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-red-800 dark:text-red-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                </svg>
                <span className="font-bold text-lg">Invalid Ticket</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
