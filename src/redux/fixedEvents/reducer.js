import ACTION_TYPES from "./actions/constants/actionTypes";

const initialState = {
  isLoading: false,
  isSuccess: false,
  successMessage: "",
  isError: false,
  errorMessage: "",
  fixedEvents: [],
};

const fixedEventsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.FETCH_ALL_FIXED_EVENTS: {
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        successMessage: "",
        isError: false,
        errorMessage: "",
      };
    }

    case ACTION_TYPES.FETCH_ALL_FIXED_EVENTS_SUCCESS: {
      const { fixedEvents } = payload;
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        successMessage: "",
        isError: false,
        errorMessage: "",
        fixedEvents,
      };
    }

    case ACTION_TYPES.FETCH_ALL_FIXED_EVENTS_FAIL: {
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

export default fixedEventsReducer;
