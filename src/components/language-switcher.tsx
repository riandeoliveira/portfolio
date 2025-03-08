import { Icon } from "@/assets/icons";
import { useI18n } from "@/hooks/use-i18n";
import type { ReactElement } from "react";
import { Tooltip } from "./tooltip";

export const LanguageSwitcher = (): ReactElement => {
  const { t, oppositeLanguage, handleSwitchLanguage, language } = useI18n();

  const CountryFlagIcon = {
    "en-US": <Icon.USA className="rounded-s-xl" />,
    "pt-BR": <Icon.Brazil className="rounded-s-xl" />,
  };

  const legend = `${t("change_language_to")} ${oppositeLanguage}`;

  return (
    <Tooltip title={legend}>
      <button
        type="button"
        aria-label={legend}
        onClick={handleSwitchLanguage}
        className="bg-gradient-to-r from-indigo-500 to-purple-500 fixed top-24 right-0 p-1 z-50 flex items-center justify-center rounded-s-xl"
      >
        {CountryFlagIcon[language]}
      </button>
    </Tooltip>
  );
};
