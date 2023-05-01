import { ProjectArea } from "components/ProjectArea";
import { projects } from "data/projects";
import { Pagination } from "swiper";
import { SwiperSlide } from "swiper/react";
import * as S from "./styles";

export const Projects = (): JSX.Element => {
  // TODO: Explorar ao máximo as opções de slide do Swiper e aprimorar a seção "Projetos"

  return (
    <S.Section>
      <S.Title>Projetos</S.Title>
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
    </S.Section>
  );
};
