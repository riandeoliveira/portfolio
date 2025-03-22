import i18n from "@/i18n";
import { useTranslation } from "react-i18next";

const languages = [
  { key: "enUs", value: "en-US" },
  { key: "ptBr", value: "pt-BR" },
] as const;

export type LanguageKeys = (typeof languages)[number]["key"];
export type LanguageValues = (typeof languages)[number]["value"];

const getKeyByValue = (value: LanguageValues): LanguageKeys => {
  return languages.find((lang) => lang.value === value)?.key as LanguageKeys;
};

const getOppositeLanguage = (current: LanguageValues): LanguageValues => {
  return current === "en-US" ? "pt-BR" : "en-US";
};

type UseI18n = {
  handleSwitchLanguage: () => void;
  langKey: LanguageKeys;
  language: LanguageValues;
  oppositeLanguage: LanguageValues;
  t: ReturnType<typeof useTranslation>["t"];
};

export const useI18n = (): UseI18n => {
  const { t } = useTranslation();

  const language = i18n.language as LanguageValues;

  const langKey = getKeyByValue(language);
  const oppositeLanguage = getOppositeLanguage(language);

  const handleSwitchLanguage = (): void => {
    i18n.changeLanguage(oppositeLanguage);
  };

  return {
    handleSwitchLanguage,
    langKey,
    language,
    oppositeLanguage,
    t,
  };
};
