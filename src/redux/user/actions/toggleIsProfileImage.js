import ACTION_TYPES from "./constants/actionTypes";
import { SUCCESS_MESSAGES } from "../../../helpers/constants";

const toggleIsProfileImageAction = (isProfileImage) => ({
  type: ACTION_TYPES.TOGGLE_IS_PROFILE_IMAGE,
  payload: {
    isProfileImage,
    successMessage: SUCCESS_MESSAGES.UPDATE_USER_PROFILE_IMAGE,
  },
});

export const toggleIsProfileImage = (isProfileImage) => async (dispatch) => {
  dispatch(toggleIsProfileImageAction(isProfileImage));
};
