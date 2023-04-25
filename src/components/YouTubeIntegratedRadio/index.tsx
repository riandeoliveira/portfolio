import { FaPause, FaPlay } from "react-icons/fa";
import styles from "./styles.module.scss";

type YouTubeIntegratedRadioProps = {
  title: string;
  onPlay: () => void;
  onPause: () => void;
  playing: boolean;
  description: string;
  thumbnail: any;
};

export const YouTubeIntegratedRadio = ({
  title,
  onPlay,
  onPause,
  playing,
  description,
  thumbnail: Thumbnail,
}: YouTubeIntegratedRadioProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.player_container}>
        <Thumbnail className={styles.thumbnail} />
        <div className={styles.player_content}>
          <span>{description}</span>
          <div className={styles.play_button_container}>
            <button
              type="button"
              onClick={playing ? onPause : onPlay}
              className={styles.play_button}
            >
              {playing ? <FaPause /> : <FaPlay />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
