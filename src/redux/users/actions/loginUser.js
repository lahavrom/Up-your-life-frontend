import ACTION_TYPES from "./constants/actionTypes";
import usersService from "../../../services/usersService";
import { STORAGE_KEYS } from "../../../helpers/constants";

const loginUserAction = () => ({
  type: ACTION_TYPES.LOGIN_USER,
});

const loginUserActionSuccess = (user) => ({
  type: ACTION_TYPES.LOGIN_USER_SUCCESS,
  payload: { user },
});

const loginUserActionFail = (errorMessage) => ({
  type: ACTION_TYPES.LOGIN_USER_FAIL,
  payload: { errorMessage },
});

export const loginUser = (values) => async (dispatch) => {
  try {
    dispatch(loginUserAction());
    const { token, user } = await usersService.loginUser(values);
    localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
    dispatch(loginUserActionSuccess(user));
  } catch ({ message }) {
    dispatch(loginUserActionFail(message));
  }
};
