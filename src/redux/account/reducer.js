import ACTION_TYPES from "./actions/constants/actionTypes";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
  users: [],
};

const accountReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.FETCH_ACCOUNT_USERS: {
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
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

    case ACTION_TYPES.FETCH_ACCOUNT_USERS_FAIL: {
      const { errorMessage } = payload;
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
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
