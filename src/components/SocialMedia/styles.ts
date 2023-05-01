import styled from "styled-components";
import { theme } from "styles/theme";

export const Link = styled.a`
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  height: 32px;
  justify-content: center;
  transition: scale 0.3s ease;
  width: 32px;

  ${theme.components.animated_background}
  ${theme.functions.focus("small", theme.colors.cyan, "light")}

  &:hover {
    scale: 1.5;
  }
`;
