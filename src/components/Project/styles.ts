import styled from "styled-components";

export const Project = styled.section`
  font-family: "Roboto";
`;

export const ProjectBox = styled.div`
  display: grid;
  padding: 20px;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  width: 1200px;
  margin: auto;

  div {
    transition: transform 0.25s ease;
    height: 320px;
    width: 570px;

    div {
      align-items: center;
      background-color: black;
      opacity: 0.8;
      color: white;
      flex-direction: column;
      position: absolute;
      width: inherit;
      display: none;
      border-radius: 10px;
      justify-content: center;

      span {
        padding: 30px;
        opacity: 1;
        font-size: 24px;
      }

      div {
        display: flex;
        flex-direction: row;
        position: relative;

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
        display: flex;
      }
    }
  }
`;
