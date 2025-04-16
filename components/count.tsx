"use client";
import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="mt-4">
      <h1 data-testid="count-value">{count}</h1>
      <button
        onClick={handleClick}
        className="bg-amber-400 text-white px-4 py-2 rounded-md"
      >
        Increase
      </button>
    </div>
  );
};

export default Count;
