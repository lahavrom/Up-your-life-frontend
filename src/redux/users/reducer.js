import ACTION_TYPES from "./actions/constants/actionTypes";

const initialState = {
  isLoading: false,
  isSuccess: false,
  successMessage: "",
  isError: false,
  errorMessage: "",
  user: null,
};

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.REGISTER_USER:
    case ACTION_TYPES.LOGIN_USER: {
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
    case ACTION_TYPES.LOGIN_USER_SUCCESS: {
      const { user, successMessage } = payload;
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        successMessage,
        isError: false,
        errorMessage: "",
        user,
      };
    }

    case ACTION_TYPES.REGISTER_USER_FAIL:
    case ACTION_TYPES.LOGIN_USER_FAIL: {
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

export default usersReducer;
