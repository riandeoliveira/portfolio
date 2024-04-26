import type { IProject } from "@/types/project";
import type { ReactElement } from "react";
import { FaGithub } from "react-icons/fa";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import { SkillIcon } from "./skill-icon";
import { Tooltip } from "./tooltip";

interface ProjectCardProps extends Omit<IProject, "id"> {}

export const ProjectCard = ({
  description,
  repository,
  thumbnail,
  name,
  skillList,
  websiteUrl,
}: ProjectCardProps): ReactElement => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ={60} className="text-xl font-bold text-neutral-600 dark:text-white">
          {name}
        </CardItem>
        <CardItem
          as="p"
          translateZ={80}
          className="text-neutral-500 text-sm mt-2 dark:text-neutral-300 text-justify"
        >
          {description}
        </CardItem>
        <CardItem translateZ={100} className="w-full mt-4">
          <Tooltip title="Clique para acessar o projeto">
            <a href={websiteUrl} target="_blank" rel="noreferrer">
              <img
                src={thumbnail}
                alt={`thumbnail do projeto ${name}`}
                className="w-full h-96 object-cover rounded-xl group-hover/card:shadow-xl active:scale-90 transition-all"
              />
            </a>
          </Tooltip>
        </CardItem>
        <CardItem
          translateZ={80}
          className="text-neutral-500 text-sm mt-2 dark:text-neutral-300 flex justify-evenly w-full"
        >
          {skillList.map((skillName) => (
            <SkillIcon name={skillName} key={skillName} />
          ))}
        </CardItem>
        <div className="flex justify-center items-center mt-6">
          <CardItem
            as="a"
            href={repository?.url}
            target="_blank"
            translateZ={60}
            className="px-4 py-2 rounded-xl text-xs text-gray-800 border-gray-800 border-2 font-bold flex items-center gap-2 transform translate-z-[120px]"
          >
            {repository.isPrivate ? (
              <span>Repositório privado</span>
            ) : (
              <>
                <FaGithub size={24} />
                <span>Acessar o repositório</span>
              </>
            )}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};
