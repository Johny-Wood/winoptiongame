import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userId: null,
    userAvatar: null,
    wallet: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.userId = action.payload.userId;
      state.userAvatar = action.payload.userAvatar;
    },
    setWallet: (state, action) => {
      state.wallet = action.payload;
    },
  },
});

export const { setUser, setWallet } = userSlice.actions;

export default userSlice.reducer;
