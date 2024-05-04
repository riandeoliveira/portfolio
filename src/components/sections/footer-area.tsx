import { doc } from "@/assets/docs";
import { Icon } from "@/assets/icons";
import type { ReactElement } from "react";
import { Link } from "../form/link";
import { HighlightText } from "../highlight-text";
import { NeonBackground } from "../neon-background";
import { SocialMediasArea } from "../social-medias-area";

export const FooterArea = (): ReactElement => {
  return (
    <>
      <NeonBackground className="h-0.5 p-0" />
      <footer className="w-full flex justify-center py-48 px-4">
        <div className="flex flex-col items-center justify-center gap-8">
          <p className="text-zinc-50 text-base text-center">
            ✨ Desenvolvido com muito 💜 e ☕ por{" "}
            <HighlightText className="rounded-md pb-0.5">Rian Oliveira</HighlightText> ✨
          </p>
          <SocialMediasArea />
          <Link href={doc.curriculum} download className="gap-2 group/link">
            Baixar Currículo
            <Icon.HiDownload size={20} className="transition-all group-hover/link:animate-bounce" />
          </Link>
        </div>
      </footer>
    </>
  );
};
