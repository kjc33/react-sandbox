// Exercise 4: Lists and Mapping Props
// Construct a List component that takes an array of numbers as a prop and renders an unordered list (<ul>) with list items (<li>) for each number in the array.

import React from "react";

export default function List() {
  const numbers = [2, 4, 6, 8, 10];

  const listItems = numbers.map((number, index) => (
    <li key={index}>{number}</li>
  ));

  return <ul>{listItems}</ul>;
}
