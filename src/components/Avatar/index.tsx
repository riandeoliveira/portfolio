import { Tooltip, Zoom } from "@mui/material";
import { useState } from "react";
import * as S from "./styles";

export const Avatar = (): JSX.Element => {
  const [isRotating, setIsRotating] = useState<boolean | null>(null);

  return (
    <Tooltip
      title="Clique aqui!"
      placement="top"
      arrow
      TransitionComponent={Zoom as any}
    >
      <S.Box
        isRotating={isRotating}
        onClick={() => setIsRotating((previousState) => !previousState)}
      >
        <S.SecondaryAvatar isRotating={isRotating} />
        <S.PrimaryAvatar />
        <S.AvatarBackground />
      </S.Box>
    </Tooltip>
  );
};
