import { useState } from "react";
import PrimaryAvatar from "../../../public/assets/images/primary-avatar.svg";
import SecondaryAvatar from "../../../public/assets/images/secondary-avatar.svg";
import styles from "./styles.module.scss";

export const Avatar = (): JSX.Element => {
  const [avatarAnimation, setAvatarAnimation] = useState<string>("");

  const handleRotation = (): void => {
    if (avatarAnimation === styles.primary_rotation) {
      setAvatarAnimation(styles.secondary_rotation);
    } else if (avatarAnimation === styles.secondary_rotation) {
      setAvatarAnimation(styles.primary_rotation);
    } else {
      setAvatarAnimation(styles.primary_rotation);
    }
  };

  return (
    <div
      className={`${styles.avatar_container} ${avatarAnimation}`}
      onClick={handleRotation}
    >
      <SecondaryAvatar className={styles.secondary_avatar} />
      <PrimaryAvatar className={styles.primary_avatar} />
      <div className={styles.avatar_background}></div>
    </div>
  );
};
