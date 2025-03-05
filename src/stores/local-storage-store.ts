import { localStorageExtension } from "@/extensions/local-storage-extension";
import { makeAutoObservable } from "mobx";

export type ModeType = "quality" | "performance";

class LocalStorageStore {
  private mode: ModeType = "quality";

  public constructor() {
    this.onChangeStorage();
    this.syncMode();

    makeAutoObservable(this);
  }

  public get isQualityMode(): boolean {
    return this.mode === "quality";
  }

  public get isPerformanceMode(): boolean {
    return this.mode === "performance";
  }

  private onChangeStorage = (): void => {
    window.addEventListener("storage", this.syncMode);
  };

  private syncMode = (): void => {
    const mode: ModeType | null =
      localStorageExtension.getItem<ModeType>("mode");
    const modeList: ModeType[] = ["quality", "performance"];

    if (mode && modeList.includes(mode)) {
      this.mode = mode;

      return;
    }

    localStorageExtension.clear();
    localStorageExtension.setItem<ModeType>("mode", "quality");
  };

  public toggleMode = (): void => {
    const newMode: ModeType =
      this.mode === "quality" ? "performance" : "quality";

    localStorageExtension.setItem<ModeType>("mode", newMode);

    this.syncMode();
  };
}

export const localStorageStore = new LocalStorageStore();
