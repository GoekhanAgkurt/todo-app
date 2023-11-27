import GlobalStyle from "../styles";
import { initialTodos } from "@/lib/data";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [todos, setTodos] = useLocalStorageState("todos", {
    defaultValue: initialTodos,
  });

  function handleAddTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} todos={todos} onAddTodo={handleAddTodo} />
    </>
  );
}
