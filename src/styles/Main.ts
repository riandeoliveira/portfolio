import styled from "styled-components";

import { orbit, rotate } from "./animations/animations";

export const MainArea = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AboutSection = styled.section``;

export const ProfileContainer = styled.div`
  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  height: 60vh;
  justify-content: space-between;
  position: absolute;
  text-align: center;
  width: 100%;
`;

export const DataContainer = styled.div``;

export const Name = styled.h1`
  font-size: 64px;
  letter-spacing: 10px;
  font-family: "Bebas Neue", sans-serif;
  margin-top: 100px;
`;

export const Career = styled.h2`
  font-size: 36px;
  margin: 10px 0;
  font-family: "Smooch Sans", sans-serif;
`;

export const AvatarContainer = styled.div``;

export const RotatingContainer = styled.div`
  animation: orbit 5s infinite linear;
  display: flex;
  height: 320px;
  background-color: transparent;
  width: 320px;
  margin-bottom: -310px;

  ${orbit}
`;

export const Avatar = styled.img`
  animation: rotate 5s linear infinite;
  border-radius: 100%;
  border: 10px solid var(--background);
  margin-bottom: -80px;
  width: 300px;

  ${rotate}
`;

export const Video = styled.video`
  height: 60vh;
  object-fit: cover;
  width: 100%;
`;

export const Source = styled.source``;

export const StackSection = styled.section`
  align-items: center;
  background-color: var(--other);
  display: flex;
  height: 500px;
  justify-content: center;
  margin-top: 100px;
`;

export const StackContainer = styled.div`
  border: 2px solid red;
  display: grid;
  height: 500px;
  grid-template-columns: repeat(4, 1fr);
  width: 800px;
  gap: 20px;
  padding: 20px;
  margin: 20px;
`;
