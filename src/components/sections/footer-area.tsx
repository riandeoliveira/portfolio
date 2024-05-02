import type { ReactElement } from "react";
import { NeonBackground } from "../neon-background";
import { SocialMediasArea } from "../social-medias-area";

export const FooterArea = (): ReactElement => {
  return (
    <>
      <div className="[transform-style:preserve-3d] h-0.5">
        <NeonBackground />
      </div>
      <footer className="h-[40vh] w-full flex justify-center">
        <div className="flex flex-col items-center justify-center gap-8">
          <p className="text-zinc-50 text-base">
            ✨ Desenvolvido com muito 💜 e ☕ por <strong>Rian Oliveira</strong> ✨
          </p>
          <SocialMediasArea />
        </div>
      </footer>
    </>
  );
};
