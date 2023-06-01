import { createSlice } from "@reduxjs/toolkit";

export const investSlice = createSlice({
  name: "invest",
  initialState: {
    current: 0,
  },
  reducers: {
    setCurrentInvest: (state, action) => {
      state.current = action.payload;
    },
    incCurrentInvest: (state, action) => {
      state.current += action.payload;
    },
    decCurrentInvest: (state, action) => {
      state.current -= action.payload;
    },
  },
});

export const { setCurrentInvest, incCurrentInvest, decCurrentInvest } =
  investSlice.actions;

export default investSlice.reducer;
