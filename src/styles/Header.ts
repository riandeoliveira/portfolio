import styled from "styled-components";

import { fadeIn, separate } from "./animations/animations";

export const HeaderArea = styled.header`
  animation: fade-in 1s ease-out;
  background-color: var(--background);
  display: flex;
  height: 80px;
  justify-content: center;

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
  animation: separate 1s ease;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  display: flex;
  margin: 0 20px;
  transition: all 0.2s ease;

  &:hover {
    border-color: #006aeb;

    a {
      color: white;
    }
  }

  ${separate}
`;

export const Link = styled.a`
  color: #737380;
  transition: all 0.2s ease;
`;
