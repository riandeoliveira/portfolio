import NextImage from "next/image";
import styled from "styled-components";
import { theme } from "styles/theme";

export const SectionBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;
  transition: all 0.15s ease;

  @media ${theme.devices.laptop_s} {
    flex-direction: column-reverse;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  transition: all 0.15s ease;

  @media ${theme.devices.laptop_s} {
    padding-bottom: 32px;
  }

  @media ${theme.devices.tablet_s} {
    padding-bottom: 16px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  text-align: justify;
  line-height: 28px;
  flex: 2;
  text-indent: 32px;
  transition: all 0.15s ease;

  @media ${theme.devices.tablet_s} {
    font-size: 14px;
  }
`;

export const DownloadButton = styled.a`
  width: 200px;
  padding: 10px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  gap: 12px;
  background-color: ${theme.colors.purple};
  box-shadow: 0 0 48px ${theme.colors.dark_purple};
  cursor: pointer;
  border: 0.5px solid transparent;
  transition: all 0.15s ease;

  &:hover {
    background-color: transparent;
    border-color: ${theme.colors.purple};
  }

  @media ${theme.devices.tablet_s} {
    font-size: 14px;
    padding: 8px;
    margin: auto;
  }
`;

export const Image = styled(NextImage)`
  border-radius: 10px;
  flex: 1;
  box-shadow: 0 0 48px ${theme.colors.dark_purple};
  width: 100%;
  transition: all 0.15s ease;

  @media ${theme.devices.laptop_s} {
    margin: auto;
  }
`;
