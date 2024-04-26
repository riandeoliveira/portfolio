import { ProjectCard } from "@/components/project-card";
import { ProjectParallax } from "@/components/project-parallax";
import { projectStore } from "@/stores/project-store";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";

export const Home = observer((): ReactElement => {
  return (
    <>
      <ProjectParallax />
      <div className="pb-32 select-none">
        <Swiper
          effect={"slide"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          spaceBetween={224}
          modules={[EffectCoverflow, Pagination]}
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
    </>
  );
});
