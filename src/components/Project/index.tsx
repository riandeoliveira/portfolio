import { Tooltip, Zoom } from "@mui/material";
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
      <div>
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
                <S.Icon key={index}>
                  <Icon />
                </S.Icon>
              ))}
            </S.List>
          </S.Content>
          <S.Footer>
            <S.LinkBox>
              <Tooltip
                title="Acessar repositório"
                placement="top"
                arrow
                TransitionComponent={Zoom as any}
              >
                <S.Link href={github_link} rel="external" target="_blank">
                  <SiGithub size={36} />
                </S.Link>
              </Tooltip>
              <Tooltip
                title="Acessar projeto"
                placement="top"
                arrow
                TransitionComponent={Zoom as any}
              >
                <S.Link href={website_link} rel="external" target="_blank">
                  <FiExternalLink size={36} />
                </S.Link>
              </Tooltip>
            </S.LinkBox>
            <S.Date>Lançado em {release_date}</S.Date>
          </S.Footer>
        </S.Box>
      </div>
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
