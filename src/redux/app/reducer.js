import ACTION_TYPES from "./actions/constants/actionTypes";

const initialState = {
  isLoading: false,
  isReady: false,
};

const appReducer = (state = initialState, { type }) => {
  switch (type) {
    case ACTION_TYPES.FETCH_ALL_DATA: {
      return {
        ...state,
        isLoading: true,
        isReady: false,
      };
    }

    case ACTION_TYPES.FETCH_ALL_DATA_FINISH: {
      return {
        ...state,
        isLoading: false,
        isReady: true,
      };
    }

    default: {
      return state;
    }
  }
};

export default appReducer;
