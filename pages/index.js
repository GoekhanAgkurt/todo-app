import TodoList from "@/components/todoList";
import Link from "next/link";

export default function HomePage({ todos, onDeleteTodo }) {
  return (
    <div>
      <h1>Todo List App</h1>
      <TodoList todos={todos} onDeleteTodo={onDeleteTodo} />
      <Link href="/create">Create to do</Link>
    </div>
  );
}
