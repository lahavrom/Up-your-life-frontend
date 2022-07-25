import ACTION_TYPES from "./constants/actionTypes";
import usersService from "../../../services/usersService";

const registerUserAction = () => ({
  type: ACTION_TYPES.REGISTER_USER,
});

const registerUserActionSuccess = (user, successMessage) => ({
  type: ACTION_TYPES.REGISTER_USER_SUCCESS,
  payload: { user, successMessage },
});

const registerUserActionFail = (errorMessage) => ({
  type: ACTION_TYPES.REGISTER_USER_FAIL,
  payload: { errorMessage },
});

// values -> firstName, lastName, email, password
export const registerUser = (values) => async (dispatch) => {
  try {
    dispatch(registerUserAction());
    const user = await usersService.registerUser(values);
    const successMessage = "Success!";
    dispatch(registerUserActionSuccess(user, successMessage));
  } catch ({ message }) {
    dispatch(registerUserActionFail(message));
  }
};
