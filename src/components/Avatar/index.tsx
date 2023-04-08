import AvatarImage from "../../../public/assets/images/avatar.svg";
import styles from "./styles.module.scss";

export const Avatar = (): JSX.Element => {
  return (
    <div className={styles.avatar_container}>
      <AvatarImage className={styles.avatar} />
      <div className={styles.avatar_background}></div>
    </div>
  );
};
