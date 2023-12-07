import { initialTodos } from "@/lib/data";
import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [todos, useTodos] = useLocalStorageState("todos", {
    defaultValue: initialTodos,
  });

  console.log("das sind die todos:", todos);
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} todos={todos} />
    </>
  );
}
