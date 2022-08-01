import _ from "lodash";

import ACTION_TYPES from "./constants/actionTypes";
import fixedTransactionsService from "../../../services/fixedTransactionsService";
import accountTransactionsService from "../../../services/accountTransactionsService";
import { SUCCESS_MESSAGES } from "../../../helpers/constants";

const editTransactionAction = () => ({
  type: ACTION_TYPES.EDIT_TRANSACTION,
});

const editFixedTransactionActionSuccess = (id, edittedValues) => ({
  type: ACTION_TYPES.EDIT_FIXED_TRANSACTION_SUCCESS,
  payload: {
    id,
    edittedValues,
    successMessage: SUCCESS_MESSAGES.EDIT_TRANSACTION,
  },
});

const editAccountTransactionActionSuccess = (id, edittedValues) => ({
  type: ACTION_TYPES.EDIT_ACCOUNT_TRANSACTION_SUCCESS,
  payload: {
    id,
    edittedValues,
    successMessage: SUCCESS_MESSAGES.EDIT_TRANSACTION,
  },
});

const editTransactionActionFail = (errorMessage) => ({
  type: ACTION_TYPES.EDIT_TRANSACTION_FAIL,
  payload: { errorMessage },
});

export const editTransaction = (id, values) => async (dispatch) => {
  try {
    dispatch(editTransactionAction());
    const transaction = createEditedTransaction(values);
    if (values.isFixed) {
      await fixedTransactionsService.editFixedTransaction(id, transaction);
      dispatch(editFixedTransactionActionSuccess(id, transaction));
    } else {
      await accountTransactionsService.editAccountTransaction(id, transaction);
      dispatch(editAccountTransactionActionSuccess(id, transaction));
    }
  } catch ({ message }) {
    dispatch(editTransactionActionFail(message));
  }
};

function createEditedTransaction(values) {
  const transaction = _.pick(values, ["category", "description", "value"]);
  const { dayOfMonth, effectiveDate } = values;
  return values.isFixed
    ? { ...transaction, dayOfMonth }
    : { ...transaction, effectiveDate };
}
