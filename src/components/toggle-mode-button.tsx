import { Icon } from "@/assets/icons";
import { localStorageStore } from "@/stores/local-storage-store";
import { observer } from "mobx-react-lite";
import { type ReactElement } from "react";
import { toast } from "react-toastify";
import { Tooltip } from "./tooltip";

export const SwitchModeButton = observer((): ReactElement => {
  const handleButtonClick = (): void => {
    const message: string = localStorageStore.isQualityMode ? "Ativado" : "Desativado";

    toast.info(`Modo Performance ${message}`);

    localStorageStore.toggleMode();
  };

  return (
    <Tooltip
      title={
        localStorageStore.isQualityMode ? "Ativar Modo Performance" : "Desativar Modo Performance"
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
