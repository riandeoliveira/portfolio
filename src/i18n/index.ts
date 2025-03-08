import enUs from "@/locales/en-us.json";
import ptBr from "@/locales/pt-br.json";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      caches: ["localStorage"],
      lookupLocalStorage: "locale",
      order: ["localStorage", "navigator"],
    },
    fallbackLng: "en-US",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      "en-US": { translation: enUs },
      "pt-BR": { translation: ptBr },
    },
    supportedLngs: ["en-US", "pt-BR"],
  });

export default i18n;
