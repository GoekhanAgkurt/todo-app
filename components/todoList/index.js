import TodoItem from "../todoItem";

export default function TodoList({ todos }) {
  return (
    <>
      <h2>deine Todo Liste</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
}
