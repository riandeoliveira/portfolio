import styled from "styled-components";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Header = styled.header`
  animation: fade-in 1s ease-out;
  display: flex;
  height: 80px;
  justify-content: space-between;
  width: 1200px;

  span {
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    font-size: 24px;
    font-family: ${fonts.secondary};
    color: ${colors.neutral};
  }

  nav {
    height: 100%;

    ul {
      display: flex;
      height: inherit;

      li {
        font-family: ${fonts.primary};
        align-items: center;
        border-bottom: 3px solid transparent;
        cursor: pointer;
        color: #c4c4c4;
        display: flex;
        margin: 0 15px;
        transition: all 0.2s ease;

        &:hover {
          color: ${colors.neutral};
          border-color: ${colors.neutral};
        }
      }
    }
  }
`;
