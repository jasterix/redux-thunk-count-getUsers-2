import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from "./Reducer";
import userReducer from "./UserReducer";

const rootReducer = combineReducers({ count: reducer, users: userReducer });

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
export default store;
