import ACTION_TYPES from "./constants/actionTypes";
import usersService from "../../../services/usersService";

const fetchUserAction = () => ({
  type: ACTION_TYPES.FETCH_USER,
});

const fetchUserActionSuccess = (user) => ({
  type: ACTION_TYPES.FETCH_USER_SUCCESS,
  payload: { user },
});

const fetchUserActionFail = (errorMessage) => ({
  type: ACTION_TYPES.FETCH_USER_FAIL,
  payload: { errorMessage },
});

export const fetchUser = () => async (dispatch) => {
  try {
    dispatch(fetchUserAction());
    const user = await usersService.fetchUser();
    dispatch(fetchUserActionSuccess(user));
  } catch ({ message }) {
    dispatch(fetchUserActionFail(message));
  }
};
