import { Tooltip, Zoom } from "@mui/material";
import { Author } from "components/Author";
import { Avatar } from "components/Avatar";
import { SpotifyCurrentTrack } from "components/SpotifyCurrentTrack";
import { socialMedias } from "data/social-medias";
import styles from "./styles.module.scss";

export const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.header_box}>
        <Avatar />
        <div className={styles.author}>
          <Author />
          <div className={styles.social_medias}>
            {socialMedias.map(({ url, name, id, icon: Icon }) => (
              <Tooltip title={name} TransitionComponent={Zoom as any} key={id}>
                <a
                  href={url}
                  rel="external"
                  target="_blank"
                  className={styles.link}
                >
                  <Icon size={20} />
                </a>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
      <SpotifyCurrentTrack userId="riandias2016" barColor="ef2ef2" />
    </header>
  );
};
