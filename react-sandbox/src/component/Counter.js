// Exercise 2: State and Event Handling
// Build a Counter component that displays a count value and two buttons: one to increment the count and another to reset it. 
// Utilize the useState hook to manage the count state.

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

  const resetBtn = () => {
    setCount(0);
  };

  return (
    <div className="counter flex flex-column small-gap">
      <h1>Counter</h1>
      <span className="count-num">{count}</span>
      <div className="counter-controls flex small-gap">
        <button className="increment" aria-label="Increment Counter" onClick={handleIncrement}>
          +
        </button>
        <button className="decrement" aria-label="Decrement Counter" onClick={handleDecrement}>
          -
        </button>
      </div>
      <button aria-label="Reset Counter" onClick={resetBtn}>
        Reset
      </button>
    </div>
  );
}
