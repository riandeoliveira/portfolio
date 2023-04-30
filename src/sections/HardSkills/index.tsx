import { TechnologyArea } from "components/TechnologyArea";
import { TechnologyModal } from "components/TechnologyModal";
import { technologies } from "data/technologies";
import * as S from "./styles";

export const HardSkills = (): JSX.Element => {
  // TODO: Incluir descrição.

  return (
    <S.Section>
      <S.Title>Hard Skills 🛠️</S.Title>
      <S.Content>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste est nisi
        excepturi repudiandae id reiciendis, exercitationem repellat
        consequatur, dolor praesentium ducimus quidem velit magnam dolore iusto
        tempora laboriosam omnis vero! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dignissimos cumque dolor officiis iste magni. Animi
        aspernatur, aliquam explicabo ipsam qui commodi hic veritatis quia illum
        suscipit itaque, cumque voluptatum fuga.
      </S.Content>
      <S.SectionBox>
        <S.Technologies>
          {technologies.map((technologiesList, index) => (
            <TechnologyArea technologies={technologiesList} key={index} />
          ))}
        </S.Technologies>
      </S.SectionBox>
      <TechnologyModal />
    </S.Section>
  );
};
