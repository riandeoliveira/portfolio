import styled from "styled-components";
import colors from "../../styles/colors";
import { DomainLevelBarProps } from "../../interfaces";
import device from "media-query-sizes";

export const Stack = styled.section`
  font-family: "Roboto";
`;

export const TechBox = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  /* padding: 20px; */
  justify-content: center;
  max-width: 870px;

  div {
    a {
      border-radius: 10px;
      height: 175px;
      width: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;

      background-color: ${colors.primary_light};
      transition: transform 0.25s ease;
      cursor: pointer;

      &:hover {
        transform: scale(115%);
      }

      span {
        color: ${colors.neutral};
      }

      & > div {
        border-radius: 5px;
        background-color: ${colors.neutral_dark};
        height: 16px;
        width: 160px;
      }
    }
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(2, 0.23fr);
  }
`;

export const DomainLevelBar = styled.div<DomainLevelBarProps>`
  height: inherit;
  border-radius: inherit;
  background-color: ${colors.secondary};
  width: ${(props) => props.progress}%;
  display: flex;
  align-items: center;

  span {
    font-size: 12px;
    margin-left: 70px;
  }
`;
