import ACTION_TYPES from "./constants/actionTypes";
import usersService from "../../../services/usersService";
import { STORAGE_KEYS } from "../../../helpers/constants";

const registerUserAction = () => ({
  type: ACTION_TYPES.REGISTER_USER,
});

const registerUserActionSuccess = (user) => ({
  type: ACTION_TYPES.REGISTER_USER_SUCCESS,
  payload: { user },
});

const registerUserActionFail = (errorMessage) => ({
  type: ACTION_TYPES.REGISTER_USER_FAIL,
  payload: { errorMessage },
});

export const registerUser = (values) => async (dispatch) => {
  try {
    dispatch(registerUserAction());
    const { token, user } = await usersService.registerUser(values);
    localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
    dispatch(registerUserActionSuccess(user));
  } catch ({ message }) {
    dispatch(registerUserActionFail(message));
  }
};
