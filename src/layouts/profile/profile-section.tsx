import { HighlightText } from "@/components/highlight-text";
import { ResumeDownloadLink } from "@/components/resume-download-link";
import { SocialMediasArea } from "@/components/social-medias-area";
import { Section } from "@/composables/section";
import type { ReactElement } from "react";
import { ProfileAvatar } from "./profile-avatar";
import { ProfileBackground } from "./profile-background";

export const ProfileSection = (): ReactElement => {
  return (
    <section id="profile">
      <ProfileBackground
        containerClassName="py-48 px-4 laptop-s:py-24 tablet-s:py-12"
        className="flex justify-between w-[1200px] gap-12 laptop-s:flex-col-reverse laptop-s:items-center"
      >
        <div className="flex flex-col justify-between gap-12 tablet-m:text-center">
          <Section.Title className="text-5xl flex flex-col gap-2">
            <strong className="font-semibold">Olá, eu sou Rian Oliveira!</strong>
            <HighlightText>Desenvolvedor Front End</HighlightText>
          </Section.Title>
          <div className="flex justify-between items-center gap-8 tablet-m:flex-col">
            <SocialMediasArea />
            <ResumeDownloadLink />
          </div>
        </div>
        <ProfileAvatar />
      </ProfileBackground>
    </section>
  );
};
