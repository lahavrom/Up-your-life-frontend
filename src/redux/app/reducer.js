import ACTION_TYPES from "./actions/constants/actionTypes";

const initialState = {
  isLoading: true,
  isReady: false,
};

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.INITIALIZE: {
      return state;
    }

    case ACTION_TYPES.INITIALIZE_FINISH: {
      return {
        ...state,
        isLoading: false,
        isReady: true,
      };
    }

    case ACTION_TYPES.INITIALIZE_FAIL: {
      return {
        ...state,
        isLoading: false,
        isReady: false,
      };
    }

    default: {
      return state;
    }
  }
};

export default appReducer;
