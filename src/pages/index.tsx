import { Header } from "components/Header";
import { Navbar } from "components/Navbar";
import type { NextPage } from "next";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

const Home: NextPage = (): JSX.Element => {
  return (
    <div className="bg-black-alpha min-h-screen font-primary text-white flex justify-center">
      <div className="w-[1200px] flex flex-col mt-8 gap-16 px-4">
        <Header />
        <Navbar />
        <main>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="h-[512px]"
          >
            <SwiperSlide className="slide-flex">
              <div className="flex flex-col justify-between">
                <Image
                  src="/assets/images/sla.png"
                  quality={100}
                  alt=""
                  width={512}
                  height={512}
                  className="h-32 object-cover"
                />
                <strong>Urna Eletrônica</strong>
                <p>
                  Simulador web totalmente funcional da Nova Urna Eletrônica que
                  foi utilizada pela primeira vez nas Eleições Brasileiras de
                  2022.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/images/sla.png"
                alt=""
                width={512}
                height={512}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/images/sla.png"
                alt=""
                width={512}
                height={512}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/images/sla.png"
                alt=""
                width={512}
                height={512}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </main>
      </div>
    </div>
  );
};

export default Home;
