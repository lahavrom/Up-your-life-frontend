import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import appReducer from "./app/reducer";
import dateReducer from "./date/reducer";
import accountReducer from "./account/reducer";
import userReducer from "./user/reducer";
import transactionsReducer from "./transactions/reducer";

const reducer = combineReducers({
  appState: appReducer,
  dateState: dateReducer,
  accountState: accountReducer,
  userState: userReducer,
  transactionsState: transactionsReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
