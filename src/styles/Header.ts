import styled from "styled-components";

export const HeaderArea = styled.header`
  align-items: center;
  background-color: var(--background);
  display: flex;
  height: 80px;
  justify-content: center;
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
  border-bottom: 2px solid transparent;
  cursor: pointer;
  display: flex;
  height: inherit;
  margin: 0 20px;
  text-align: center;

  &:hover {
    border-color: #006aeb;
  }
`;

export const Link = styled.a`
  color: white;
`;
