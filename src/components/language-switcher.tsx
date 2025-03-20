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
    <Tooltip title={legend} className="text-zinc-50">
      <button
        type="button"
        aria-label={legend}
        onClick={handleSwitchLanguage}
        className="fixed top-24 right-[-2px] z-50 rounded-s-xl cursor-pointer"
      >
        <BaseIcon name={iconNameKeyMap[language]} className="rounded-s-xl" />
      </button>
    </Tooltip>
  );
};
