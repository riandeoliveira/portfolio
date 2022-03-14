import styled from "styled-components";

export const AboutSection = styled.section``;

export const Avatar = styled.img`
  animation: rotate 5s linear infinite;
  border-radius: 100%;
  border: 10px solid var(--background);
  margin-bottom: -80px;
  width: 300px;

  @keyframes rotate {
    50% {
      transform: rotateY(180deg);
    }

    to {
      transform: rotateY(0deg);
    }
  }
`;

export const AvatarContainer = styled.div``;

export const Career = styled.h2`
  font-size: 36px;
  margin: 10px 0;
  font-family: "Smooch Sans", sans-serif;
`;

export const Contact = styled.section``;

export const DataContainer = styled.div``;

export const FooterArea = styled.footer``;

export const HeaderArea = styled.header`
  align-items: center;
  background-color: var(--background);
  display: flex;
  height: 80px;
  justify-content: center;
`;

export const Item = styled.li`
  align-items: center;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  display: flex;
  height: inherit;
  margin: 0 20px;
  text-align: center;

  &:hover {
    border-color: #006aeb;
  }
`;

export const Link = styled.a`
  color: white;
`;

export const List = styled.ul`
  display: flex;
  height: inherit;
`;

export const MainArea = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Name = styled.h1`
  font-size: 64px;
  letter-spacing: 10px;
  font-family: "Bebas Neue", sans-serif;
  margin-top: 100px;
`;

export const Navbar = styled.nav`
  height: 100%;
`;

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

export const RotatingContainer = styled.div`
  animation: orbit-avatar 5s infinite linear;
  display: flex;
  height: 320px;
  background-color: transparent;
  width: 320px;
  margin-bottom: -310px;

  @keyframes orbit-avatar {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Source = styled.source``;

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

export const StackSection = styled.section`
  align-items: center;
  background-color: var(--other);
  display: flex;
  height: 500px;
  justify-content: center;
  margin-top: 100px;
`;

export const TechContainer = styled.div`
  /* border: 2px solid blue; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--background);
  cursor: pointer;
  transition: transform 0.25s ease;

  &:hover {
    transform: scale(125%);
  }
`;

export const TechImage = styled.img`
  height: 50px;
  width: 50px;
`;

export const TechName = styled.span`
  color: #737380;
`;

export const Video = styled.video`
  height: 60vh;
  object-fit: cover;
  width: 100%;
`;
