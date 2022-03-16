import styled from "styled-components";

import { fadeIn } from "./animations/animations";

export const HeaderArea = styled.header`
  animation: fade-in 1s ease-out;
  align-items: center;
  background-color: var(--background);
  display: flex;
  height: 80px;
  justify-content: center;

  background-color: var(variables);

  ${fadeIn};
`;

export const Navbar = styled.nav`
  height: 100%;
`;

export const List = styled.ul`
  display: flex;
  height: inherit;
`;

export const Item = styled.li`
  align-items: center;
  transition: all 0.2s ease;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  display: flex;
  height: inherit;
  margin: 0 20px;
  text-align: center;

  &:hover {
    border-color: #006aeb;

    a {
      color: white;
    }
  }

  a {
    transition: all 0.2s ease;
  }
`;

export const Link = styled.a`
  color: #737380;
`;
