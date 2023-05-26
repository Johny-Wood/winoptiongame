import { createSlice } from "@reduxjs/toolkit";

export const gamersSlice = createSlice({
  name: "gamers",
  initialState: {
    gamersUp: [],
    gamersDown: [],
  },
  reducers: {
    setGamers: (state, action) => {
      // state = action.payload;
      state.gamersUp.push(...action.payload);
      state.gamersDown.push(...action.payload);
    },
  },
});

export const { setGamers } = gamersSlice.actions;

export default gamersSlice.reducer;
