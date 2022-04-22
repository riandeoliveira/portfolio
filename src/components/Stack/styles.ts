import styled from "styled-components";
import colors from "../../styles/colors";
import { DomainLevelBarProps } from "../../interfaces";

export const Stack = styled.section`
  font-family: "Roboto";
`;

export const TechBox = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  margin: 20px;
  margin: auto;
  padding: 20px;
  width: 900px;

  div {
    a {
      border: 2px solid ${colors.secondary};
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
