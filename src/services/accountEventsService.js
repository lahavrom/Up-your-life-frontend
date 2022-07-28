import { accountEventsClient } from "../clients";
import handleError from "../helpers/errorHandler";

import { STORAGE_KEYS } from "../helpers/constants";

const submitAccountEvent = async (values) => {
  try {
    const { data } = await accountEventsClient.post("", values);
    return data;
  } catch (error) {
    throw handleError(error);
  }
};

const fetchAllAccountEvents = async (uId) => {
  try {
    const { data } = await accountEventsClient.get(`${uId}`, {
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
  submitAccountEvent,
  fetchAllAccountEvents,
};
