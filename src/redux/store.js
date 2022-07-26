import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import usersReducer from "./users/reducer";
import fixedEventsReducer from "./fixedEvents/reducer";
import accountEventsReducer from "./accountEvents/reducer";

const reducer = combineReducers({
  usersState: usersReducer,
  fixedEventsState: fixedEventsReducer,
  accountEventsState: accountEventsReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
