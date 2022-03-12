import styled from "styled-components";

export const Header = styled.header`
  align-items: center;
  display: flex;
  height: 80px;
  justify-content: center;
`;

export const Navbar = styled.nav`
  height: 100%;

  ul {
    display: flex;
    height: inherit;
  }

  li {
    align-items: center;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    display: flex;
    height: inherit;
    margin: 0 20px;
    text-align: center;

    &:hover {
      border-color: #006aeb;
    }
  }

  a {
    color: white;
  }
`;

export const Main = styled.main`
  background-color: red;
  height: 1000px;
`;

export const About = styled.section`
  background-color: yellow;
  height: 100px;
`;

export const Stack = styled.section`
  background-color: green;
  height: 100px;
`;

export const Footer = styled.footer`
  background-color: blue;
  height: 200px;
`;

export const Contact = styled.section`
  background-color: purple;
  height: 100px;
`;
