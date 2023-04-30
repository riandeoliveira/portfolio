import { FaPause, FaPlay } from "react-icons/fa";
import * as S from "./styles";

type YouTubeIntegratedRadioProps = {
  title: string;
  onPlay: () => void;
  onPause: () => void;
  playing: boolean;
  description: string;
  thumbnail: any;
};

export const YouTubeIntegratedRadio = ({
  title,
  onPlay,
  onPause,
  playing,
  description,
  thumbnail,
}: YouTubeIntegratedRadioProps): JSX.Element => {
  return (
    <S.Box>
      <S.TitleBox>
        <S.Title>{title}</S.Title>
      </S.TitleBox>
      <S.MusicPlayerBox>
        <S.Thumbnail as={thumbnail} />
        <S.MusicPlayerContent>
          <span>{description}</span>
          <S.PlayButtonBox>
            <S.PlayButton type="button" onClick={playing ? onPause : onPlay}>
              {playing ? <FaPause /> : <FaPlay />}
            </S.PlayButton>
          </S.PlayButtonBox>
        </S.MusicPlayerContent>
      </S.MusicPlayerBox>
    </S.Box>
  );
};
