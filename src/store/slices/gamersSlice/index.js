import { createSlice } from "@reduxjs/toolkit";

export const gamersSlice = createSlice({
  name: "gamers",
  initialState: [],
  reducers: {
    setGamers: (state, action) => {
      state.push(...action.payload);
    },
  },
});

export const { setGamers } = gamersSlice.actions;

export default gamersSlice.reducer;
