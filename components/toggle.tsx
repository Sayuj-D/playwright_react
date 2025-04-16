"use client";
import React, { useState } from "react";

const Toggle = () => {
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div
      data-testid="theme-container"
      className={`w-full h-30 p-8 mt-8 flex flex-col  transition-colors duration-300 shadow-2xl ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <button
        onClick={handleToggle}
        className="px-4 py-2 rounded max-w-40 bg-blue-500 text-white hover:bg-blue-600 transition"
      >
        Toggle Theme
      </button>
      <p className="mt-4 text-lg">This is toggle test</p>
    </div>
  );
};

export default Toggle;
