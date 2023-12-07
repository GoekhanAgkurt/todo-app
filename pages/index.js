import TodoList from "@/components/todoList";

export default function HomePage({ todos }) {
  return (
    <div>
      <h1>Todo List App</h1>
      <TodoList todos={todos} />
    </div>
  );
}
