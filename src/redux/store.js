import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "./reservationsSlice";

const loadState = () => {
  try {
    const data = localStorage.getItem("reduxState");
    return data ? JSON.parse(data) : undefined;
  } catch {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    localStorage.setItem("reduxState", JSON.stringify(state));
  } catch {}
};

export const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState({
    reservations: store.getState().reservations,
  });
});
