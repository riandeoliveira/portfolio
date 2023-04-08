import { IconType } from "react-icons";
import styles from "./styles.module.scss";

type SocialMediaProps = {
  link: string;
  icon: IconType;
};

export const SocialMedia = ({
  link,
  icon: Icon,
}: SocialMediaProps): JSX.Element => {
  return (
    <a href={link} rel="external" target="_blank" className={styles.link}>
      <Icon size={20} className={styles.icon} />
    </a>
  );
};
