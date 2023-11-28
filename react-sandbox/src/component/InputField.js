// Exercise 5: Controlled Input
// Create an InputField component with an input element that is controlled by the component's state. Display the input value below the input field.

import React, { useState } from "react";

export default function InputField() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="input-field-wrapper">
      <input type="text" value={inputValue} onChange={handleInputChange}></input>
      <p>Input Value: {inputValue}</p>
    </div>
  );
}
