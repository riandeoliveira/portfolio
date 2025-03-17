import { type Dispatch, type SetStateAction, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import * as yup from "yup";

export type AppMode = "quality" | "performance";

export const appModeSchema = yup
  .string()
  .oneOf(["quality", "performance"])
  .required();

type UseAppMode = {
  appMode: AppMode;
  setAppMode: Dispatch<SetStateAction<AppMode | undefined>>;
  toggleMode: () => void;
};

export const useAppMode = (): UseAppMode => {
  const [appMode, setAppMode] = useLocalStorage<AppMode>("app_mode", "quality");

  const toggleMode = (): void => {
    setAppMode((prevMode) =>
      prevMode === "quality" ? "performance" : "quality",
    );
  };

  useEffect(() => {
    const validateAppMode = async (): Promise<void> => {
      try {
        await appModeSchema.validate(appMode);
      } catch {
        setAppMode("quality");
      }
    };

    validateAppMode();
  }, [appMode, setAppMode]);

  return {
    appMode,
    setAppMode,
    toggleMode,
  };
};
