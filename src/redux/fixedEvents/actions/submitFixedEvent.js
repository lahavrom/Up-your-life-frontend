import ACTION_TYPES from "./constants/actionTypes";
import fixedEventsService from "../../../services/fixedEventsService";

const submitFixedEventAction = () => ({
  type: ACTION_TYPES.SUBMIT_FIXED_EVENT,
});

const submitFixedEventActionSuccess = (fixedEvent, successMessage) => ({
  type: ACTION_TYPES.SUBMIT_FIXED_EVENT_SUCCESS,
  payload: { fixedEvent, successMessage },
});

const submitFixedEventActionFail = (errorMessage) => ({
  type: ACTION_TYPES.SUBMIT_FIXED_EVENT_FAIL,
  payload: { errorMessage },
});

export const submitFixedEvent = (values) => async (dispatch, getState) => {
  const { uId } = getState().usersState.user;
  try {
    dispatch(submitFixedEventAction());
    const fixedEvent = await fixedEventsService.submitFixedEvent({
      uId,
      ...values,
    });
    const successMessage = "Success!";
    dispatch(submitFixedEventActionSuccess(fixedEvent, successMessage));
  } catch ({ message }) {
    dispatch(submitFixedEventActionFail(message));
  }
};
