import ACTION_TYPES from "./constants/actionTypes";
import accountTransactionsService from "../../../services/accountTransactionsService";

const fetchAllAccountTransactionsAction = () => ({
  type: ACTION_TYPES.FETCH_ALL_ACCOUNT_TRANSACTIONS,
});

const fetchAllAccountTransactionsActionSuccess = (transactions) => ({
  type: ACTION_TYPES.FETCH_ALL_ACCOUNT_TRANSACTIONS_SUCCESS,
  payload: {
    transactions,
  },
});

const fetchAllAccountTransactionsActionFail = (errorMessage) => ({
  type: ACTION_TYPES.FETCH_ALL_ACCOUNT_TRANSACTIONS_FAIL,
  payload: {
    errorMessage,
  },
});

export const fetchAllAccountTransactions = () => async (dispatch, getState) => {
  const { accountId } = getState().userState.user;
  try {
    dispatch(fetchAllAccountTransactionsAction());
    const transactions =
      await accountTransactionsService.fetchAllAccountTransactions(accountId);
    dispatch(fetchAllAccountTransactionsActionSuccess(transactions));
  } catch ({ message }) {
    dispatch(fetchAllAccountTransactionsActionFail(message));
  }
};
