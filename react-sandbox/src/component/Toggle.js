// Exercise 6: Event Callbacks
// Design a Toggle component that has a button. When the button is clicked, call a function (handleToggle) passed as a prop to toggle a boolean state (isToggled). Display the state.

import React, { useState } from "react";

export default function Toggle() {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div className="toggle">
      <button onClick={handleToggle}>Click Me</button>
      <p>State: {isToggle ? "Is Toggled" : "Is Not Toggled"}</p>
    </div>
  );
}
