import styled from "styled-components";
import { theme } from "styles/theme";

export const Section = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 32px;
`;

export const Skills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  max-width: 600px;
  width: 100%;

  @media ${theme.devices.tablet_s} {
    gap: 48px;
  }
`;
