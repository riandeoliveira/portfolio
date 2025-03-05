import type {
  ILocalStorageExtension,
  LocalStorageKeys,
} from "@/types/local-storage-extension";

export class LocalStorageExtension implements ILocalStorageExtension {
  private readonly storage: Storage = window.localStorage;

  public clear(): void {
    this.storage.clear();
  }

  public getItem<TValue>(key: LocalStorageKeys): TValue | null {
    const storageItem: string | null = this.storage.getItem(key);

    try {
      if (storageItem) return JSON.parse(storageItem);

      return null;
    } catch {
      return null;
    }
  }

  public setItem<T>(key: LocalStorageKeys, value: T): void {
    this.storage.setItem(key, JSON.stringify(value));
  }
}

export const localStorageExtension = new LocalStorageExtension();
