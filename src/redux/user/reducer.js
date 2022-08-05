import ACTION_TYPES from "./actions/constants/actionTypes";

const initialState = {
  isLoading: false,
  isSuccess: false,
  successMessage: "",
  isError: false,
  errorMessage: "",
  user: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.REGISTER_USER:
    case ACTION_TYPES.LOGIN_USER:
    case ACTION_TYPES.FETCH_USER: {
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        successMessage: "",
        isError: false,
        errorMessage: "",
      };
    }

    case ACTION_TYPES.REGISTER_USER_SUCCESS:
    case ACTION_TYPES.LOGIN_USER_SUCCESS:
    case ACTION_TYPES.FETCH_USER_SUCCESS: {
      const { user } = payload;
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
        errorMessage: "",
        user,
      };
    }

    case ACTION_TYPES.LOGOUT_USER: {
      return initialState;
    }

    case ACTION_TYPES.TOGGLE_IS_PROFILE_IMAGE: {
      const { isProfileImage, successMessage } = payload;
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        successMessage,
        isError: false,
        errorMessage: "",
        user: {
          ...state.user,
          isProfileImage,
        },
      };
    }

    case ACTION_TYPES.REGISTER_USER_FAIL:
    case ACTION_TYPES.LOGIN_USER_FAIL:
    case ACTION_TYPES.FETCH_USER_FAIL: {
      const { errorMessage } = payload;
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        successMessage: "",
        isError: true,
        errorMessage,
      };
    }

    default: {
      return state;
    }
  }
};

export default userReducer;
