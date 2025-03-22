import { HighlightText } from "@/components/highlight-text";
import { ResumeDownloadLink } from "@/components/resume-download-link";
import { Section } from "@/components/section";
import { SocialMediasArea } from "@/components/social-medias-area";
import { useI18n } from "@/hooks/use-i18n";
import type { ReactElement } from "react";
import { ProfileAvatar } from "./profile-avatar";
import { ProfileBackground } from "./profile-background";

export const ProfileSection = (): ReactElement => {
  const { t } = useI18n();

  return (
    <section id="home">
      <ProfileBackground
        containerClassName="py-48 px-4 max-s-1080:py-24 max-s-600:py-12"
        className="flex justify-between w-300 gap-12 max-s-1080:flex-col-reverse max-s-1080:items-center text-zinc-50"
      >
        <div className="flex flex-col justify-between gap-12 max-s-720:text-center">
          <Section.Title className="text-5xl flex flex-col gap-2">
            <strong className="font-semibold">
              {t("hello_i_am_rian_oliveira")}
            </strong>
            <HighlightText>{t("full_stack_developer")}</HighlightText>
          </Section.Title>
          <div className="flex justify-between items-center gap-8 max-s-720:flex-col">
            <SocialMediasArea />
            <ResumeDownloadLink />
          </div>
        </div>
        <ProfileAvatar />
      </ProfileBackground>
    </section>
  );
};
