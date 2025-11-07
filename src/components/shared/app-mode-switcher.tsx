import { Icon } from "@/assets/icons";
import { useAppMode } from "@/hooks/use-app-mode";
import { useI18n } from "@/hooks/use-i18n";
import { useToast } from "@/hooks/use-toast";
import { Tooltip } from "./tooltip";

export const AppModeSwitcher = () => {
  const toast = useToast();

  const { t } = useI18n();
  const { appMode, toggleAppMode } = useAppMode();

  const handleSwitchAppMode = () => {
    const message = appMode === "quality" ? t("enabled") : t("disabled");

    toast.message(`${t("performance_mode")} ${message}`);

    toggleAppMode();
  };

  const legend =
    appMode === "quality"
      ? `${t("enable")} ${t("performance_mode")}`
      : `${t("disable")} ${t("performance_mode")}`;

  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <button
          type="button"
          aria-label={legend}
          onClick={handleSwitchAppMode}
          className="bg-linear-to-r from-indigo-500 to-purple-500 fixed top-24 left-0 p-1 z-50 flex items-center justify-center rounded-e-xl text-zinc-50 cursor-pointer"
        >
          <Icon.CgPerformance className="w-6 h-6" />
        </button>
      </Tooltip.Trigger>
      <Tooltip.Content>
        <span>{legend}</span>
      </Tooltip.Content>
    </Tooltip.Root>
  );
};
