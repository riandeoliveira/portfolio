import { AboutSection } from "../styles/About";
import { TitleContainer, Title, Subtitle } from "../styles/global/global";
import { DescriptionContainer, Description } from "../styles/About";

export const About: React.FC = () => {
  return (
    <AboutSection>
      <TitleContainer>
        <Title>Sobre</Title>
        <Subtitle>Um pouco sobre mim</Subtitle>
      </TitleContainer>
      <DescriptionContainer>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora omnis
          repellendus debitis blanditiis. Aliquid, quibusdam reprehenderit porro
          consequuntur vero unde non asperiores dolorum, minima molestias
          numquam nesciunt quis, maxime repellendus? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Error, ducimus reiciendis. Quae
          quibusdam porro possimus a reiciendis accusamus, eligendi culpa optio
          animi dolores deleniti rem fugit fugiat dignissimos labore architecto.
        </Description>
      </DescriptionContainer>
    </AboutSection>
  );
};
