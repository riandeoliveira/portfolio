import "i18next";
import type enUs from "@/locales/en-us.json";

type TranslationType = typeof enUs;

export type TranslationKeys = keyof TranslationType;

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      translation: TranslationType;
    };
  }
}
