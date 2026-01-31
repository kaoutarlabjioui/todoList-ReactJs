import { useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

export default function TodoPage() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    if (!title.trim()) return;

    const task = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };

    setTasks((prev) => [...prev, task]);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };
  return (
    <div className="container">
      <h1>📝 Todo List</h1>

      <TodoForm onAddTask={addTask} />
      <TodoList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
    </div>
  );
}
