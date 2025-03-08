import "i18next";
import type enUs from "@/locales/en-us.json";

type TranslationKeys = typeof enUs;

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      translation: TranslationKeys;
    };
  }
}
