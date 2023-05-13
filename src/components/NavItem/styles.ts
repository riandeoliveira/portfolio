import styled, { css } from "styled-components";
import { theme } from "styles/theme";

type ButtonProps = {
  selectedButton: boolean;
};

export const Item = styled.li`
  display: flex;
  flex: 1;
  align-items: center;
`;

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 8px;
  transition: all 0.15s ease, background-color 0.15s ease;

  ${(props) => {
    if (props.selectedButton) {
      return css`
        background-color: ${theme.colors.purple};
        box-shadow: 0 0 48px ${theme.colors.purple};
      `;
    }

    return css`
      background-color: transparent;
    `;
  }}

  &:hover {
    background-color: ${theme.colors.purple};
  }
`;
