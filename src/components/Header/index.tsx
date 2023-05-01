import { Author } from "components/Author";
import { Avatar } from "components/Avatar";
import { SocialMedia } from "components/SocialMedia";
import { SpotifyCurrentTrack } from "components/SpotifyCurrentTrack";
import { YouTubeIntegratedRadio } from "components/YouTubeIntegratedRadio";
import {
  SiGithub,
  SiGmail,
  SiInstagram,
  SiLinkedin,
  SiSpotify,
  SiTwitter,
  SiWhatsapp,
} from "react-icons/si";
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
            <SocialMedia
              link="https://github.com/riandeoliveira"
              icon={SiGithub}
            />
            <SocialMedia
              link="https://www.linkedin.com/in/riandeoliveira/"
              icon={SiLinkedin}
            />
            <SocialMedia
              link="https://twitter.com/_MrBachelor_"
              icon={SiTwitter}
            />
            <SocialMedia link="https://wa.me/5551991852873" icon={SiWhatsapp} />
            <SocialMedia
              link="mailto:riandiasdeoliveira2001@gmail.com"
              icon={SiGmail}
            />
            <SocialMedia
              link="https://www.instagram.com/rian.deoliveira/"
              icon={SiInstagram}
            />
            <SocialMedia
              link="https://open.spotify.com/user/riandias2016"
              icon={SiSpotify}
            />
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
