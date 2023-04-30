import styled from "styled-components";
import { theme } from "styles/theme";

export const List = styled.ul`
  background-color: ${theme.colors.darkest_purple};
  border-radius: 10rem;
  display: flex;
  justify-content: center;

  & li:first-of-type button {
    border-bottom-left-radius: 10rem;
    border-top-left-radius: 10rem;
  }

  & li:last-of-type button {
    border-bottom-right-radius: 10rem;
    border-top-right-radius: 10rem;
  }
`;
