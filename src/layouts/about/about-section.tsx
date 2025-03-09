import { Section } from "@/composables/section";
import { useI18n } from "@/hooks/use-i18n";
import type { ReactElement } from "react";

export const AboutSection = (): ReactElement => {
  const { t } = useI18n();

  return (
    <section id="about" className="flex justify-center py-48 px-4">
      <div className="w-[1200px] flex flex-col gap-8">
        <Section.Title isHighlighted>{t("a_little_about_me")}</Section.Title>
        <Section.Description>{t("about_me_description")}</Section.Description>
      </div>
    </section>
  );
};
