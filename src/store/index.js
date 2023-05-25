import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice/index.js";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
