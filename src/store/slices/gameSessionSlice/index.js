import { createSlice } from "@reduxjs/toolkit";

export const gameSessionSlice = createSlice({
  name: "gameSession",
  initialState: {
    id: null,
    coefficientUp: null,
    coefficientDown: null,
    gamersUp: [],
    gamersDown: [],
  },
  reducers: {
    setGameSession: (state, action) => {
      state.id = action.payload.id;
      state.coefficientUp = action.payload.coefficientUp;
      state.coefficientDown = action.payload.coefficientDown;
      state.gamersUp = action.payload.gamersUp;
      state.gamersDown = action.payload.gamersDown;
    },
    setGamers: (state, action) => {
      state.gamersUp.push(...action.payload);
      state.gamersDown.push(...action.payload);
    },
  },
});

export const { setGamers, setGameSession } = gameSessionSlice.actions;

export default gameSessionSlice.reducer;
