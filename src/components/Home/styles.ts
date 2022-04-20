import styled from "styled-components";

export const Home = styled.section`
  margin-bottom: 120px;

  & > div {
    align-items: center;
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    height: 60vh;
    justify-content: space-between;
    position: absolute;
    text-align: center;
    width: 100%;
    z-index: 999;
  }

  video {
    height: 60vh;
    object-fit: cover;
    width: 100%;
  }
`;

export const ProfileBox = styled.div`
  color: white;

  h2 {
    font-size: 64px;
    letter-spacing: 7.5px;
    font-family: "Bebas Neue", sans-serif;
    text-shadow: 5px 5px 0 #0000007c;
  }

  h1 {
    font-weight: 400;
    font-size: 48px;
    font-family: "Smooch Sans", sans-serif;
  }
`;

export const AvatarBox = styled.div`
  div {
    animation: orbit 5s infinite linear;
    display: flex;
    height: 320px;
    background-color: transparent;
    width: 320px;
    margin-bottom: -310px;
  }

  & > img {
    border-radius: 100%;
    border: 10px solid black;
    margin-bottom: -60px;
    width: 300px;
    z-index: 1;
  }
`;
