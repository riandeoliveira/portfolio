import { HeroParallax } from "@/components/hero-parallax";
import { NewCard } from "@/components/new-card";
import { projects } from "@/data/projects";
import type { ReactElement } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuid } from "uuid";
import "./style.css";

const HeroParallaxDemo = () => {
  return <HeroParallax products={products} />;
};

const products = [
  {
    title: "Awax",
    link: "https://riandeoliveira.github.io/awax/",
    thumbnail: "https://i.imgur.com/uQlqG7I.png",
  },
  {
    title: "Metamorfose Digital",
    link: "https://metamorfose-digital.vercel.app/",
    thumbnail: "https://i.imgur.com/OM8zsvo.png",
  },
  {
    title: "MediCenter",
    link: "https://medicenter-beryl.vercel.app/",
    thumbnail: "https://i.imgur.com/iKhpXGm.png",
  },
  {
    title: "Glossário de Libras",
    link: "https://glossario-libras.vercel.app/",
    thumbnail: "https://i.imgur.com/XfVxsNM.png",
  },
  {
    title: "Lista de Tarefas",
    link: "https://todo-list-ruddy-six.vercel.app/",
    thumbnail: "https://i.imgur.com/1D1ECA2.png",
  },
  {
    title: "Casa Verde",
    link: "https://riandeoliveira.github.io/7-days-of-code/",
    thumbnail: "https://i.imgur.com/uPovaN5.png",
  },
  {
    title: "Filmes Populares",
    link: "https://popular-movies-six.vercel.app/",
    thumbnail: "https://i.imgur.com/mwziBDU.png",
  },
  {
    title: "Urna Eletrônica",
    link: "https://urna-eletronica-three.vercel.app/",
    thumbnail: "https://i.imgur.com/AS2DTdI.png",
  },
  {
    title: "Clone do LinkedIn",
    link: "https://linkedin-clone-zeta-three.vercel.app/",
    thumbnail: "https://i.imgur.com/MmtGIEl.png",
  },
  {
    title: "OptimusTech",
    link: "https://optimus-tech-eta.vercel.app/",
    thumbnail: "https://i.imgur.com/nVC9Qmv.png",
  },
  {
    title: "Calculadora",
    link: "https://calculator-three-cyan.vercel.app/",
    thumbnail: "https://i.imgur.com/V874xE3.png",
  },
  {
    title: "GoGreen",
    link: "https://ods-13-website.vercel.app/",
    thumbnail: "https://i.imgur.com/N1Ak4Po.png",
  },
  {
    title: "Clone da Blaze",
    link: "https://blaze-clone-alpha.vercel.app/games/crash",
    thumbnail: "https://i.imgur.com/q52CHgs.png",
  },
  {
    title: "PetMatch",
    link: "https://petmatch-web.vercel.app/",
    thumbnail: "https://i.imgur.com/LWvF8C9.png",
  },
  {
    title: "Profile Card Component",
    link: "https://riandeoliveira.github.io/profile-card-component/",
    thumbnail: "https://i.imgur.com/1RJUzAb.png",
  },
];

export const Home = (): ReactElement => {
  return (
    <>
      <HeroParallaxDemo />
      <div className="pb-32 pt-">
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
          {projects.map(
            ({ description, gitHubUrl, name, releaseDate, skillList, thumbnail, websiteUrl }) => (
              <SwiperSlide key={uuid()}>
                <NewCard
                  description={description}
                  gitHubUrl={gitHubUrl}
                  name={name}
                  releaseDate={releaseDate}
                  skillList={skillList}
                  thumbnail={thumbnail}
                  websiteUrl={websiteUrl}
                />
              </SwiperSlide>
            ),
          )}
        </Swiper>
      </div>
    </>
  );
};
