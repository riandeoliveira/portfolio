import { Icon } from "@/assets/icons";
import { useI18n } from "@/hooks/use-i18n";
import { localStorageStore } from "@/stores/local-storage-store";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { toast } from "react-toastify";
import { Tooltip } from "./tooltip";

export const SwitchModeButton = observer((): ReactElement => {
  const { t } = useI18n();

  const handleButtonClick = (): void => {
    const message: string = localStorageStore.isQualityMode
      ? t("enabled")
      : t("disabled");

    toast.info(`${t("performance_mode")} ${message}`);

    localStorageStore.toggleMode();
  };

  return (
    <Tooltip
      title={
        localStorageStore.isQualityMode
          ? `${t("enable")} ${t("performance_mode")}`
          : `${t("disable")} ${t("performance_mode")}`
      }
    >
      <button
        type="button"
        onClick={handleButtonClick}
        className="bg-gradient-to-r from-indigo-500 to-purple-500 fixed top-24 left-0 p-1 z-50 flex items-center justify-center rounded-e-xl"
      >
        <Icon.CgPerformance size={24} />
      </button>
    </Tooltip>
  );
});
