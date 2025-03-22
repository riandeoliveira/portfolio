import { useAppMode } from "@/hooks/use-app-mode";
import { useI18n } from "@/hooks/use-i18n";
import type { ReactElement } from "react";
import { toast } from "react-toastify";
import { BaseIcon } from "./base-icon";
import { Tooltip } from "./tooltip";

export const AppModeSwitcher = (): ReactElement => {
  const { t } = useI18n();
  const { appMode, toggleAppMode } = useAppMode();

  const handleButtonClick = (): void => {
    const message = appMode === "quality" ? t("enabled") : t("disabled");

    toast.info(`${t("performance_mode")} ${message}`);

    toggleAppMode();
  };

  const legend =
    appMode === "quality"
      ? `${t("enable")} ${t("performance_mode")}`
      : `${t("disable")} ${t("performance_mode")}`;

  return (
    <Tooltip title={legend} className="text-zinc-50">
      <button
        type="button"
        onClick={handleButtonClick}
        className="bg-gradient-to-r from-indigo-500 to-purple-500 fixed top-24 left-0 p-1 z-50 flex items-center justify-center rounded-e-xl text-zinc-50 cursor-pointer"
      >
        <BaseIcon name="cg-performance" className="w-6 h-6" />
      </button>
    </Tooltip>
  );
};
