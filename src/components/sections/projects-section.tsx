import { projectStore } from "@/stores/project-store";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProjectCard } from "../project-card";

export const ProjectsSection = observer((): ReactElement => {
  return (
    <div className="select-none">
      <Swiper
        grabCursor
        centeredSlides
        navigation
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className="py-24"
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
        {projectStore.sortByHighlight().map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard
              description={project.description}
              repository={project.repository}
              name={project.name}
              skillList={project.skillList}
              thumbnail={project.thumbnail}
              websiteUrl={project.websiteUrl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});
