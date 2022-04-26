import styled from "styled-components";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import device from "media-query-sizes";

export const Header = styled.header`
  animation: fade-in 1s ease-out;
  display: flex;
  height: 80px;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;

  span {
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    font-size: 24px;
    font-family: ${fonts.secondary};
    color: ${colors.neutral};
    margin: 0 20px;
  }

  nav {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    ul {
      display: flex;
      height: inherit;

      li {
        text-transform: uppercase;
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

    svg {
      margin: 0 20px;
      display: none;
      width: 40px;
      height: 40px;
      cursor: pointer;
    }
  }

  @media ${device.tablet} {
    nav {
      ul {
        position: absolute;
        top: 80px;
        height: auto;
        background-color: #121214;
        flex-direction: column;
        width: 200px;
        right: 20px;

        li {
          border: 0;
          padding: 20px;
          margin: 0;

          &:hover {
            background-color: white;
            color: #121214;
          }
        }
      }

      svg {
        color: white;
        display: flex;
      }
    }
  }
`;
