// Exercise 3: Conditional Rendering
// Develop a ShowHide component that has a button. When the button is clicked, toggle the visibility of a paragraph that says "Hello, World!"

import React, { useState } from "react";

export default function ShowHide() {
  const [hidden, setIsHidden] = useState(false);
  const [buttonText, setButtonText] = useState("Hide Content");

  const handleClick = () => {
    setIsHidden((current) => !current);
    setButtonText(hidden ? "Hide Content" : "Show Content");
  };

  return (
    <div className="show-hide-wrapper flex flex-column medium-gap">
      <p className={hidden ? "hidden" : "visible"}>
        Lorem ipsum dolor sit amet consectetur adipiscing elit, ornare ultrices eros lobortis habitasse praesent, quam velit proin tempus metus aliquam. Posuere pharetra himenaeos litora mauris rutrum in vestibulum molestie diam cras, bibendum enim nibh nisl consequat fames conubia ad morbi tellus,
        quisque arcu cum convallis porta massa tortor hac natoque.
      </p>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}