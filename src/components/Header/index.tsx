import { Tooltip, Zoom } from "@mui/material";
import { Author } from "components/Author";
import { Avatar } from "components/Avatar";
import { SpotifyCurrentTrack } from "components/SpotifyCurrentTrack";
import { socialMedias } from "data/social-medias";
import * as S from "./styles";

export const Header = (): JSX.Element => {
  return (
    <S.Header>
      <S.HeaderBox>
        <Avatar />
        <S.Author>
          <Author />
          <S.SocialMedias>
            {socialMedias.map(({ url, name, id, icon: Icon }) => (
              <Tooltip title={name} TransitionComponent={Zoom as any} key={id}>
                <S.Link href={url} rel="external" target="_blank">
                  <Icon size={20} />
                </S.Link>
              </Tooltip>
            ))}
          </S.SocialMedias>
        </S.Author>
      </S.HeaderBox>
      <SpotifyCurrentTrack userId="riandias2016" barColor="ef2ef2" />
    </S.Header>
  );
};
