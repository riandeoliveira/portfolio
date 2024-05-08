import { HighlightText } from "@/components/highlight-text";
import { Section } from "@/composables/section";
import { type ReactElement } from "react";
import { ContactForm } from "./contact-form";

export const ContactSection = (): ReactElement => {
  return (
    <section id="contact" className="flex justify-center py-48 px-4">
      <div className="w-[1200px] flex gap-12 laptop-s:flex-col">
        <Section.Title className="flex flex-col flex-1 gap-2 text-5xl">
          <strong className="font-semibold">Gostou do que viu?</strong>
          <HighlightText className="w-fit laptop-s:w-full">Entre em Contato!</HighlightText>
        </Section.Title>
        <ContactForm />
      </div>
    </section>
  );
};
