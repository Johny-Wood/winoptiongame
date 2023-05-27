import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice/index.js";
import gameSessionReducer from "./slices/gameSessionSlice/index.js";
import investReducer from "./slices/investSlice/index.js";

export default configureStore({
  reducer: {
    user: userReducer,
    invest: investReducer,
    gameSession: gameSessionReducer,
  },
});
