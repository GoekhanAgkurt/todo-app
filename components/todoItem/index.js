export default function TodoItem({ todo, onDeleteTodo }) {
  return (
    <li>
      {todo.title}{" "}
      <button
        onClick={() => {
          onDeleteTodo(todo.id);
        }}
      >
        delete
      </button>
    </li>
  );
}
