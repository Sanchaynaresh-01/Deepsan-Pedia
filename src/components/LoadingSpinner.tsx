import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-4 border-b-4 border-purple-500 animate-spin"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-4 border-b-4 border-pink-500 animate-spin animation-delay-150"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-4 border-b-4 border-indigo-500 animate-spin animation-delay-300"></div>
      </div>
      <p className="mt-6 text-lg text-purple-300 animate-pulse">Generating recommendations...</p>
    </div>
  );
};

export default LoadingSpinner;