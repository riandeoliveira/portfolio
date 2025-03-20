import { HighlightText } from "@/components/highlight-text";
import { Section } from "@/composables/section";
import { useI18n } from "@/hooks/use-i18n";
import type { ReactElement } from "react";
import { ContactForm } from "./contact-form";

export const ContactSection = (): ReactElement => {
  const { t } = useI18n();

  return (
    <section
      id="contact"
      className="flex justify-center py-48 px-4 text-zinc-50"
    >
      <div className="w-[1200px] flex gap-12 max-laptop-s:flex-col">
        <Section.Title className="flex flex-col flex-1 gap-2 text-5xl">
          <strong className="font-semibold">
            {t("did_you_like_what_you_saw")}
          </strong>
          <HighlightText className="w-fit max-laptop-s:w-full">
            {t("get_in_touch")}
          </HighlightText>
        </Section.Title>
        <ContactForm />
      </div>
    </section>
  );
};
