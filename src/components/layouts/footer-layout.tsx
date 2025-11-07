import { SocialMediasLayout } from "@/components/layouts/social-medias-layout";
import { DownloadResumeLink } from "@/components/shared/download-resume-link";
import { HighlightText } from "@/components/shared/highlight-text";
import { useI18n } from "@/hooks/use-i18n";
import { GradientBackground } from "../backgrounds/gradient-background";

export const FooterLayout = () => {
  const { t } = useI18n();

  return (
    <>
      <GradientBackground className="h-px p-0" />
      <footer className="w-full flex justify-center py-24 px-4 text-zinc-50">
        <div className="flex flex-col items-center justify-center gap-8">
          <p className="text-base text-center">
            ✨ {t("developed_with_much")} 💜 {t("and")} ☕ {t("by")}
            &nbsp;
            <HighlightText className="rounded-md pb-0.5">
              Rian Oliveira
            </HighlightText>
          </p>
          <SocialMediasLayout />
          <DownloadResumeLink />
        </div>
      </footer>
    </>
  );
};
