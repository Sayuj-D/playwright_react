"use client";
import React, { useRef } from "react";

export default function ThemeToggle() {
  const boxRef = useRef<HTMLDivElement | null>(null);
  let isDark = false;

  const toggleTheme = () => {
    if (boxRef.current) {
      const theme = isDark
        ? "bg-gray-100 text-black"
        : "bg-gray-900 text-white";
      boxRef.current.className = `${theme}`;
      isDark = !isDark;
    }
  };

  return (
    <div>
      <div ref={boxRef} className="w-full bg-gray-100 text-black">
        Test Text
      </div>
      <button onClick={toggleTheme} className="bg-amber-200 px-4 py-2">
        Toggle Theme
      </button>
    </div>
  );
}
