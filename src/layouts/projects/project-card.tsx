import { BaseIcon } from "@/components/base-icon";
import { Image } from "@/components/image";
import { NeonBackground } from "@/components/neon-background";
import { Card } from "@/composables/3d-card";
import { Field } from "@/composables/field";
import { skills } from "@/data/skills";
import { useI18n } from "@/hooks/use-i18n";
import type { Project } from "@/types/project";
import type { ReactElement } from "react";
import { SkillCard } from "../skills/skill-card";

type ProjectCardProps = Omit<Project, "id">;

export const ProjectCard = ({
  isNew,
  isPrivate,
  name,
  repositoryUrl,
  stack,
  thumbnailUrl,
  version,
  projectUrl,
  info,
}: ProjectCardProps): ReactElement => {
  const { t, langProp } = useI18n();

  return (
    <Card.Container className="inter-var">
      <NeonBackground>
        <Card.Body className="bg-zinc-900 relative group/card h-auto rounded-xl w-[30rem] max-s-600:w-[25rem] max-s-480:w-[20rem]">
          {isNew && (
            <Card.Item translateZ={80} className="absolute right-0 top-0 z-50">
              <div
                style={{ boxShadow: "0 0 32px #e40001" }}
                className="w-10 h-10 translate-x-4 -translate-y-2 absolute animate-pulse rounded-full"
              />
              <BaseIcon
                name="new"
                className="w-12 h-12 translate-x-3 -translate-y-3"
              />
            </Card.Item>
          )}
          <div className="bg-zinc-900 rounded-xl p-6 w-full max-s-480:p-4">
            <Card.Item translateZ={60} className="flex items-center gap-4">
              <strong className="text-xl font-bold">
                {info[langProp].fullName}
              </strong>
              <NeonBackground className="h-full rounded-lg p-[1px]">
                <strong className="h-full text-sm flex rounded-lg px-2 py-0.5 bg-zinc-900 font-medium">
                  {version}
                </strong>
              </NeonBackground>
            </Card.Item>
            <Card.Item
              as="p"
              translateZ={100}
              className="text-sm mt-2 text-justify text-zinc-400"
            >
              {info[langProp].description}
            </Card.Item>
            <Card.Item translateZ={140} className="w-full mt-4">
              <NeonBackground className="w-full h-[388px] max-s-480:h-[244px]">
                <Image
                  src={thumbnailUrl}
                  alt={`${t("project_thumbnail")}: ${name}`}
                  width={428}
                  height={384}
                  skeletonClassName="h-96"
                  className="w-full h-96 object-cover rounded-xl group-hover/card:shadow-xl max-s-480:h-60"
                />
              </NeonBackground>
            </Card.Item>
            <Card.Item
              translateZ={100}
              className="text-sm mt-2 flex gap-2 justify-evenly items-center w-full"
            >
              {skills
                .filter((skill) => stack.includes(skill.iconName))
                .map(({ iconName, color, id }) => (
                  <SkillCard iconName={iconName} color={color} key={id} />
                ))}
            </Card.Item>
            <Card.Item
              translateZ={80}
              className="flex mt-6 w-full gap-12 max-s-600:flex-col max-s-600:gap-6 max-s-480:gap-3 max-s-480:mt-3"
            >
              {isPrivate ? (
                <span className="flex w-full items-center justify-center whitespace-nowrap text-red-500 gap-2 h-[36px]">
                  <BaseIcon
                    name="lock-closed"
                    className="w-5 h-5 fill-red-500"
                  />
                  {t("private_repository")}
                </span>
              ) : (
                <Field.Link
                  href={repositoryUrl}
                  target="_blank"
                  rel="noreferrer"
                  containerClassName="w-full"
                  className="text-sm font-medium p-2 gap-2 bg-zinc-900"
                >
                  <BaseIcon
                    name="github"
                    className="w-6 h-6 [&>g>path]:fill-transparent"
                  />
                  {t("access_repository")}
                </Field.Link>
              )}
              <Field.Link
                href={projectUrl}
                target="_blank"
                rel="noreferrer"
                containerClassName="w-full"
                className="text-sm font-medium p-2 gap-2 bg-zinc-900"
              >
                <BaseIcon name="outline-external-link" className="w-5 h-5" />
                {t("access_project")}
              </Field.Link>
            </Card.Item>
          </div>
        </Card.Body>
      </NeonBackground>
    </Card.Container>
  );
};
