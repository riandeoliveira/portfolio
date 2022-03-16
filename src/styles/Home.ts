import styled from "styled-components";

import { orbit } from "./animations/animations";

export const HomeSection = styled.section``;

export const ProfileContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 60vh;
  justify-content: space-between;
  position: absolute;
  text-align: center;
  width: 100%;
`;

export const DataContainer = styled.div`
  color: white;
`;

export const Name = styled.h1`
  font-size: 64px;
  letter-spacing: 7.5px;
  font-family: "Bebas Neue", sans-serif;
  margin-top: 100px;
`;

export const Career = styled.h2`
  font-weight: 400;
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
  border-radius: 100%;
  border: 10px solid var(--background);
  margin-bottom: -80px;
  width: 300px;
  z-index: 1;
`;

export const Video = styled.video`
  height: 60vh;
  object-fit: cover;
  width: 100%;
`;

export const Source = styled.source``;
