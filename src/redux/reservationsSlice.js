import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reservations: [],
  currentReservation: null,
};

const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    addReservation: (state, action) => {
      state.reservations.push(action.payload);
    },

    updateReservation: (state, action) => {
      const index = state.reservations.findIndex(
        r => r.id === action.payload.id
      );
      if (index !== -1) {
        state.reservations[index] = action.payload;
      }
      state.currentReservation = null;
    },

    deleteReservation: (state, action) => {
      state.reservations = state.reservations.filter(
        r => r.id !== action.payload
      );
    },

    setCurrentReservation: (state, action) => {
      state.currentReservation = action.payload;
    },
  },
});

export const {
  addReservation,
  updateReservation,
  deleteReservation,
  setCurrentReservation,
} = reservationsSlice.actions;

export default reservationsSlice.reducer;
