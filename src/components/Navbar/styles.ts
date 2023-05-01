import styled from "styled-components";
import { theme } from "styles/theme";

export const List = styled.ul`
  background-color: ${theme.colors.darkest_purple};
  border-radius: 10px;
  display: flex;
  justify-content: center;

  & li:first-of-type button {
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
  }

  & li:last-of-type button {
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
  }
`;
