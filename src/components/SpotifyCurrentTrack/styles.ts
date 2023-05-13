import styled from "styled-components";
import { theme } from "styles/theme";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleBox = styled.div`
  align-items: center;
  display: flex;
  gap: 12px;
  justify-content: center;
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: 500;

  @media ${theme.devices.tablet_s} {
    font-size: 18px;
  }
`;

export const Iframe = styled.iframe`
  width: 100%;
  height: 100px;
  pointer-events: none;
`;
