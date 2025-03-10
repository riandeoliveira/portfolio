import { image } from "@/assets/images";
import { Image } from "@/components/image";
import { NeonBackground } from "@/components/neon-background";
import { Section } from "@/composables/section";
import { useI18n } from "@/hooks/use-i18n";
import type { ReactElement } from "react";

export const AchievementsSection = (): ReactElement => {
  const { t } = useI18n();

  return (
    <section id="achievements" className="flex justify-center py-48 px-4">
      <div className="w-[1200px] flex flex-col gap-8">
        <Section.Title isHighlighted>{t("what_i_have_achieved")}</Section.Title>
        <Section.Description>
          {t("achievements_description")}
        </Section.Description>
        <div className="flex gap-4 mt-8 tablet-s:flex-col">
          <NeonBackground className="max-h-[388px] flex-1">
            <Image
              src={image.teamCertificate}
              alt="Imagem de certificado de uma equipe"
              height={384}
              skeletonClassName="h-96"
              className="rounded-xl w-full h-96 object-cover"
            />
          </NeonBackground>
          <NeonBackground className="max-h-[388px] flex-1">
            <Image
              src={image.personalCertificate}
              alt="Imagem de certificado de uma pessoa"
              height={384}
              skeletonClassName="h-96"
              className="rounded-xl w-full h-96 object-cover"
            />
          </NeonBackground>
        </div>
      </div>
    </section>
  );
};
