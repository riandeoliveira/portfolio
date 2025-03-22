import { Section } from "@/components/section";
import { useI18n } from "@/hooks/use-i18n";
import type { ReactElement } from "react";

export const AboutSection = (): ReactElement => {
  const { t } = useI18n();

  const yearsSince2021 = new Date().getFullYear() - 2021;

  return (
    <section id="about" className="flex justify-center py-48 px-4 text-zinc-50">
      <div className="w-300 flex flex-col gap-8">
        <Section.Title isHighlighted>{t("a_little_about_me")}</Section.Title>
        <Section.Description>
          {t("about_me_description", { year: yearsSince2021 })}
        </Section.Description>
      </div>
    </section>
  );
};
