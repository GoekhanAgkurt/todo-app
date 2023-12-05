import Link from "next/link";

export default function TodoItem({ todo, onDeleteTodo }) {
  function deleteTodo(id) {
    onDeleteTodo(id);
  }

  console.log("todddoooo", todo.id);

  return (
    <li>
      <Link href={`/todos/${todo.id}`}>
        <h2>{todo.title}</h2> <button onClick={deleteTodo}>delete</button>
      </Link>
    </li>
  );
}
