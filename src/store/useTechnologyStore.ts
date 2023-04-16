import { TechnologyType } from "types";
import { State } from "types/state";
import { create } from "zustand";

export const useTechnologyStore = create<State.Technology>((set) => {
  return {
    technology: {} as Omit<TechnologyType, "id">,

    setTechnology(technology: Omit<TechnologyType, "id">): void {
      set({
        technology,
      });
    },
  };
});
