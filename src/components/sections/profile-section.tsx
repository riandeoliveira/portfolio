import { doc } from "@/assets/docs";
import { Icon } from "@/assets/icons";
import { image } from "@/assets/images";
import { video } from "@/assets/videos";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { useState } from "react";
import { Link } from "../form/link";
import { HighlightBackground } from "../highlight-background";
import { HighlightText } from "../highlight-text";
import { NeonBackground } from "../neon-background";
import { SocialMediasArea } from "../social-medias-area";
import { Tooltip } from "../tooltip";

export const ProfileSection = observer((): ReactElement => {
  const [isRotating, setIsRotating] = useState<boolean | null>(null);

  const handleRotate = (): void => setIsRotating((previousState) => !previousState);

  return (
    <section id="profile">
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
            <Link href={doc.curriculum} download className="gap-2 group/link">
              Baixar Currículo
              <Icon.HiDownload
                size={20}
                className="transition-all group-hover/link:animate-bounce"
              />
            </Link>
          </div>
        </div>
        <Tooltip title="Clique aqui!">
          <button
            type="button"
            onClick={handleRotate}
            className={`animate-growUp ${isRotating === true ? "animate-rotatePrimary" : ""} ${isRotating === false ? "animate-rotateSecondary" : ""}`}
          >
            <NeonBackground className="rounded-full p-0 w-64 h-64">
              <div
                className={`bg-zinc-900 flex items-center justify-center w-[248px] h-[248px] rounded-full absolute translate-x-1 translate-y-1 ${isRotating === true ? "animate-toggleSecondary" : ""} ${isRotating === false ? "animate-togglePrimary" : ""}`}
              >
                <a
                  href={video.easterEgg}
                  target="_blank"
                  rel="noreferrer"
                  style={{ transform: "rotateY(180deg)" }}
                  className="block bg-clip-text hover:animate-pulse font-semibold text-transparent bg-gradient-to-b from-indigo-500 to-purple-500"
                >
                  Para onde esse link leva?
                  <div className="h-px bg-gradient-to-b from-indigo-500 to-purple-500" />
                </a>
              </div>
              <img
                src={image.avatar}
                alt="Imagem de perfil"
                width={248}
                height={248}
                className="rounded-full absolute translate-x-1 translate-y-1 z-10"
              />
            </NeonBackground>
          </button>
        </Tooltip>
      </HighlightBackground>
    </section>
  );
});
