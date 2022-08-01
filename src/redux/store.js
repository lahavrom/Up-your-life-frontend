import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import dateReducer from "./date/reducer";
import usersReducer from "./users/reducer";
import transactionsReducer from "./transactions/reducer";

const reducer = combineReducers({
  dateState: dateReducer,
  usersState: usersReducer,
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
