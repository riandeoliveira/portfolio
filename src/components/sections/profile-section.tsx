import { useEffect, useState } from "react";
import { images } from "@/assets/images";
import { GradientBackground } from "@/components/backgrounds/gradient-background";
import { HighlightText } from "@/components/shared/highlight-text";
import { Section } from "@/components/shared/section";
import { Tooltip } from "@/components/shared/tooltip";
import { useI18n } from "@/hooks/use-i18n";
import { cn } from "@/utils/cn";
import { HeroBackground } from "../backgrounds/hero-background";
import { SocialMediasLayout } from "../layouts/social-medias-layout";
import { DownloadResumeLink } from "../shared/download-resume-link";
import { Image } from "../shared/image";

export const ProfileSection = () => {
  const { t } = useI18n();

  return (
    <section id="home">
      <HeroBackground
        containerClassName="py-48 px-4 max-s-1080:py-24 max-s-600:py-12"
        className="flex justify-between w-300 gap-12 max-s-1080:flex-col-reverse max-s-1080:items-center text-zinc-50"
      >
        <div className="flex flex-col justify-between gap-12 max-s-720:text-center">
          <Section.Title className="text-5xl flex flex-col gap-2">
            <strong className="font-semibold">
              {t("hello_i_am_rian_oliveira")}
            </strong>
            <HighlightText>{t("front_end_developer")}</HighlightText>
          </Section.Title>
          <div className="flex justify-between items-center gap-8 max-s-720:flex-col">
            <SocialMediasLayout />
            <DownloadResumeLink />
          </div>
        </div>
        <ProfileAvatar />
      </HeroBackground>
    </section>
  );
};

const ProfileAvatar = () => {
  const { t } = useI18n();

  const [isRotating, setIsRotating] = useState<boolean | null>(null);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTooltipOpen(true);

      setTimeout(() => {
        setIsTooltipOpen(false);
      }, 3000);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Tooltip.Root open={isTooltipOpen}>
      <Tooltip.Trigger asChild>
        <button
          type="button"
          onClick={() => setIsRotating((previousState) => !previousState)}
          onMouseEnter={() => setIsTooltipOpen(true)}
          onMouseLeave={() => setIsTooltipOpen(false)}
          className={cn(
            "animate-grow cursor-pointer",
            isRotating === true ? "animate-rotate-primary" : "",
            isRotating === false ? "animate-rotate-secondary" : "",
          )}
        >
          <GradientBackground className="rounded-full p-px w-64 h-64 max-s-600:w-56 max-s-600:h-56">
            <div
              className={cn(
                "bg-zinc-900 gap-2 flex items-center justify-center w-[254px] h-[254px] rounded-full absolute flex-col max-s-600:w-[222px] max-s-600:h-[222px]",
                isRotating === true ? "animate-toggle-secondary" : "",
                isRotating === false ? "animate-toggle-primary" : "",
              )}
            >
              <span
                style={{ transform: "rotateY(180deg)" }}
                className="bg-zinc-500 block bg-clip-text text-sm font-semibold text-transparent bg-linear-to-b from-indigo-500 to-purple-500 max-s-600:text-xs"
              >
                {t("you_found_an_easter_egg")}
              </span>
              <a
                href="/easter-egg.mp4"
                target="_blank"
                rel="noreferrer"
                style={{ transform: "rotateY(180deg)" }}
                className="block bg-clip-text hover:animate-pulse font-semibold text-transparent bg-linear-to-b from-indigo-500 to-purple-500 max-s-600:text-sm"
              >
                {t("where_does_this_link_lead")}
                <div className="h-px bg-linear-to-b from-indigo-500 to-purple-500" />
              </a>
            </div>
            <Image
              src={images.avatar}
              alt={`${t("avatar_alt")}`}
              width={254}
              height={254}
              className="rounded-full z-10"
            />
          </GradientBackground>
        </button>
      </Tooltip.Trigger>
      <Tooltip.Content>
        <span>{t("click_here")}</span>
      </Tooltip.Content>
    </Tooltip.Root>
  );
};
