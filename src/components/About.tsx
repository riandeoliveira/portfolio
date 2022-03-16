import { AboutSection } from "../styles/About";
import { TitleContainer, Title, Subtitle } from "../styles/global/global";

export const About: React.FC = () => {
  return (
    <AboutSection>
      <TitleContainer>
        <Title>Sobre</Title>
        <Subtitle>Um pouco sobre mim</Subtitle>
      </TitleContainer>
    </AboutSection>
  );
};
