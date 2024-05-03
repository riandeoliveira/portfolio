import { projectStore } from "@/stores/project-store";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { HighlightText } from "../highlight-text";
import { ProjectCard } from "../project-card";

export const ProjectsSection = observer((): ReactElement => {
  return (
    <section className="select-none py-48 px-4">
      <div className="flex justify-center px-4">
        <div className="w-[1200px] flex flex-col gap-4">
          <h1 className="text-zinc-50 font-bold text-4xl text-center w-fit tablet-s:text-2xl tablet-s:w-full">
            <HighlightText>Meus Projetos</HighlightText>
          </h1>
          <p className="text-zinc-50 text-justify text-xl tablet-s:text-base">
            Confira alguns dos projetos que eu já desenvolvi
          </p>
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
    </section>
  );
});
