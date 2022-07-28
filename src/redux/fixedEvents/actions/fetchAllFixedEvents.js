import ACTION_TYPES from "./constants/actionTypes";
import fixedEventsService from "../../../services/fixedEventsService";

const fetchAllFixedEventsAction = () => ({
  type: ACTION_TYPES.FETCH_ALL_FIXED_EVENTS,
});

const fetchAllFixedEventsActionSuccess = (fixedEvents) => ({
  type: ACTION_TYPES.FETCH_ALL_FIXED_EVENTS_SUCCESS,
  payload: { fixedEvents },
});

const fetchAllFixedEventsActionFail = (errorMessage) => ({
  type: ACTION_TYPES.FETCH_ALL_FIXED_EVENTS_FAIL,
  payload: { errorMessage },
});

export const fetchAllFixedEvents = () => async (dispatch, getState) => {
  const { uId } = getState().usersState.user;
  try {
    dispatch(fetchAllFixedEventsAction());
    const fixedEvents = await fixedEventsService.fetchAllFixedEvents(uId);
    dispatch(fetchAllFixedEventsActionSuccess(fixedEvents));
  } catch ({ message }) {
    dispatch(fetchAllFixedEventsActionFail(message));
  }
};
