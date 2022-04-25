import styled from "styled-components";
import device from "media-query-sizes";

export const Project = styled.section`
  font-family: "Roboto";
`;

export const ProjectBox = styled.div`
  display: grid;
  padding: 20px;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1200px;
  justify-items: center;

  div {
    transition: transform 0.25s ease;
    height: 320px;
    width: 570px;

    div {
      align-items: center;
      background-color: black;
      opacity: 0;
      color: white;
      flex-direction: column;
      position: absolute;
      width: inherit;
      display: flex;
      border-radius: 10px;
      justify-content: space-between;
      padding: 20px;
      text-align: center;
      transition: all 0.25s ease;

      span {
        padding: 30px;
        opacity: 1;
        font-size: 24px;
      }

      div {
        height: 100px;
        display: flex;
        flex-direction: row;
        position: relative;
        justify-content: center;

        a {
          margin: 0 50px;
          transition: transform 0.25s ease;
          cursor: pointer;
          opacity: 1;
          border: 2px solid white;
          border-radius: 100%;
          color: white;
          align-items: center;
          display: flex;
          justify-content: center;
          width: 55px;
          height: 55px;

          svg {
            width: 28px;
            height: 28px;
          }

          &:hover {
            transform: scale(115%);
          }
        }
      }
    }

    img {
      border-radius: 10px;
      width: inherit;
    }

    &:hover {
      div {
        opacity: 0.8;
      }
    }
  }

  @media ${device.laptopL} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
