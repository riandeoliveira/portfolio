import { skillStore } from "@/stores/skill-store";
import type { IProject } from "@/types/project";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { FaGithub } from "react-icons/fa";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import { SkillCard } from "./skill-card";
import { Tooltip } from "./tooltip";

interface ProjectCardProps extends Omit<IProject, "id"> {}

export const ProjectCard = observer(
  ({
    description,
    repository,
    thumbnail,
    name,
    skillList,
    websiteUrl,
  }: ProjectCardProps): ReactElement => {
    return (
      <CardContainer className="inter-var">
        <CardBody className="bg-zinc-900 relative group/card w-auto sm:w-[30rem] h-auto rounded-xl">
          <div className="bg-zinc-900 rounded-xl p-4">
            <CardItem translateZ={60} className="text-xl font-bold text-zinc-100">
              {name}
            </CardItem>
            <CardItem as="p" translateZ={80} className="text-sm mt-2 text-justify text-zinc-400">
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
              {skillStore.filterBy(skillList).map(({ icon, color, name }) => (
                <SkillCard icon={icon} color={color} key={name} />
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
          </div>
        </CardBody>
      </CardContainer>
    );
  },
);
