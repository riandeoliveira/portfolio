import { projectStore } from "@/stores/project-store";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProjectCard } from "../project-card";
// import "./style.css";

export const ProjectsSection = observer((): ReactElement => {
  return (
    <div className="select-none">
      <Swiper
        grabCursor
        centeredSlides
        navigation
        slidesPerView={3}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className="py-24"
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
