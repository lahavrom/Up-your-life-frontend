import ACTION_TYPES from "./actions/constants/actionTypes";

const initialState = {
  isLoading: false,
  isFinish: false,
};

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.FETCH_ALL_DATA: {
      return {
        ...state,
        isLoading: true,
        isFinish: false,
      };
    }

    case ACTION_TYPES.FETCH_ALL_DATA_FINISH: {
      return {
        ...state,
        isLoading: false,
        isFinish: true,
      };
    }

    default: {
      return state;
    }
  }
};

export default appReducer;
