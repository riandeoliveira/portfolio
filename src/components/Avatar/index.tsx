import { Tooltip, Zoom } from "@mui/material";
import { useState } from "react";
import PrimaryAvatar from "../../../public/assets/images/primary-avatar.svg";
import SecondaryAvatar from "../../../public/assets/images/secondary-avatar.svg";
import styles from "./styles.module.scss";

export const Avatar = (): JSX.Element => {
  const [isRotating, setIsRotating] = useState<boolean | null>(null);

  const handleRotating = (): void => {
    setIsRotating((previousState) => !previousState);
  };

  return (
    <Tooltip
      title="Clique aqui!"
      placement="top"
      arrow
      TransitionComponent={Zoom as any}
    >
      <button
        type="button"
        onClick={handleRotating}
        data-rotating={isRotating}
        className={styles.box}
      >
        <SecondaryAvatar
          data-rotating={isRotating}
          className={styles.secondary_avatar}
        />
        <PrimaryAvatar className={styles.primary_avatar} />
        <div className={styles.avatar_background} />
      </button>
    </Tooltip>
  );
};
