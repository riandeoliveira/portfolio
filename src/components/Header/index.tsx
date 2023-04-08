import { Author } from "components/Author";
import { Avatar } from "components/Avatar";
import { SocialMedia } from "components/SocialMedia";
import { SpotifyCurrentTrack } from "components/SpotifyCurrentTrack";
import {
  SiGithub,
  SiGmail,
  SiInstagram,
  SiLinkedin,
  SiSpotify,
  SiTwitter,
  SiWhatsapp,
} from "react-icons/si";
import styles from "./styles.module.scss";

export const Header = (): JSX.Element => {
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
      <SpotifyCurrentTrack userId="riandias2016" barColor="ef2ef2" />
    </header>
  );
};
