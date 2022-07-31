import { fixedEventsClient } from "../clients";
import handleError from "../helpers/errorHandler";

import { STORAGE_KEYS } from "../helpers/constants";

const submitFixedEvent = async (values) => {
  try {
    const { data } = await fixedEventsClient.post("", values);
    return data;
  } catch (error) {
    throw handleError(error);
  }
};

const fetchAllFixedEvents = async (accountId) => {
  try {
    const { data } = await fixedEventsClient.get(`${accountId}`, {
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
  submitFixedEvent,
  fetchAllFixedEvents,
};
