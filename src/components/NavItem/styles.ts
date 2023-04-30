import styled from "styled-components";
import { theme } from "styles/theme";

type ButtonProps = {
  selectedButton: boolean;
};

export const Item = styled.li`
  display: flex;
  flex: 1;
`;

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 8rem;
  transition: background-color 0.1s ease;

  background-color: ${(props) => {
    if (props.selectedButton) {
      return theme.colors.purple;
    }

    return "transparent";
  }};

  &:hover {
    background-color: ${theme.colors.purple};
  }
`;
