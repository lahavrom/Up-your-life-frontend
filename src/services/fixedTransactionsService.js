import { fixedTransactionsClient } from "../clients";
import handleError from "../helpers/errorHandler";
import { getAuthToken } from "../helpers/authTokenUtils";

// submit
const submitFixedTransaction = async (values) => {
  try {
    const { data } = await fixedTransactionsClient.post("", values, {
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
const editFixedTransaction = async (id, values) => {
  try {
    await fixedTransactionsClient.put(`${id}`, values, {
      headers: {
        "x-auth-token": getAuthToken(),
      },
    });
  } catch (error) {
    throw handleError(error);
  }
};

// delete
const deleteFixedTransaction = async (id) => {
  try {
    await fixedTransactionsClient.patch(
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
const fetchAllFixedTransactions = async (accountId) => {
  try {
    const { data } = await fixedTransactionsClient.get(`${accountId}`, {
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
  submitFixedTransaction,
  editFixedTransaction,
  deleteFixedTransaction,
  fetchAllFixedTransactions,
};
