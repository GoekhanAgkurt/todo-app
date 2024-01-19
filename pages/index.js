import TabBar from "@/components/tabBar";
import Link from "next/link";
import styled from "styled-components";

export default function HomePage({ todos, onDeleteTodo, onToggleDone, dones }) {
  return (
    <main>
      <h1>Todo List App</h1>

      <TabBar
        todos={todos}
        dones={dones}
        onDeleteTodo={onDeleteTodo}
        onToggleDone={onToggleDone}
      />
      <Link href="/create">
        <StyledButton>Create to do</StyledButton>
      </Link>
    </main>
  );
}

const StyledButton = styled.button`
  width: 100%;
  padding-block: 15px;
  background-color: black;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const StyledTodoDiv = styled.div`
  margin-block: 20px;
  border: 1px solid black;
  padding: 20px 20px;
  border-radius: 5px;
`;

const StyledDoneDiv = styled.div`
  margin-block: 20px;
  padding: 20px 20px;
  border-radius: 5px;
  border: 1px solid black;
`;
