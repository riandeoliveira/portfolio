import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { ProjectType } from "types";
import * as S from "./styles";

type ProjectProps = {
  data: ProjectType;
};

export const Project = ({
  data: {
    name,
    description,
    skill_icons,
    github_link,
    website_link,
    release_date,
    image,
  },
}: ProjectProps): JSX.Element => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <>
      <S.OpaqueBackground hovered={hovered} />
      <S.Box
        hovered={hovered}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <S.Content>
          <S.Title>{name}</S.Title>
          <S.Description>{description}</S.Description>
          <S.List>
            {skill_icons.map((Icon, index) => (
              <Icon key={index} />
            ))}
          </S.List>
        </S.Content>
        <S.Footer>
          <S.LinkBox>
            <S.Link href={github_link} rel="external" target="_blank">
              <SiGithub size={36} />
            </S.Link>
            <S.Link href={website_link} rel="external" target="_blank">
              <FiExternalLink size={36} />
            </S.Link>
          </S.LinkBox>
          <S.Date>Lançado em {release_date}</S.Date>
        </S.Footer>
      </S.Box>
      <S.Image
        src={`/assets/images/${image}`}
        alt="Project image"
        width={700}
        height={400}
        quality={100}
        hovered={hovered}
      />
    </>
  );
};
