import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Icon } from "@/assets/icons";
import { thumbnails } from "@/assets/images";
import { Card } from "@/components/cards/3d-card";
import { Section } from "@/components/shared/section";
import { skills } from "@/data/skills";
import { useI18n } from "@/hooks/use-i18n";
import { useProject } from "@/hooks/use-project";
import type { Project } from "@/types/project";
import { GradientBackground } from "../backgrounds/gradient-background";
import { SkillCard } from "../cards/skill-card";
import { Image } from "../shared/image";
import { Link } from "../shared/link";

export const ProjectsSection = () => {
  const { t } = useI18n();
  const { getSortedProjectsBy } = useProject();

  const projects = getSortedProjectsBy("highlight");

  return (
    <section id="projects" className="py-48 text-zinc-50">
      <div className="flex justify-center px-4">
        <div className="w-300 flex flex-col gap-4">
          <Section.Title isHighlighted>{t("my_projects")}</Section.Title>
          <Section.Description>{t("projects_description")}</Section.Description>
        </div>
      </div>
      <Swiper
        grabCursor
        centeredSlides
        navigation
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className="py-24! select-none"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 300,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 500,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 200,
          },
        }}
      >
        {projects.map(({ id, ...data }) => (
          <SwiperSlide key={id}>
            <ProjectCard {...data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

type ProjectCardProps = Omit<Project, "id">;

const ProjectCard = ({
  isNew,
  isPrivate,
  name,
  repositoryUrl,
  stack,
  version,
  url,
  info,
}: ProjectCardProps) => {
  const { t, language } = useI18n();

  const langKey = language === "pt-BR" ? "ptBr" : "enUs";
  const projectName = info[langKey].fullName;
  const projectDescription = info[langKey].description;

  return (
    <Card.Root className="inter-var">
      <GradientBackground className="rounded-xl p-px">
        <Card.Body className="relative group/card h-auto rounded-xl w-120 max-s-600:w-100 max-s-480:w-[20rem] cursor-grab!">
          <Card.Item translateZ={80} className="absolute right-0 top-0 z-50">
            <GradientBackground className="rounded-xl translate-x-1.5 -translate-y-1.5">
              <strong className="h-full text-sm flex rounded-lg px-2 py-0.5 font-semibold translate-x-1.5 -translate-y-1.5 tracking-wider">
                {version}
              </strong>
            </GradientBackground>
          </Card.Item>
          {isNew && (
            <Card.Item translateZ={80} className="absolute left-0 top-0 z-50">
              <div
                style={{ boxShadow: "0 0 32px #e40001" }}
                className="w-10 h-10 -translate-x-3 -translate-y-3 absolute animate-pulse rounded-full"
              />
              <Icon.New className="w-12 h-12 -translate-x-4 -translate-y-4" />
            </Card.Item>
          )}
          <div className="bg-linear-to-b from-zinc-800 to-zinc-950 rounded-xl p-6 w-full max-s-480:p-4">
            <Card.Item translateZ={60} className="flex items-center gap-4">
              <strong className="text-xl font-bold">{projectName}</strong>
            </Card.Item>
            <Card.Item
              translateZ={100}
              className="text-sm mt-2 text-justify text-zinc-400"
            >
              <p>{projectDescription}</p>
            </Card.Item>
            <Card.Item translateZ={140} className="w-full mt-4">
              <div className="w-full h-[388px] max-s-480:h-[244px]">
                <Image
                  src={thumbnails[name]}
                  alt={`${t("project_thumbnail")}: ${projectName}`}
                  width={428}
                  height={384}
                  className="h-full object-cover rounded-xl group-hover/card:shadow-xl max-s-480:h-60"
                />
              </div>
            </Card.Item>
            <Card.Item
              translateZ={100}
              className="text-sm mt-2 flex gap-2 justify-evenly items-center w-full"
            >
              {skills
                .filter((skill) => stack.includes(skill.id))
                .map(({ icon, color, id }) => (
                  <SkillCard icon={icon} color={color} key={id} />
                ))}
            </Card.Item>
            <Card.Item
              translateZ={80}
              className="flex mt-6 w-full gap-12 max-s-600:flex-col max-s-600:gap-6 max-s-480:gap-3 max-s-480:mt-3"
            >
              {isPrivate ? (
                <span className="flex w-full items-center justify-center whitespace-nowrap gap-2 h-9 text-red-500">
                  <Icon.LockClosed className="w-5 h-5 fill-red-500" />
                  {t("private_repository")}
                </span>
              ) : (
                repositoryUrl && (
                  <div className="group w-full">
                    <Link
                      href={repositoryUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium p-2 gap-2 hover:bg-transparent group-hover:animate-pulse"
                    >
                      <Icon.GitHub className="w-6 h-6 [&>g>path]:fill-transparent" />
                      {t("access_repository")}
                    </Link>
                    <GradientBackground className="w-full h-px p-0 opacity-0 group-hover:opacity-100 transition-opacity max-s-600:hidden" />
                  </div>
                )
              )}
              {name === "portfolio" ? (
                <span className="flex w-full items-center justify-center whitespace-nowrap gap-2 h-9 text-purple-500">
                  <Icon.MapMarkerAlt className="w-5 h-5 fill-purple-500" />
                  {t("you_are_already_here")}
                </span>
              ) : (
                <div className="group w-full">
                  <Link
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium p-2 gap-2 hover:bg-transparent group-hover:animate-pulse"
                  >
                    <Icon.OutlineExternalLink className="w-5 h-5" />
                    {t("access_project")}
                  </Link>
                  <GradientBackground className="w-full h-px p-0 opacity-0 group-hover:opacity-100 transition-opacity max-s-600:hidden" />
                </div>
              )}
            </Card.Item>
          </div>
        </Card.Body>
      </GradientBackground>
    </Card.Root>
  );
};
