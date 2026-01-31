import { useState } from "react";

export default function TodoForm({ onAddTask }) {
  const [form, setForm] = useState({ title: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(form.title);
    setForm({ title: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Ajouter une tâche"
        value={form.title} 
        onChange={(e) => setForm({ title: e.target.value })}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}
