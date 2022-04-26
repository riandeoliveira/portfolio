import styled from "styled-components";
import device from "media-query-sizes";

export const Project = styled.section`
  font-family: "Roboto";
`;

export const ProjectBox = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1200px;
  justify-items: center;

  div {
    transition: transform 0.25s ease;
    max-height: 100%;
    /* width: 570px; */
    max-width: 100%;
    position: relative;

    div {
      align-items: center;
      background-color: black;
      padding: 20px;
      opacity: 0;
      color: white;
      flex-direction: column;
      position: absolute;
      width: 100%;
      height: 98.8%;
      display: flex;
      border-radius: 10px;
      justify-content: space-between;
      text-align: center;
      transition: all 0.25s ease;

      span {
        padding: 20px;
        opacity: 1;
        font-size: 24px;
        font-weight: bold;
      }

      div {
        display: flex;
        flex-direction: row;
        position: relative;
        justify-content: center;
        max-height: 50%;

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

      @media ${device.tablet} {
        span,
        div {
          padding: 5px;
        }
      }

      @media ${device.mobileL} {
        span {
          font-size: 16px;
        }

        p {
          font-size: 12px;
        }

        div {
          a {
            height: 45px;
            width: 45px;
            margin: 0 25px;
          }
        }
      }
    }

    img {
      border-radius: 10px;
      max-width: 100%;
    }

    &:hover {
      div {
        opacity: 0.8;
      }
    }
  }

  @media ${device.laptopL} {
    grid-template-columns: repeat(1, 1fr);
    max-width: 600px;
  }
`;
