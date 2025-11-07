import { images } from "@/assets/images";
import { Section } from "@/components/shared/section";
import { useI18n } from "@/hooks/use-i18n";
import { GradientBackground } from "../backgrounds/gradient-background";
import { Image } from "../shared/image";

export const AboutSection = () => {
  const { t } = useI18n();

  const yearsSince2021 = new Date().getFullYear() - 2021;

  return (
    <section id="about" className="flex justify-center py-48 px-4 text-zinc-50">
      <div className="w-300 flex gap-12 max-s-960:flex-col-reverse">
        <GradientBackground className="flex-1 p-px rounded-xl">
          <Image
            src={images.about}
            alt={t("about_alt")}
            width={380}
            height={570}
            className="rounded-xl w-full h-full max-s-960:h-96 max-s-960:object-top"
          />
        </GradientBackground>
        <div className="flex flex-col gap-8 flex-2">
          <Section.Title isHighlighted>{t("a_little_about_me")}</Section.Title>
          <div className="flex flex-col gap-4">
            <Section.Description>
              {t("about_me_description", { year: yearsSince2021 })}
            </Section.Description>
            <Section.Description>
              {t("about_me_description_2")}
            </Section.Description>
          </div>
        </div>
      </div>
    </section>
  );
};
