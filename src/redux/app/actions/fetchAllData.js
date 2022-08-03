import ACTION_TYPES from "./constants/actionTypes";
import { fetchAccountUsers } from "../../account/actions/fetchAccountUsers";
import { fetchAllFixedTransactions } from "../../transactions/actions/fetchAllFixedTransactions";
import { fetchAllAccountTransactions } from "../../transactions/actions/fetchAllAccountTransactions";

const fetchAllDataAction = () => ({
  type: ACTION_TYPES.FETCH_ALL_DATA,
});

const fetchAllDataActionFinish = () => ({
  type: ACTION_TYPES.FETCH_ALL_DATA_FINISH,
});

export const fetchAllData = () => async (dispatch) => {
  dispatch(fetchAllDataAction());
  await Promise.all([
    dispatch(fetchAccountUsers()),
    dispatch(fetchAllFixedTransactions()),
    dispatch(fetchAllAccountTransactions()),
  ]);
  dispatch(fetchAllDataActionFinish());
};
