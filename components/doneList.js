import TodoItem from "./todoItem";

export default function DoneList({ dones, onDeleteTodo, onToggleDone }) {
  console.log("das sind die Dones", dones);

  return (
    <>
      <h2>Done</h2>
      <ul>
        {dones.map((done) => (
          <TodoItem
            key={done.id}
            todo={done}
            onToggleDone={onToggleDone}
            dones={dones}
            onDeleteTodo={onDeleteTodo}
          />
        ))}
      </ul>
    </>
  );
}
