import { accountEventsClient } from "../clients";
import handleError from "../helpers/errorHandler";

// values -> uId, type, value, description
const submitAccountEvent = async (values) => {
  try {
    const { data } = await accountEventsClient.post("", values);
    return data;
  } catch (error) {
    throw handleError(error);
  }
};

export default {
  submitAccountEvent,
};
