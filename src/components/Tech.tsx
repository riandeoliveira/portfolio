import styled from "styled-components";

const TechContainer = styled.div`
  border: 2px solid blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TechImage = styled.img`
  height: 50px;
  width: 50px;
`;

const TechName = styled.span``;

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
      ></TechImage>
      <TechName>{name}</TechName>
    </TechContainer>
  );
};
