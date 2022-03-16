import { StackSection, StackContainer } from "../styles/Stack";
import { TitleContainer, Title, Subtitle } from "../styles/global/global";

interface StackProps {
  techs: JSX.Element[];
}

export const Stack: React.FC<StackProps> = ({ techs }) => {
  return (
    <StackSection>
      <TitleContainer>
        <Title>Stack</Title>
        <Subtitle>Tecnologias que costumo utilizar</Subtitle>
      </TitleContainer>
      <StackContainer>{techs}</StackContainer>
    </StackSection>
  );
};
