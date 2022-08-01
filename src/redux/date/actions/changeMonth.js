import ACTION_TYPES from "./constants/actionTypes";

const changeMonthAction = (month) => ({
  type: ACTION_TYPES.CHANGE_MONTH,
  payload: { month },
});

export const changeMonth = (month) => async (dispatch) => {
  dispatch(changeMonthAction(month));
};
