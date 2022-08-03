import ACTION_TYPES from "./constants/actionTypes";
import fixedTransactionsService from "../../../services/fixedTransactionsService";
import accountTransactionsService from "../../../services/accountTransactionsService";
import { SUCCESS_MESSAGES } from "../../../helpers/constants";

const deleteTransactionAction = () => ({
  type: ACTION_TYPES.DELETE_TRANSACTION,
});

const deleteFixedTransactionActionSuccess = (id) => ({
  type: ACTION_TYPES.DELETE_FIXED_TRANSACTION_SUCCESS,
  payload: { id, successMessage: SUCCESS_MESSAGES.DELETE_TRANSACTION },
});

const deleteAccountTransactionActionSuccess = (id) => ({
  type: ACTION_TYPES.DELETE_ACCOUNT_TRANSACTION_SUCCESS,
  payload: { id, successMessage: SUCCESS_MESSAGES.DELETE_TRANSACTION },
});

const deleteTransactionActionFail = (errorMessage) => ({
  type: ACTION_TYPES.DELETE_TRANSACTION_FAIL,
  payload: { errorMessage },
});

export const deleteTransaction = (id, isFixed) => async (dispatch) => {
  try {
    dispatch(deleteTransactionAction());
    if (isFixed) {
      await fixedTransactionsService.deleteFixedTransaction(id);
      dispatch(deleteFixedTransactionActionSuccess(id));
    } else {
      await accountTransactionsService.deleteAccountTransaction(id);
      dispatch(deleteAccountTransactionActionSuccess(id));
    }
  } catch ({ message }) {
    dispatch(deleteTransactionActionFail(message));
  }
};
