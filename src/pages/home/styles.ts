import styled from "styled-components";
import { theme } from "styles/theme";

export const Page = styled.div`
  display: flex;
  justify-content: center;
`;

export const PageBox = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 32px;
  padding: 6px;
  width: 1200px;

  ${theme.components.animated_background}
`;
