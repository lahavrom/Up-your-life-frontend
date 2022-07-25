import ACTION_TYPES from "./actions/constants/actionTypes";

const initialState = {
  isLoading: false,
  isSuccess: false,
  successMessage: "",
  isError: false,
  errorMessage: "",
  accountEvents: [],
};

const accountEventsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.FETCH_ALL_ACCOUNT_EVENTS: {
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        successMessage: "",
        isError: false,
        errorMessage: "",
      };
    }

    case ACTION_TYPES.FETCH_ALL_ACCOUNT_EVENTS_SUCCESS: {
      const { accountEvents } = payload;
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        successMessage: "",
        isError: false,
        errorMessage: "",
        accountEvents,
      };
    }

    case ACTION_TYPES.FETCH_ALL_ACCOUNT_EVENTS_FAIL: {
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

export default accountEventsReducer;
