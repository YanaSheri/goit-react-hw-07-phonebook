// import { createStore, combineReducers } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";
import contactReduce from "./reducer";

import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "items",
  storage,
  whitelist: ["items"],
};

const logger = createLogger({
  collapsed: (getState, action, logEntry) =>
    !logEntry.error,
  timestamp: false,
});

const store = configureStore({
  reducer: {
    contacts: persistReducer(
      persistConfig,
      contactReduce
    ),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }).concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});

const persistor = persistStore(store);


// const rootReduce = combineReducers({
//   contacts: contactReduce,
// });

// const store = createStore(
//   rootReduce,
//   devToolsEnhancer()
// );

// export default store;


export { store, persistor };