import ACTION_TYPES from "./constants/actionTypes";
import { STORAGE_KEYS } from "../../../helpers/constants";
import { fetchUser } from "../../users/actions/fetchUser";
import { fetchAllFixedEvents } from "../../fixedEvents/actions/fetchAllFixedEvents";
import { fetchAllAccountEvents } from "../../accountEvents/actions/fetchAllAccountEvents";

const initializeAction = () => ({
  type: ACTION_TYPES.INITIALIZE,
});

const initializeActionFinish = () => ({
  type: ACTION_TYPES.INITIALIZE_FINISH,
});

const initializeActionFail = () => ({
  type: ACTION_TYPES.INITIALIZE_FAIL,
});

export const initialize = () => async (dispatch) => {
  dispatch(initializeAction());
  const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
  if (!token) return dispatch(initializeActionFail());
  await Promise.all([dispatch(fetchUser())]);
  await Promise.all([
    dispatch(fetchAllFixedEvents()),
    dispatch(fetchAllAccountEvents()),
  ]);
  dispatch(initializeActionFinish());
};
