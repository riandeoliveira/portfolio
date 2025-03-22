import { Section } from "@/components/section";
import { useI18n } from "@/hooks/use-i18n";
import { useProject } from "@/hooks/use-project";
import type { ReactElement } from "react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProjectCard } from "./project-card";

export const ProjectsSection = (): ReactElement => {
  const { t } = useI18n();
  const { getSortedProjectsBy } = useProject();

  return (
    <section id="projects" className="py-48 text-zinc-50">
      <div className="flex justify-center px-4">
        <div className="w-[1200px] flex flex-col gap-4">
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
        className="!py-24 select-none"
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
        {getSortedProjectsBy("highlight").map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard
              name={project.name}
              info={project.info}
              stack={project.stack}
              thumbnailUrl={project.thumbnailUrl}
              version={project.version}
              projectUrl={project.projectUrl}
              repositoryUrl={project.repositoryUrl}
              isPrivate={project.isPrivate}
              isNew={project.isNew}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
