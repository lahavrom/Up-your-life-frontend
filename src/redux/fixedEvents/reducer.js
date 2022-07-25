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
    case ACTION_TYPES.SUBMIT_FIXED_EVENT:
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

    case ACTION_TYPES.SUBMIT_FIXED_EVENT_SUCCESS: {
      const { fixedEvent, successMessage } = payload;
      return {
        ...state,
        ...onRequestSuccess(successMessage),
        fixedEvents: [...state.fixedEvents, fixedEvent],
      };
    }

    case ACTION_TYPES.FETCH_ALL_FIXED_EVENTS_SUCCESS: {
      const { fixedEvents } = payload;
      return {
        ...state,
        ...onRequestSuccess(),
        fixedEvents,
      };
    }

    case ACTION_TYPES.SUBMIT_FIXED_EVENT_FAIL:
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

function onRequestSuccess(successMessage = "") {
  return {
    isLoading: false,
    isSuccess: true,
    successMessage,
    isError: false,
    errorMessage: "",
  };
}

export default fixedEventsReducer;
