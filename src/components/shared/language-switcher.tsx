import { Icon } from "@/assets/icons";
import { useI18n } from "@/hooks/use-i18n";
import { cn } from "@/utils/cn";
import { Tooltip } from "./tooltip";

type LanguageSwitcherProps = {
  className?: string;
};

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
  const { t, changeLanguageTo, language } = useI18n();

  const oppositeLanguage = language === "en-US" ? "pt-BR" : "en-US";
  const legend = `${t("change_language_to")} ${oppositeLanguage}`;

  const handleSwitchLanguage = () => {
    changeLanguageTo(oppositeLanguage);
  };

  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <button
          type="button"
          aria-label={legend}
          onClick={handleSwitchLanguage}
          className={cn(
            "fixed top-24 -right-0.5 z-40 rounded-s-xl cursor-pointer",
            className,
          )}
        >
          {language === "en-US" && <Icon.Usa className="rounded-s-xl" />}
          {language === "pt-BR" && <Icon.Brazil className="rounded-s-xl" />}
        </button>
      </Tooltip.Trigger>
      <Tooltip.Content>
        <span>{legend}</span>
      </Tooltip.Content>
    </Tooltip.Root>
  );
};
