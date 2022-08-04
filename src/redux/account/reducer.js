import ACTION_TYPES from "./actions/constants/actionTypes";

const initialState = {
  isLoading: false,
  isSuccess: false,
  successMessage: "",
  isError: false,
  errorMessage: "",
  users: [],
};

const accountReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.FETCH_ACCOUNT_USERS:
    case ACTION_TYPES.ADD_USER_TO_ACCOUNT: {
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        successMessage: "",
        isError: false,
        errorMessage: "",
      };
    }

    case ACTION_TYPES.FETCH_ACCOUNT_USERS_SUCCESS: {
      const { users } = payload;
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
        errorMessage: "",
        users,
      };
    }

    case ACTION_TYPES.ADD_USER_TO_ACCOUNT_SUCCESS: {
      const { successMessage } = payload;
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        successMessage,
        isError: false,
        errorMessage: "",
      };
    }

    case ACTION_TYPES.FETCH_ACCOUNT_USERS_FAIL:
    case ACTION_TYPES.ADD_USER_TO_ACCOUNT_FAIL: {
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

export default accountReducer;
