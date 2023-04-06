import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sectionReducer from "./sectionSlice";

const rootReducer = combineReducers({
  sectionReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
