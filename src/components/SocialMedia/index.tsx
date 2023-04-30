import { IconType } from "react-icons";
import * as S from "./styles";

type SocialMediaProps = {
  link: string;
  icon: IconType;
};

export const SocialMedia = ({
  link,
  icon: Icon,
}: SocialMediaProps): JSX.Element => {
  return (
    <S.Link href={link} rel="external" target="_blank">
      <Icon size={20} />
    </S.Link>
  );
};
