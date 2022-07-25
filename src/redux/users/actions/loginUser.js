import ACTION_TYPES from "./constants/actionTypes";
import usersService from "../../../services/usersService";

const loginUserAction = () => ({
  type: ACTION_TYPES.LOGIN_USER,
});

const loginUserActionSuccess = (user, successMessage) => ({
  type: ACTION_TYPES.LOGIN_USER_SUCCESS,
  payload: { user, successMessage },
});

const loginUserActionFail = (errorMessage) => ({
  type: ACTION_TYPES.LOGIN_USER_FAIL,
  payload: { errorMessage },
});

// values -> email, password
export const loginUser = (values) => async (dispatch) => {
  try {
    dispatch(loginUserAction());
    const user = await usersService.loginUser(values);
    const successMessage = "Success!";
    dispatch(loginUserActionSuccess(user, successMessage));
  } catch ({ message }) {
    dispatch(loginUserActionFail(message));
  }
};
