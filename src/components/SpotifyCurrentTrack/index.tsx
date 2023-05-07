import { SiSpotify } from "react-icons/si";
import * as S from "./styles";

type SpotifyCurrentTrackProps = {
  userId: string;
  barColor: string;
};

export const SpotifyCurrentTrack = ({
  userId,
  barColor,
}: SpotifyCurrentTrackProps): JSX.Element => {
  return (
    <S.Box>
      <S.TitleBox>
        <S.Title>Ouvindo agora no</S.Title>
        <SiSpotify size={24} fill="#1db954" />
      </S.TitleBox>
      <S.Iframe
        src={`https://spotify-github-profile.vercel.app/api/view?uid=${userId}&cover_image=true&theme=novatorem&show_offline=false&background_color=ffffff&interchange=true&bar_color=${barColor}&bar_color_cover=false`}
        title="spotify-github-profile"
      />
    </S.Box>
  );
};
