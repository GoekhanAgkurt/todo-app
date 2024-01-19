import Link from "next/link";
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";

export default function TodoItem({ todo, onToggleDone, onDeleteTodo }) {
  const [isDone, setIsDone] = useLocalStorageState(`isDone-${todo.id}`, false);

  function deleteTodo(id) {
    const shoulDelete = window.confirm(
      `Möchtest du wirklich ${todo.title} löschen?`
    );

    if (shoulDelete) {
      onDeleteTodo(todo.id);
    }
  }

  function toggleDone() {
    setIsDone(!isDone);
    onToggleDone(todo);
  }

  return (
    <StyledLi $isDone={isDone}>
      <Link href={`/todos/${todo.id}`}>
        <h2>{todo.title}</h2>
      </Link>
      <button onClick={deleteTodo}>delete</button>
      <button onClick={toggleDone}>{!isDone ? "Done?" : "is Done"}</button>
    </StyledLi>
  );
}

const StyledLi = styled.li`
  border: 1px solid black;
  list-style: none;
  margin-block: 10px;
  margin-inline: 0;
  padding: 10px;
  border-radius: 5px;
`;
