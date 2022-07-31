import { fixedTransactionsClient } from "../clients";
import handleError from "../helpers/errorHandler";

import { STORAGE_KEYS } from "../helpers/constants";

const submitFixedTransaction = async (values) => {
  try {
    const { data } = await fixedTransactionsClient.post("", values);
    return data;
  } catch (error) {
    throw handleError(error);
  }
};

const fetchAllFixedTransactions = async (accountId) => {
  try {
    const { data } = await fixedTransactionsClient.get(`${accountId}`, {
      headers: {
        "x-auth-token": localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN),
      },
    });
    return data;
  } catch (error) {
    throw handleError(error);
  }
};

export default {
  submitFixedTransaction,
  fetchAllFixedTransactions,
};
