import type { IProject } from "@/types/project";
import type { ReactElement } from "react";
import { v4 as uuid } from "uuid";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import { SkillIcon } from "./skill-icon";

interface NewCardProps extends IProject {}

export const NewCard = ({
  description,
  gitHubUrl,
  thumbnail,
  name,
  releaseDate,
  skillList,
  websiteUrl,
}: NewCardProps): ReactElement => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ={60} className="text-xl font-bold text-neutral-600 dark:text-white">
          {name}
        </CardItem>
        <CardItem
          as="p"
          translateZ={80}
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ={100} className="w-full mt-4">
          <img
            src={thumbnail}
            className="w-full h-96 object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ={80}
          className="text-neutral-500 text-sm mt-2 dark:text-neutral-300 flex justify-evenly w-full"
        >
          {skillList.map((skillName) => (
            <SkillIcon name={skillName} key={uuid()} />
          ))}
        </CardItem>
        <div className="flex justify-between items-center mt-6">
          <CardItem
            as="a"
            href={gitHubUrl}
            target="_blank"
            translateZ={60}
            className="px-4 py-2 rounded-xl text-xs dark:text-white bg-black text-white font-bold"
          >
            Acessar o repositório
          </CardItem>
          <CardItem
            as="a"
            href={websiteUrl}
            target="_blank"
            translateZ={60}
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Acessar o projeto
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};
