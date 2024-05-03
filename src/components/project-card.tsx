import { skillStore } from "@/stores/skill-store";
import type { IProject } from "@/types/project";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { FaGithub } from "react-icons/fa";
import { HiLockClosed, HiOutlineExternalLink } from "react-icons/hi";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import { Link } from "./form/link";
import { NeonBackground } from "./neon-background";
import { SkillCard } from "./skill-card";

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
        <NeonBackground>
          <CardBody className="bg-zinc-900 relative group/card w-[30rem] h-auto rounded-xl">
            <div className="bg-zinc-900 rounded-xl p-4">
              <CardItem translateZ={60} className="text-xl font-bold text-zinc-50">
                {name}
              </CardItem>
              <CardItem as="p" translateZ={100} className="text-sm mt-2 text-justify text-zinc-400">
                {description}
              </CardItem>
              <CardItem translateZ={140} className="w-full mt-4">
                <NeonBackground>
                  <img
                    src={thumbnail}
                    alt={`thumbnail do projeto ${name}`}
                    className="w-full h-96 object-cover rounded-xl group-hover/card:shadow-xl"
                  />
                </NeonBackground>
              </CardItem>
              <CardItem translateZ={100} className="text-sm mt-2 flex justify-evenly w-full">
                {skillStore.filterBy(skillList).map(({ icon, color, name }) => (
                  <SkillCard icon={icon} color={color} key={name} />
                ))}
              </CardItem>
              <CardItem translateZ={80} className="flex mt-6 w-full gap-12">
                {repository.isPrivate ? (
                  <span className="flex w-full items-center justify-center whitespace-nowrap text-red-500 gap-2">
                    <HiLockClosed size={20} />
                    Repositório privado
                  </span>
                ) : (
                  <Link
                    href={repository.url}
                    target="_blank"
                    rel="noreferrer"
                    containerClassName="w-full"
                    className="text-sm font-medium p-2 gap-2 bg-zinc-900"
                  >
                    <FaGithub size={20} />
                    Acessar repositório
                  </Link>
                )}
                <Link
                  href={websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  containerClassName="w-full"
                  className="text-sm font-medium p-2 gap-2 bg-zinc-900"
                >
                  <HiOutlineExternalLink size={20} />
                  Acessar projeto
                </Link>
              </CardItem>
            </div>
          </CardBody>
        </NeonBackground>
      </CardContainer>
    );
  },
);
