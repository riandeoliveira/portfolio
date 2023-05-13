import styled, { css } from "styled-components";
import { theme } from "styles/theme";
import PrimaryAvatarSVG from "../../../public/assets/images/primary-avatar.svg";
import SecondaryAvatarSVG from "../../../public/assets/images/secondary-avatar.svg";

type AvatarMotionProps = {
  isRotating: boolean | null;
};

export const Box = styled.button<AvatarMotionProps>`
  cursor: pointer;
  display: flex;
  background-color: transparent;
  gap: 40px;
  align-items: center;
  border-radius: 100px;

  ${theme.functions.focus("large", theme.colors.cyan, "light")}

  ${(props) => {
    if (props.isRotating) {
      return theme.animations.rotate_primary_avatar;
    }

    if (props.isRotating === false) {
      return theme.animations.rotate_secondary_avatar;
    }

    return "";
  }}

  @media ${theme.devices.tablet_s} {
    justify-content: center;
  }
`;

const avatarStyles = css`
  height: 128px;
  position: absolute;
  width: 128px;
  transition: all 0.15s ease;

  & > rect {
    height: inherit;
    position: inherit;
    width: inherit;
  }
`;

export const SecondaryAvatar = styled(SecondaryAvatarSVG)<AvatarMotionProps>`
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
  border-radius: 100px;
  box-shadow: 0 0 48px ${theme.colors.pink};
  height: 128px;
  width: 128px;
  transition: all 0.15s ease;

  ${theme.animations.pulse};
`;
