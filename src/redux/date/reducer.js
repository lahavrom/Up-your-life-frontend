import ACTION_TYPES from "./actions/constants/actionTypes";
import { getCurrentMonth } from "../../helpers/dateTimeUtils";

const initialState = {
  month: getCurrentMonth(),
};

const dateReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.CHANGE_MONTH: {
      const { month } = payload;
      return {
        ...state,
        month,
      };
    }

    default: {
      return state;
    }
  }
};

export default dateReducer;
