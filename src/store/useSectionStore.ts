import { SectionType } from "types";
import { State } from "types/state";
import { create } from "zustand";

export const useSectionStore = create<State.Section>((set) => {
  return {
    selected: "about_me",

    select(section: SectionType): void {
      set({
        selected: section,
      });
    },
  };
});
