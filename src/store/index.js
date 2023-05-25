import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice/index.js";
import gamersReducer from "./slices/gamersSlice/index.js";

export default configureStore({
  reducer: {
    user: userReducer,
    gamers: gamersReducer,
  },
});
