import {
  HomeSection,
  ProfileContainer,
  DataContainer,
  Name,
  Career,
  AvatarContainer,
  RotatingContainer,
  Avatar,
  Video,
  Source,
} from "../styles/Home";
import { TechImage } from "../styles/global/global";

import video from "../assets/bg-video.mp4";
import img from "../assets/avatar.jpg";

export const Home: React.FC = () => {
  return (
    <HomeSection>
      <ProfileContainer>
        <DataContainer>
          <Name>Rian Dias de Oliveira</Name>
          <Career>Desenvolvedor Front-End Júnior</Career>
        </DataContainer>
        <AvatarContainer>
          <RotatingContainer>
            <TechImage
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
              alt="React logo"
            />
          </RotatingContainer>
          <Avatar src={img} alt="Image of Rian Oliveira" />
        </AvatarContainer>
      </ProfileContainer>
      <Video autoPlay disablePictureInPicture loop muted>
        <Source src={video} type="video/mp4" />
      </Video>
    </HomeSection>
  );
};
