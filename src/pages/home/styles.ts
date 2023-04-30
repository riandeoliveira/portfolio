import styled from "styled-components";
import { theme } from "styles/theme";

export const Page = styled.div`
  display: flex;
  justify-content: center;
`;

export const PageBox = styled.div`
  border-radius: 10rem;
  display: flex;
  flex-direction: column;
  gap: 6rem;
  margin-top: 32rem;
  padding: 6rem;
  width: 1200rem;

  ${theme.components.animated_background}
`;
