import { HighlightText } from "@/components/highlight-text";
import { NeonBackground } from "@/components/neon-background";
import { ResumeDownloadLink } from "@/components/resume-download-link";
import { SocialMediasArea } from "@/components/social-medias-area";
import type { ReactElement } from "react";

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
          <ResumeDownloadLink />
        </div>
      </footer>
    </>
  );
};
