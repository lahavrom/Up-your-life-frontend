import ACTION_TYPES from "./constants/actionTypes";
import accountEventsService from "../../../services/accountEventsService";

const submitAccountEventAction = () => ({
  type: ACTION_TYPES.SUBMIT_ACCOUNT_EVENT,
});

const submitAccountEventActionSuccess = (accountEvent, successMessage) => ({
  type: ACTION_TYPES.SUBMIT_ACCOUNT_EVENT_SUCCESS,
  payload: { accountEvent, successMessage },
});

const submitAccountEventActionFail = (errorMessage) => ({
  type: ACTION_TYPES.SUBMIT_ACCOUNT_EVENT_FAIL,
  payload: { errorMessage },
});

// values -> type, value, description, effectiveDate
export const submitAccountEvent = (values) => async (dispatch, getState) => {
  const { uId } = getState().usersState;
  try {
    dispatch(submitAccountEventAction());
    const accountEvent = await accountEventsService.submitAccountEvent({
      uId,
      ...values,
    });
    const successMessage = "Success!";
    dispatch(submitAccountEventActionSuccess(accountEvent, successMessage));
  } catch ({ message }) {
    dispatch(submitAccountEventActionFail(message));
  }
};
