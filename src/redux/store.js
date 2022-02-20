import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import contactReduce from "./reducer";

const rootReduce = combineReducers({
  contacts: contactReduce,
});

const store = createStore(
  rootReduce,
  devToolsEnhancer()
);

export default store;