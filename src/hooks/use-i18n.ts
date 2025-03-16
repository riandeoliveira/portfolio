import i18n from "@/i18n";
import _ from "lodash";
import { useTranslation } from "react-i18next";

export type SupportedLanguages = "en-US" | "pt-BR";

type LangProp = "enUs" | "ptBr";

type UseI18n = {
  handleSwitchLanguage: () => void;
  langProp: LangProp;
  language: SupportedLanguages;
  oppositeLanguage: SupportedLanguages;
  t: ReturnType<typeof useTranslation>["t"];
};

export const useI18n = (): UseI18n => {
  const { t } = useTranslation();

  const language = i18n.language as SupportedLanguages;
  const langProp = _.camelCase(language.replace("-", "")) as LangProp;

  const oppositeLanguage: SupportedLanguages =
    language === "en-US" ? "pt-BR" : "en-US";

  const handleSwitchLanguage = (): void => {
    i18n.changeLanguage(oppositeLanguage);
  };

  return {
    handleSwitchLanguage,
    langProp,
    language,
    oppositeLanguage,
    t,
  };
};
