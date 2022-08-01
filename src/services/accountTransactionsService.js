import { accountTransactionsClient } from "../clients";
import handleError from "../helpers/errorHandler";
import { getAuthToken } from "../helpers/authTokenUtils";

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
        "x-auth-token": getAuthToken(),
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
