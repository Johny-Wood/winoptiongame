import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice/index.js";
import gameSessionReducer from "./slices/gameSessionSlice/index.js";
import investReducer from "./slices/investSlice/index.js";
import lastGamesResultsReducer from "./slices/lastGamesResultsSlice/index.jsx";

export default configureStore({
  reducer: {
    user: userReducer,
    invest: investReducer,
    gameSession: gameSessionReducer,
    lastGamesResults: lastGamesResultsReducer,
  },
});
