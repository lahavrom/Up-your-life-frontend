import ACTION_TYPES from "./constants/actionTypes";
import accountsService from "../../../services/accountsService";

const fetchAccountUsersAction = () => ({
  type: ACTION_TYPES.FETCH_ACCOUNT_USERS,
});

const fetchAccountUsersActionSuccess = (users) => ({
  type: ACTION_TYPES.FETCH_ACCOUNT_USERS_SUCCESS,
  payload: { users },
});

const fetchAccountUsersActionFail = (errorMessage) => ({
  type: ACTION_TYPES.FETCH_ACCOUNT_USERS_FAIL,
  payload: { errorMessage },
});

export const fetchAccountUsers = () => async (dispatch, getState) => {
  const { accountId } = getState().userState.user;
  try {
    dispatch(fetchAccountUsersAction());
    const users = await accountsService.fetchAccountUsers(accountId);
    dispatch(fetchAccountUsersActionSuccess(users));
  } catch ({ message }) {
    dispatch(fetchAccountUsersActionFail(message));
  }
};
