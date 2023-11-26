import React, { useState } from "react";

export default function ToDoList() {
  const tasks = ["Take Out Trash", "Wash Dishes", "Clean Litter Box", "Mow the Lawn", "Vacuum"];
  const [completedTasks, setCompletedTasks] = useState(Array(tasks.length).fill(false));

  const listItems = tasks.map((task, index) => (
    <li key={index} className={completedTasks[index] ? "completed" : ""}>
      <input type="checkbox" checked={completedTasks[index]} onChange={() => handleToggleCompletion(index)} />
      {task}
    </li>
  ));

  const handleToggleCompletion = (index) => {
    setCompletedTasks((prevCompletedTasks) => {
      const newCompletedTasks = [...prevCompletedTasks];
      newCompletedTasks[index] = !newCompletedTasks[index];
      return newCompletedTasks;
    });
  };

  return (
    <section>
      <h1>To Do List</h1>
      <ul className="task-list">{listItems}</ul>
    </section>
  );
}
