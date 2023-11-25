import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter">
      <h1>Counter</h1>
      <button aria-label="Increment Counter" onClick={handleIncrement}>+</button>
      <span>{count}</span>
      <button aria-label="Decrement Counter" onClick={handleDecrement}>-</button>
    </div>
  );
}
