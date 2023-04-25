import { State } from "types/state";
import { create } from "zustand";

export const usePlayerStore = create<State.Player>((set) => {
  return {
    lofiRadio: { playing: false },
    synthwaveRadio: { playing: false },

    pauseLofiRadio(): void {
      set({
        lofiRadio: { playing: false },
      });
    },

    pauseSynthwaveRadio(): void {
      set({
        synthwaveRadio: { playing: false },
      });
    },

    playLofiRadio: () => {
      set({
        lofiRadio: { playing: true },
        synthwaveRadio: { playing: false },
      });
    },

    playSynthwaveRadio(): void {
      set({
        lofiRadio: { playing: false },
        synthwaveRadio: { playing: true },
      });
    },
  };
});
