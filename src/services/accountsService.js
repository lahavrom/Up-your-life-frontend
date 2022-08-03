import { accountsClient } from "../clients";
import handleError from "../helpers/errorHandler";
import { getAuthToken } from "../helpers/authTokenUtils";

const fetchAccountUsers = async (accountId) => {
  try {
    const { data } = await accountsClient.get(`/${accountId}/users`, {
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
  fetchAccountUsers,
};
