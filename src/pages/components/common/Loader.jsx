import React from "react";


const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      
      {/* Logo */}
      <img 
        src="/app_logo.png" 
        alt="logo" 
        className="w-24 animate-pulse"
      />

      {/* Loading Text */}
      <p className="text-yellow-400 mt-4 tracking-widest animate-pulse">
        LOADING...
      </p>

      {/* Progress bar */}
      <div className="w-40 h-1 bg-gray-700 mt-4 overflow-hidden rounded">
        <div className="h-full bg-yellow-400 w-0 animate-[loading_2s_linear_forwards]"></div>
      </div>

    </div>
  );
};

export default Loader;