import useLocalStorageState from "use-local-storage-state";
import TodoList from "./todoList";
import DoneList from "./doneList";
import styled from "styled-components";

export default function TabBar({ todos, onDeleteTodo, onToggleDone, dones }) {
  const [isActive, setIsActive] = useLocalStorageState("activeTab", "todo");

  function handleTab(tab) {
    setIsActive(tab);
  }

  return (
    <>
      <StyledTabNav>
        <StyledTabButton
          onClick={() => handleTab("todo")}
          isActive={isActive === "todo"}
        >
          Todo
        </StyledTabButton>
        <StyledTabButton
          onClick={() => handleTab("done")}
          isActive={isActive === "done"}
        >
          Done
        </StyledTabButton>
      </StyledTabNav>
      <div>
        {isActive === "todo" ? (
          <TodoList
            todos={todos}
            onDeleteTodo={onDeleteTodo}
            onToggleDone={onToggleDone}
          />
        ) : (
          <DoneList
            todos={todos}
            dones={dones}
            onDeleteTodo={onDeleteTodo}
            onToggleDone={onToggleDone}
          />
        )}
      </div>
    </>
  );
}

const StyledTabButton = styled.button`
  font-size: 18px;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "regular")};
  background: none;
  border: none;
  border-bottom: ${({ isActive }) => (isActive ? "5px solid green" : "none")};
  width: 50%;
  padding: 10px;
  margin-block: 20px;
`;

const StyledTabNav = styled.nav`
  margin-block: 10px;
  height: 100%;
`;
