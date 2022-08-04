import ACTION_TYPES from "./constants/actionTypes";
import accountsService from "../../../services/accountsService";
import { SUCCESS_MESSAGES } from "../../../helpers/constants";

const addUserToAccountAction = () => ({
  type: ACTION_TYPES.ADD_USER_TO_ACCOUNT,
});

const addUserToAccountActionSuccess = () => ({
  type: ACTION_TYPES.ADD_USER_TO_ACCOUNT_SUCCESS,
  payload: { successMessage: SUCCESS_MESSAGES.ADD_USER_TO_ACCOUNT },
});

const addUserToAccountActionFail = (errorMessage) => ({
  type: ACTION_TYPES.ADD_USER_TO_ACCOUNT_FAIL,
  payload: { errorMessage },
});

export const addUserToAccount = (email) => async (dispatch, getState) => {
  const { accountId } = getState().userState.user;
  try {
    dispatch(addUserToAccountAction());
    await accountsService.addUserToAccount({ accountId, email });
    dispatch(addUserToAccountActionSuccess());
  } catch ({ message }) {
    dispatch(addUserToAccountActionFail(message));
  }
};
