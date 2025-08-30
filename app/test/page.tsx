import React from 'react';

export default function TestPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        Test Page
      </h1>
      <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
        This is a simple test page.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
        {[1, 2, 3].map((item) => (
          <div 
            key={item}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
          >
            <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
              Test Card {item}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              This is a sample card.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}