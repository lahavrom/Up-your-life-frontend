import ACTION_TYPES from "./constants/actionTypes";
import usersService from "../../../services/usersService";
import { setAuthToken } from "../../../helpers/authTokenUtils";

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
    setAuthToken(token);
    dispatch(registerUserActionSuccess(user));
  } catch ({ message }) {
    dispatch(registerUserActionFail(message));
  }
};
