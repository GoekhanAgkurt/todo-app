import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    background-color: #eeeee4;
  }

  main {
    width: 90%;
    margin: auto;
  }

  ul {
  padding: 0px;
}


h2 {
  text-decoration: none;
  color: black;
  margin: 0;

}

a {
  text-decoration: none;
}

`;
