import { todos } from "@/lib/data";
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  console.log("das sind die todos:", todos);
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} todos={todos} />
    </>
  );
}
