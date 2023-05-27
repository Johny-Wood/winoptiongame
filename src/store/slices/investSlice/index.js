import { createSlice } from "@reduxjs/toolkit";

export const investSlice = createSlice({
  name: "invest",
  initialState: {
    current: null,
  },
  reducers: {
    setCurrentInvest: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { setCurrentInvest } = investSlice.actions;

export default investSlice.reducer;
