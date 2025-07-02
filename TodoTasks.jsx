import { useState } from 'react';

function TodoApp() {
  const [tasks, setTasks] = useState([]);       // Store all tasks
  const [inputValue, setInputValue] = useState(""); // Store input value

  // Add a new task
  const handleAddTask = () => {
    if (inputValue.trim() === "") return;
    setTasks([...tasks, inputValue]);
    setInputValue(""); // clear input
  };

  // Remove a task
  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>📝 To-Do List</h2>

      {/* Input field */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Shto një detyrë"
      />
      <button onClick={handleAddTask}>Shto</button>

      {/* Task list */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}{" "}
            <button onClick={() => handleRemoveTask(index)}>Fshij</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;