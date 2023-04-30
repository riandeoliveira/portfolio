import styled from "styled-components";
import { theme } from "styles/theme";

export const Box = styled.div`
  display: flex;
`;

export const TechnologyBox = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const Technology = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 12rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Icon = styled.div`
  align-items: center;
  background-color: ${theme.colors.dark_purple};
  border-radius: 100rem;
  box-shadow: 0 0 48rem ${theme.colors.dark_purple};
  display: flex;
  height: 80rem;
  justify-content: center;
  width: 80rem;
`;
