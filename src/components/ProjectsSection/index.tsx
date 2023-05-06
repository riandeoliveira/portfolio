import { Project } from "components/Project";
import { Section } from "components/Section";
import { projects } from "data/projects";
import { Keyboard, Navigation, Pagination } from "swiper";
import { SwiperSlide } from "swiper/react";
import * as S from "./styles";

export const ProjectsSection = (): JSX.Element => {
  return (
    <Section title="Projetos 💡">
      <S.Slider
        grabCursor
        spaceBetween={24}
        centeredSlides
        keyboard={{ enabled: true }}
        navigation
        slidesPerView={1.5}
        pagination={{
          type: "fraction",
        }}
        modules={[Pagination, Navigation, Keyboard]}
      >
        {projects.map((projectData) => (
          <SwiperSlide key={projectData.id}>
            <Project data={projectData} />
          </SwiperSlide>
        ))}
      </S.Slider>
    </Section>
  );
};
