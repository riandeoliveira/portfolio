import { HighlightText } from "@/components/highlight-text";
import { ResumeDownloadLink } from "@/components/resume-download-link";
import { SocialMediasArea } from "@/components/social-medias-area";
import { Section } from "@/composables/section";
import { useI18n } from "@/hooks/use-i18n";
import type { ReactElement } from "react";
import { ProfileAvatar } from "./profile-avatar";
import { ProfileBackground } from "./profile-background";

export const ProfileSection = (): ReactElement => {
  const { t } = useI18n();

  return (
    <section id="home">
      <ProfileBackground
        containerClassName="py-48 px-4 max-laptop-s:py-24 max-tablet-s:py-12"
        className="flex justify-between w-[1200px] gap-12 max-laptop-s:flex-col-reverse max-laptop-s:items-center text-zinc-50"
      >
        <div className="flex flex-col justify-between gap-12 max-tablet-m:text-center">
          <Section.Title className="text-5xl flex flex-col gap-2">
            <strong className="font-semibold">
              {t("hello_i_am_rian_oliveira")}
            </strong>
            <HighlightText>{t("full_stack_developer")}</HighlightText>
          </Section.Title>
          <div className="flex justify-between items-center gap-8 max-tablet-m:flex-col">
            <SocialMediasArea />
            <ResumeDownloadLink />
          </div>
        </div>
        <ProfileAvatar />
      </ProfileBackground>
    </section>
  );
};
