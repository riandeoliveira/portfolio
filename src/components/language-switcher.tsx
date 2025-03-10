import { type SupportedLanguages, useI18n } from "@/hooks/use-i18n";
import type { IconName } from "@/types/icon";
import type { ReactElement } from "react";
import { BaseIcon } from "./base-icon";
import { Tooltip } from "./tooltip";

export const LanguageSwitcher = (): ReactElement => {
  const { t, oppositeLanguage, handleSwitchLanguage, language } = useI18n();

  const iconNameKeyMap: Record<SupportedLanguages, IconName> = {
    "en-US": "usa",
    "pt-BR": "brazil",
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
        <BaseIcon name={iconNameKeyMap[language]} className="rounded-s-xl" />
      </button>
    </Tooltip>
  );
};
