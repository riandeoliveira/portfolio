import styled from "styled-components";

export const About = styled.section`
  video {
    height: 60vh;
    object-fit: cover;
    width: 100%;
  }
`;

export const Profile = styled.div`
  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  height: 60vh;
  justify-content: space-between;
  position: absolute;
  text-align: center;
  width: 100%;

  h1 {
    font-size: 56px;
    margin-top: 100px;
  }

  h2 {
    font-size: 24px;
    margin: 10px 0;
  }

  img {
    border-radius: 100%;
    border: 10px solid white;
    margin-bottom: -80px;
    width: 300px;
  }
`;

export const Stack = styled.section`
  background-color: green;
  height: 100px;
`;
