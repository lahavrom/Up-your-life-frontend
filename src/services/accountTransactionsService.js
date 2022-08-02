import { accountTransactionsClient } from "../clients";
import handleError from "../helpers/errorHandler";
import { getAuthToken } from "../helpers/authTokenUtils";

// submit
const submitAccountTransaction = async (values) => {
  try {
    const { data } = await accountTransactionsClient.post("", values, {
      headers: {
        "x-auth-token": getAuthToken(),
      },
    });
    return data;
  } catch (error) {
    throw handleError(error);
  }
};

// edit
const editAccountTransaction = async (id, values) => {
  try {
    await accountTransactionsClient.put(`${id}`, values, {
      headers: {
        "x-auth-token": getAuthToken(),
      },
    });
  } catch (error) {
    throw handleError(error);
  }
};

// delete
const deleteAccountTransaction = async (id) => {
  try {
    await accountTransactionsClient.patch(
      `${id}`,
      { status: "deleted" },
      {
        headers: {
          "x-auth-token": getAuthToken(),
        },
      }
    );
  } catch (error) {
    throw handleError(error);
  }
};

// fetch all
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
  editAccountTransaction,
  deleteAccountTransaction,
  fetchAllAccountTransactions,
};
