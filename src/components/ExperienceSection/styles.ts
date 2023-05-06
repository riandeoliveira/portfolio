import styled from "styled-components";
import { theme } from "styles/theme";
import cesucaLogo from "../../../public/assets/images/cesuca-logo.svg";
import rehagroLogo from "../../../public/assets/images/rehagro-logo.svg";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 24px;
`;

export const Experience = styled.div`
  display: flex;
  gap: 24px;
`;

export const RehagroLogo = styled(rehagroLogo)`
  border-radius: 10px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.strong`
  font-weight: 400;
  font-size: 20px;
`;

export const Label = styled.span`
  font-weight: 300;
`;

export const Link = styled.a`
  color: ${theme.colors.cyan};

  &:hover {
    text-decoration: underline;
  }
`;

export const CesucaLogo = styled(cesucaLogo)`
  border-radius: 10px;
`;
