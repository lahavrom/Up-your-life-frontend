import ACTION_TYPES from "./constants/actionTypes";
import { removeAuthToken } from "../../../helpers/authTokenUtils";

const logoutUserAction = () => ({
  type: ACTION_TYPES.LOGOUT_USER,
});

export const logoutUser = () => async (dispatch) => {
  removeAuthToken();
  dispatch(logoutUserAction());
};
