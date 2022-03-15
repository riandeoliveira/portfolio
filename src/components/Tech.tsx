import { TechContainer, TechName } from "../styles/Tech";
import { TechImage } from "../styles/global/global";

interface TechProps {
  code: string;
  name: string;
}

export const Tech: React.FC<TechProps> = ({ code, name }) => {
  return (
    <TechContainer>
      <TechImage
        src={`https://raw.githubusercontent.com/devicons/devicon/master/icons/${code}/${code}-original.svg`}
        alt=""
      />
      <TechName>{name}</TechName>
    </TechContainer>
  );
};
