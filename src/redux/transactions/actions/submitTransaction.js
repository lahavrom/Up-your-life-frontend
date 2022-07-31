import _ from "lodash";

import ACTION_TYPES from "./constants/actionTypes";
import fixedTransactionsService from "../../../services/fixedTransactionsService";
import accountTransactionsService from "../../../services/accountTransactionsService";
import { SUCCESS_MESSAGES } from "../../../helpers/constants";

const submitTransactionAction = () => ({
  type: ACTION_TYPES.SUBMIT_TRANSACTION,
});

const submitFixedTransactionActionSuccess = (transaction) => ({
  type: ACTION_TYPES.SUBMIT_FIXED_TRANSACTION_SUCCESS,
  payload: {
    transaction,
    successMessage: SUCCESS_MESSAGES.SUBMIT_TRANSACTION,
  },
});

const submitAccountTransactionActionSuccess = (transaction) => ({
  type: ACTION_TYPES.SUBMIT_ACCOUNT_TRANSACTION_SUCCESS,
  payload: {
    transaction,
    successMessage: SUCCESS_MESSAGES.SUBMIT_TRANSACTION,
  },
});

const submitTransactionActionFail = (errorMessage) => ({
  type: ACTION_TYPES.SUBMIT_TRANSACTION_FAIL,
  payload: { errorMessage },
});

export const submitTransaction =
  (type, values) => async (dispatch, getState) => {
    const { accountId, userId } = getState().usersState.user;
    try {
      dispatch(submitTransactionAction());
      const transaction = createTransaction(type, values, accountId, userId);
      const newTransaction = values.isFixed
        ? await fixedTransactionsService.submitFixedTransaction(transaction)
        : await accountTransactionsService.submitAccountTransaction(
            transaction
          );
      values.isFixed
        ? dispatch(submitFixedTransactionActionSuccess(newTransaction))
        : dispatch(submitAccountTransactionActionSuccess(newTransaction));
    } catch ({ message }) {
      dispatch(submitTransactionActionFail(message));
    }
  };

function createTransaction(type, values, accountId, userId) {
  const transaction = {
    accountId,
    userId,
    type,
    ..._.pick(values, ["category", "description", "value"]),
  };
  const { dayOfMonth, effectiveDate } = values;
  return values.isFixed
    ? { ...transaction, dayOfMonth }
    : { ...transaction, effectiveDate };
}
