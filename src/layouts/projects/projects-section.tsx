import { Section } from "@/composables/section";
import { useI18n } from "@/hooks/use-i18n";
import { useProject } from "@/hooks/use-project";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProjectCard } from "./project-card";

export const ProjectsSection = observer((): ReactElement => {
  const { t } = useI18n();
  const { getSortedProjectsBy } = useProject();

  return (
    <section id="projects" className="py-48 px-4">
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
        className="py-24 select-none"
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
              description={project.description}
              repository={project.repository}
              name={project.name}
              skillNames={project.skillNames}
              thumbnail={project.thumbnail}
              websiteUrl={project.websiteUrl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
});
