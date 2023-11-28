import React, { useState } from "react";

export default function List() {
  const tasks = ["Play Guitar", "Workout", "Code", "Write 'Thank You' Cards"];
  const [listArr, setListArr] = useState([]);

  const listItems = tasks.map((task, index) => {
    <li key={index}>{task}</li>;
  });

  const listHandle = (index) => {
    setListArr(index);
  }

  return <ul>{listItems}</ul>;
}
