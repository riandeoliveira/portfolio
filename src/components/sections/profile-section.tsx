import { curriculum } from "@/assets/docs";
import { avatar } from "@/assets/images";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { Link } from "../form/link";
import { HighlightBackground } from "../highlight-background";
import { HighlightText } from "../highlight-text";
import { NeonBackground } from "../neon-background";
import { SocialMediasArea } from "../social-medias-area";

export const ProfileSection = observer((): ReactElement => {
  return (
    <section>
      <HighlightBackground containerClassName="py-48" className="flex justify-between w-[1200px]">
        <div className="flex flex-col justify-between">
          <h1 className="text-5xl text-zinc-50 flex flex-col gap-2">
            <strong className="font-semibold">Olá, eu sou Rian Oliveira!</strong>
            <HighlightText>Desenvolvedor Front End</HighlightText>
          </h1>
          <div className="flex justify-between items-center">
            <SocialMediasArea />
            <Link href={curriculum} download>
              Baixar Currículo
            </Link>
          </div>
        </div>
        <NeonBackground className="rounded-full p-1">
          <img
            src={avatar}
            alt="Imagem de perfil"
            width={256}
            height={256}
            className="rounded-full"
          />
        </NeonBackground>
      </HighlightBackground>
    </section>
  );
});
