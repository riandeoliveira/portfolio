import { ProjectArea } from "components/ProjectArea";
import { Section } from "components/Section";
import { projects } from "data/projects";
import { Pagination } from "swiper";
import { SwiperSlide } from "swiper/react";
import * as S from "./styles";

export const ProjectsSection = (): JSX.Element => {
  // TODO: Explorar ao máximo as opções de slide do Swiper e aprimorar a seção "Projetos"

  return (
    <Section title="Projetos 🚨">
      <S.Slider
        grabCursor
        spaceBetween={24}
        centeredSlides
        navigation
        slidesPerView={1.5}
        pagination={{
          type: "fraction",
        }}
        modules={[Pagination]}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectArea project={project} />
          </SwiperSlide>
        ))}
      </S.Slider>
    </Section>
  );
};
