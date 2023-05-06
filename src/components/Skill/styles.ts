import styled from "styled-components";
import { theme } from "styles/theme";

export const Box = styled.div`
  display: flex;
`;

export const SkillBox = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const Skill = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Icon = styled.div`
  align-items: center;
  background-color: ${theme.colors.dark_purple};
  border-radius: 100px;
  box-shadow: 0 0 48px ${theme.colors.dark_purple};
  display: flex;
  height: 80px;
  justify-content: center;
  width: 80px;
`;
