import { images } from "@/assets/images";
import { Image } from "@/components/shared/image";
import { Section } from "@/components/shared/section";
import { useI18n } from "@/hooks/use-i18n";
import { GradientBackground } from "../backgrounds/gradient-background";

export const AchievementsSection = () => {
  const { t } = useI18n();

  return (
    <section
      id="achievements"
      className="flex justify-center py-48 px-4 text-zinc-50"
    >
      <div className="w-300 flex flex-col gap-8">
        <Section.Title isHighlighted>{t("what_i_have_achieved")}</Section.Title>
        <Section.Description>
          {t("achievements_description")}
        </Section.Description>
        <div className="flex gap-4 mt-8 max-s-600:flex-col">
          <GradientBackground className="rounded-xl flex-1 p-px">
            <Image
              src={images.teamCertificate}
              alt={`${t("team_certificate_alt")}`}
              height={384}
              className="rounded-xl w-full h-96 object-cover"
            />
          </GradientBackground>
          <GradientBackground className="rounded-xl flex-1 p-px">
            <Image
              src={images.personalCertificate}
              alt={`${t("personal_certificate_alt")}`}
              height={384}
              className="rounded-xl w-full h-96 object-cover"
            />
          </GradientBackground>
        </div>
      </div>
    </section>
  );
};
