import combineReducers from "./contactReducer";
import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
const logger = createLogger({
  collapsed: (getState, action, logEntry) =>
    !logEntry.error,
  timestamp: false,
});

const store = configureStore({
  reducer: {
    contacts: combineReducers,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
    .concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;