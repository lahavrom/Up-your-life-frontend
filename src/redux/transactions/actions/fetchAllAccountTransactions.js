import ACTION_TYPES from "./constants/actionTypes";
import accountEventsService from "../../../services/accountEventsService";

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
  const { accountId } = getState().usersState.user;
  try {
    dispatch(fetchAllAccountTransactionsAction());
    const transactions = await accountEventsService.fetchAllAccountEvents(
      accountId
    );
    dispatch(fetchAllAccountTransactionsActionSuccess(transactions));
  } catch ({ message }) {
    dispatch(fetchAllAccountTransactionsActionFail(message));
  }
};
