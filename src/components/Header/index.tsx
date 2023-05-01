import { Author } from "components/Author";
import { Avatar } from "components/Avatar";
import { SpotifyCurrentTrack } from "components/SpotifyCurrentTrack";
import { YouTubeIntegratedRadio } from "components/YouTubeIntegratedRadio";
import { socialMedias } from "data/social-medias";
import { usePlayerStore } from "store/usePlayerStore";
import { Pagination } from "swiper";
import { SwiperSlide } from "swiper/react";
import lofiRadioThumbnail from "../../../public/assets/images/lofi-radio-thumbnail.svg";
import synthwaveRadioThumbnail from "../../../public/assets/images/synthwave-radio-thumbnail.svg";
import * as S from "./styles";

export const Header = (): JSX.Element => {
  const playerStore = usePlayerStore();

  return (
    <S.Header>
      <S.HeaderBox>
        <Avatar />
        <S.Author>
          <Author />
          <S.SocialMedias>
            {socialMedias.map(({ url, name, id, icon: Icon }) => (
              <S.Link
                href={url}
                rel="external"
                target="_blank"
                title={name}
                key={id}
              >
                <Icon size={20} />
              </S.Link>
            ))}
          </S.SocialMedias>
        </S.Author>
      </S.HeaderBox>
      <S.Slider
        mousewheel
        direction="vertical"
        loop
        centeredSlides
        spaceBetween={100}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <SpotifyCurrentTrack userId="riandias2016" barColor="ef2ef2" />
        </SwiperSlide>
        <SwiperSlide>
          <YouTubeIntegratedRadio
            title="Rádio Lo-Fi 🍃"
            description="beats to relax/study to"
            thumbnail={lofiRadioThumbnail}
            playing={playerStore.lofiRadio.playing}
            onPlay={playerStore.playLofiRadio}
            onPause={playerStore.pauseLofiRadio}
          />
        </SwiperSlide>
        <SwiperSlide>
          <YouTubeIntegratedRadio
            title="Rádio Synthwave 💫"
            description="beats to chill/game to"
            thumbnail={synthwaveRadioThumbnail}
            playing={playerStore.synthwaveRadio.playing}
            onPlay={playerStore.playSynthwaveRadio}
            onPause={playerStore.pauseSynthwaveRadio}
          />
        </SwiperSlide>
      </S.Slider>
      <S.MusicPlayer
        url="https://www.youtube.com/watch?v=jfKfPfyJRdk"
        playing={playerStore.lofiRadio.playing}
        width={300}
        height={128}
      />
      <S.MusicPlayer
        url="https://www.youtube.com/watch?v=MVPTGNGiI-4"
        playing={playerStore.synthwaveRadio.playing}
        width={300}
        height={128}
      />
    </S.Header>
  );
};
