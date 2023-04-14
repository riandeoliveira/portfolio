import { SectionType } from "types";
import { State } from "types/state";
import { create } from "zustand";

export const useSectionStore = create<State.Section>((set) => {
  return {
    name: "about_me",

    select(name: SectionType): void {
      set({
        name,
      });
    },
  };
});
