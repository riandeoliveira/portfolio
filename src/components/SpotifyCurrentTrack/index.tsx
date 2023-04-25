import { SiSpotify } from "react-icons/si";
import styles from "./styles.module.scss";

type SpotifyCurrentTrackProps = {
  userId: string;
  barColor: string;
};

export const SpotifyCurrentTrack = ({
  userId,
  barColor,
}: SpotifyCurrentTrackProps): JSX.Element => {
  // TODO: Adicionar rolagem vertical contendo três seções:
  // 1. Ouvindo agora no Spotify
  // 2. Rádio Lo-fi
  // 3. Rádio Synthwave

  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <span className={styles.title}>Ouvindo agora no</span>
        <SiSpotify size={24} fill="#1db954" />
      </div>
      <img
        src={`https://spotify-github-profile.vercel.app/api/view?uid=${userId}&cover_image=true&theme=novatorem&show_offline=false&background_color=ffffff&interchange=true&bar_color=${barColor}&bar_color_cover=false`}
        alt="spotify-github-profile"
      />
    </div>
  );
};
