import GlobalStyle from "../styles";
import { initialTodos } from "@/lib/data";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [todos, setTodos] = useLocalStorageState("todos", {
    defaultValue: initialTodos,
  });

  const [dones, setDones] = useLocalStorageState("dones", {
    defaultValue: [],
  });

  function handleAddTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function handleDeleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleEditTodo(edidetTodo) {
    setTodos(
      todos.map((todo) => (todo.id === edidetTodo.id ? edidetTodo : todo))
    );
  }

  function handleToggleDone(todo) {
    if (dones.find((done) => done.id === todo.id)) {
      setDones(dones.filter((done) => done.id !== todo.id));
      setTodos([...todos, todo]);
    } else {
      setDones([...dones, todo]);
      setTodos(todos.filter((t) => t.id !== todo.id));
    }
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        todos={todos}
        dones={dones}
        onAddTodo={handleAddTodo}
        onDeleteTodo={handleDeleteTodo}
        onEditTodo={handleEditTodo}
        onToggleDone={handleToggleDone}
      />
    </>
  );
}
