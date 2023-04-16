import { ModalType } from "types";
import { State } from "types/state";
import { create } from "zustand";

export const useModalStore = create<State.Modal>((set) => {
  return {
    technology: { opened: false },

    close(modal: ModalType): void {
      set((state) => ({
        [modal]: { ...state[modal], opened: false },
      }));
    },

    open(modal: ModalType): void {
      set((state) => ({
        [modal]: { ...state[modal], opened: true },
      }));
    },
  };
});
