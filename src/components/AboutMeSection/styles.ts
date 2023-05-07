import NextImage from "next/image";
import styled from "styled-components";
import { theme } from "styles/theme";

export const SectionBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Description = styled.p`
  font-size: 18px;
  text-align: justify;
  line-height: 28px;
  flex: 2;
  text-indent: 32px;
`;

export const DownloadButton = styled.a`
  width: 200px;
  padding: 10px 18px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  gap: 12px;
  background-color: ${theme.colors.purple};
  box-shadow: 0 0 48px ${theme.colors.dark_purple};
  cursor: pointer;
  border: 0.5px solid transparent;
  transition: 0.15s background-color ease, 0.15s border-color ease;

  &:hover {
    background-color: transparent;
    border-color: ${theme.colors.purple};
  }
`;

export const Image = styled(NextImage)`
  border-radius: 10px;
  flex: 1;
  box-shadow: 0 0 48px ${theme.colors.dark_purple};
`;
