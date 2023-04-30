import styled, { css } from "styled-components";
import { theme } from "styles/theme";
import PrimaryAvatarSVG from "../../../public/assets/images/primary-avatar.svg";
import SecondaryAvatarSVG from "../../../public/assets/images/secondary-avatar.svg";

type AvatarMotion = {
  isRotating: boolean | null;
};

export const Box = styled.div<AvatarMotion>`
  cursor: pointer;
  display: flex;
  gap: 40rem;

  ${(props) => {
    if (props.isRotating) {
      return theme.animations.rotate_primary_avatar;
    }

    if (props.isRotating === false) {
      return theme.animations.rotate_secondary_avatar;
    }

    return "";
  }}
`;

const avatarStyles = css`
  height: 128rem;
  position: absolute;
  width: 128rem;

  & > rect {
    height: inherit;
    position: inherit;
    width: inherit;
  }
`;

export const SecondaryAvatar = styled(SecondaryAvatarSVG)<AvatarMotion>`
  ${avatarStyles}

  ${(props) => {
    if (props.isRotating) {
      return theme.animations.toggle_secondary_avatar;
    }

    if (props.isRotating === false) {
      return theme.animations.toggle_primary_avatar;
    }

    return "";
  }}
`;

export const PrimaryAvatar = styled(PrimaryAvatarSVG)`
  ${avatarStyles}
`;

export const AvatarBackground = styled.div`
  border-radius: 100rem;
  box-shadow: 0 0 48rem ${theme.colors.pink};
  height: 128rem;
  width: 128rem;

  ${theme.animations.pulse};
`;
