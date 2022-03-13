import styled from "styled-components";

import video from "../assets/bg-video.mp4";
import img from "../assets/avatar.jpg";

const MainArea = styled.main``;

const Video = styled.video`
  height: 60vh;
  object-fit: cover;
  width: 100%;
`;

const Source = styled.source``;

const AboutSection = styled.section``;

const ProfileContainer = styled.div`
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

const DataContainer = styled.div``;

const Name = styled.h1`
  font-size: 56px;
  margin-top: 100px;
`;

const Career = styled.h2`
  font-size: 24px;
  margin: 10px 0;
`;

const Avatar = styled.img`
  border-radius: 100%;
  border: 10px solid var(--background);
  margin-bottom: -80px;
  width: 300px;
`;

const StackSection = styled.section`
  align-items: center;
  background-color: #121214;
  display: flex;
  height: 500px;
  justify-content: center;
  margin-top: 100px;
`;

const StackContainer = styled.div`
  border: 2px solid red;
  display: grid;
  height: 400px;
  grid-template-columns: repeat(4, 1fr);
  width: 500px;
  margin: 20px;
`;

export const Main: React.FC = ({ children }) => {
  return (
    <MainArea>
      <AboutSection>
        <ProfileContainer>
          <DataContainer>
            <Name>Rian Dias de Oliveira</Name>
            <Career>Desenvolvedor Front-End Júnior</Career>
          </DataContainer>
          <Avatar src={img} alt="" />
        </ProfileContainer>
        <Video autoPlay disablePictureInPicture loop muted>
          <Source src={video} type="video/mp4" />
        </Video>
      </AboutSection>
      <StackSection>
        <StackContainer>{children}</StackContainer>
      </StackSection>
    </MainArea>
  );
};
