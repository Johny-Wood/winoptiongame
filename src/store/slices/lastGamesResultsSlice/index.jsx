import { createSlice } from "@reduxjs/toolkit";

export const lastGamesResultsSlice = createSlice({
  name: "lastGamesResultsSlice",
  initialState: [],
  reducers: {
    setLastGamesResults: (state, action) => {
      state.push(...action.payload);
    },
  },
});

export const { setLastGamesResults } = lastGamesResultsSlice.actions;

export default lastGamesResultsSlice.reducer;
