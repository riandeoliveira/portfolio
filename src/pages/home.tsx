import { BackgroundGradient } from "@/components/background-gradient";
import { ProjectCard } from "@/components/project-card";
import { ProjectParallax } from "@/components/project-parallax";
import { SkillsSection } from "@/components/skills-section";
import { projectStore } from "@/stores/project-store";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";

// TODO: Buscar um tooltip animado pro SKillIcon ou fazer um manualmente

export const Home = observer((): ReactElement => {
  return (
    <>
      <div>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Air Jordan 4 Retro Reimagined
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your
            best opportunity to get these right now is by entering raffles and waiting for the
            official releases.
          </p>
          <button
            type="button"
            className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800"
          >
            <span>Buy now </span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              $100
            </span>
          </button>
        </BackgroundGradient>
        <SkillsSection />
      </div>
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
