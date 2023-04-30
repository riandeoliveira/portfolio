import { useState } from "react";
import * as S from "./styles";

export const Avatar = (): JSX.Element => {
  const [isRotating, setIsRotating] = useState<boolean | null>(null);

  return (
    <S.Box
      isRotating={isRotating}
      onClick={() => setIsRotating((previousState) => !previousState)}
    >
      <S.SecondaryAvatar isRotating={isRotating} />
      <S.PrimaryAvatar />
      <S.AvatarBackground />
    </S.Box>
  );
};
