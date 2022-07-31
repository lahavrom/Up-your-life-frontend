import ACTION_TYPES from "./constants/actionTypes";
import fixedEventsService from "../../../services/fixedEventsService";

const fetchAllFixedTransactionsAction = () => ({
  type: ACTION_TYPES.FETCH_ALL_FIXED_TRANSACTIONS,
});

const fetchAllFixedTransactionsActionSuccess = (transactions) => ({
  type: ACTION_TYPES.FETCH_ALL_FIXED_TRANSACTIONS_SUCCESS,
  payload: {
    transactions,
  },
});

const fetchAllFixedTransactionsActionFail = (errorMessage) => ({
  type: ACTION_TYPES.FETCH_ALL_FIXED_TRANSACTIONS_FAIL,
  payload: {
    errorMessage,
  },
});

export const fetchAllFixedTransactions = () => async (dispatch, getState) => {
  const { accountId } = getState().usersState.user;
  try {
    dispatch(fetchAllFixedTransactionsAction());
    const transactions = await fixedEventsService.fetchAllFixedEvents(
      accountId
    );
    dispatch(fetchAllFixedTransactionsActionSuccess(transactions));
  } catch ({ message }) {
    dispatch(fetchAllFixedTransactionsActionFail(message));
  }
};
