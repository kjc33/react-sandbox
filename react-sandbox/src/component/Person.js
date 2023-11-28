// Exercise 1: Passing Props
// Create a Person component that takes in two props: name and age. Render a paragraph that displays the person's name and age.

import React from "react";

export default function Person({ name, age }) {
  return (
    <p>
      Hello, my name is {name} and I am {age} years old.
    </p>
  );
}
