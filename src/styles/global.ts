import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    box-sizing: border-box;
    color: ${theme.colors.white};
    font-family: ${theme.fonts.primary_group};
    font-size: 16rem;
    list-style: none;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 12rem;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.dark_purple};
    border-radius: 100rem;
  }

  :root {
    font-size: 6.25%; // => 16rem = 16px
  }

  body {
    background-color: ${theme.colors.darkest_purple};
    height: 100vh;
  }
`;
