import TodoItem from "./todoItem";

export default function TodoList({ todos, done, onDeleteTodo, onToggleDone }) {
  return (
    <>
      <h2>Todos</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            done={done}
            onDeleteTodo={onDeleteTodo}
            onToggleDone={onToggleDone}
          />
        ))}
      </ul>
    </>
  );
}
