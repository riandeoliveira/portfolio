import styled from "styled-components";

export const Header = styled.header`
  animation: fade-in 1s ease-out;
  display: flex;
  height: 80px;
  justify-content: space-between;
  width: 100%;

  span {
    padding: 0 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    font-size: 24px;
    font-family: "Oswald";
    color: white;
  }

  nav {
    height: 100%;

    ul {
      display: flex;
      height: inherit;

      li {
        font-family: Arial, Helvetica, sans-serif;
        align-items: center;
        animation: separate 1s ease;
        border-bottom: 3px solid transparent;
        cursor: pointer;
        color: #c4c4c4;
        display: flex;
        padding: 0 20px;
        transition: all 0.2s ease;

        &:hover {
        }
      }
    }
  }
`;
