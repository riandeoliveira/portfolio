import { Author } from "components/Author";
import { Avatar } from "components/Avatar";
import { SocialMedia } from "components/SocialMedia";
import { SpotifyCurrentTrack } from "components/SpotifyCurrentTrack";
import { YouTubeIntegratedRadio } from "components/YouTubeIntegratedRadio";
import dynamic from "next/dynamic";
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
import { Swiper, SwiperSlide } from "swiper/react";
import lofiRadioThumbnail from "../../../public/assets/images/lofi-radio-thumbnail.svg";
import synthwaveRadioThumbnail from "../../../public/assets/images/synthwave-radio-thumbnail.svg";
import styles from "./styles.module.scss";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export const Header = (): JSX.Element => {
  const playerStore = usePlayerStore();

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <Avatar />
        <div className={styles.author}>
          <Author />
          <div className={styles.social_medias}>
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
          </div>
        </div>
      </div>
      <Swiper
        mousewheel
        direction="vertical"
        loop
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className={styles.slider}
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
      </Swiper>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=jfKfPfyJRdk"
        playing={playerStore.lofiRadio.playing}
        width={300}
        height={128}
        className={styles.player}
      />
      <ReactPlayer
        url="https://www.youtube.com/watch?v=MVPTGNGiI-4"
        playing={playerStore.synthwaveRadio.playing}
        width={300}
        height={128}
        className={styles.player}
      />
    </header>
  );
};
