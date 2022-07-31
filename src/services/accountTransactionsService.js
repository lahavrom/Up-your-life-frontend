import { accountTransactionsClient } from "../clients";
import handleError from "../helpers/errorHandler";

import { STORAGE_KEYS } from "../helpers/constants";

const submitAccountTransaction = async (values) => {
  try {
    const { data } = await accountTransactionsClient.post("", values);
    return data;
  } catch (error) {
    throw handleError(error);
  }
};

const fetchAllAccountTransactions = async (accountId) => {
  try {
    const { data } = await accountTransactionsClient.get(`${accountId}`, {
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
  submitAccountTransaction,
  fetchAllAccountTransactions,
};
