import { avatar } from "@/assets/images";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { HighlightBackground } from "../highlight-background";
import { HighlightText } from "../highlight-text";
import { NeonBackground } from "../neon-background";
import { SocialMediasArea } from "../social-medias-area";

export const ProfileSection = observer((): ReactElement => {
  return (
    <section>
      <HighlightBackground>
        <div className="flex flex-col justify-between">
          <h1 className="text-5xl text-zinc-50 flex flex-col gap-2 font-semibold">
            <span>Olá, eu sou Rian Oliveira!</span>
            <HighlightText>Desenvolvedor Front-End</HighlightText>
          </h1>
          <SocialMediasArea />
        </div>
        <div className="[transform-style:preserve-3d] p-1">
          <NeonBackground className="rounded-full">
            <img
              src={avatar}
              alt="Imagem de perfil"
              width={256}
              height={256}
              className="rounded-full"
            />
          </NeonBackground>
        </div>
      </HighlightBackground>
    </section>
  );
});
