import ACTION_TYPES from "./constants/actionTypes";
import accountEventsService from "../../../services/accountEventsService";

const fetchAllAccountEventsAction = () => ({
  type: ACTION_TYPES.FETCH_ALL_ACCOUNT_EVENTS,
});

const fetchAllAccountEventsActionSuccess = (accountEvents) => ({
  type: ACTION_TYPES.FETCH_ALL_ACCOUNT_EVENTS_SUCCESS,
  payload: { accountEvents },
});

const fetchAllAccountEventsActionFail = (errorMessage) => ({
  type: ACTION_TYPES.FETCH_ALL_ACCOUNT_EVENTS_FAIL,
  payload: { errorMessage },
});

export const fetchAllAccountEvents = () => async (dispatch, getState) => {
  const { uId } = getState().usersState.user;
  try {
    dispatch(fetchAllAccountEventsAction());
    const accountEvents = await accountEventsService.fetchAllAccountEvents(uId);
    dispatch(fetchAllAccountEventsActionSuccess(accountEvents));
  } catch ({ message }) {
    dispatch(fetchAllAccountEventsActionFail(message));
  }
};
