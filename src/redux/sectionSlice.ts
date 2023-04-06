import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "types/redux";
import type { SectionType } from "types/section";

export interface SectionState {
  current: SectionType;
}

const initialState: SectionState = {
  current: "about_me",
};

export const sectionSlice = createSlice({
  name: "section",
  initialState,
  reducers: {
    setSection: (
      state: SectionState,
      action: PayloadAction<SectionType>
    ): void => {
      state.current = action.payload;
    },
  },
});

export const selectSection = (state: RootState) => state.sectionReducer;

export const { setSection } = sectionSlice.actions;

export default sectionSlice.reducer;
