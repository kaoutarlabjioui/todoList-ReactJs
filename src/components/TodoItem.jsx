export default function TodoItem({ task, onDelete, onToggle }) {
  return (
    <li className={task.completed ? "done" : ""}>
      <span onClick={() => onToggle(task.id)}>{task.title}</span>
      <button onClick={() => onDelete(-task.id)}>❌</button>
    </li>
  );
}
