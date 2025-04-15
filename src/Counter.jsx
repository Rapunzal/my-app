import React from "react";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    if (count >= 0) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="container">
      <button className="btn" onClick={handleIncrement}>
        +
      </button>
      Count: {count}
      <button className="btn" onClick={handleDecrement}>
        -
      </button>
    </div>
  );
};

export default Counter;
