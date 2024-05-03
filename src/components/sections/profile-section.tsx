import { doc } from "@/assets/docs";
import { Icon } from "@/assets/icons";
import { image } from "@/assets/images";
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
      <HighlightBackground
        containerClassName="py-48 px-4 laptop-s:py-24"
        className="flex justify-between w-[1200px] gap-12 laptop-s:flex-col-reverse laptop-s:items-center"
      >
        <div className="flex flex-col justify-between gap-12 tablet-m:text-center">
          <h1 className="w-full text-5xl text-zinc-50 flex flex-col gap-2 tablet-m:text-3xl">
            <strong className="font-semibold">Olá, eu sou Rian Oliveira!</strong>
            <HighlightText>Desenvolvedor Front End</HighlightText>
          </h1>
          <div className="flex justify-between items-center gap-8 tablet-m:flex-col">
            <SocialMediasArea />
            <Link href={doc.curriculum} download className="gap-2">
              Baixar Currículo
              <Icon.HiDownload size={20} />
            </Link>
          </div>
        </div>
        <NeonBackground className="rounded-full p-1 w-64 h-64">
          <img
            src={image.avatar}
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
