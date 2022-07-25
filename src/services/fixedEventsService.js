import { fixedEventsClient } from "../clients";
import handleError from "../helpers/errorHandler";

// values -> uId, type, value, description, dayOfMonth
const submitFixedEvent = async (values) => {
  try {
    const { data } = await fixedEventsClient.post("", values);
    return data;
  } catch (error) {
    throw handleError(error);
  }
};

const fetchAllFixedEvents = async (uId) => {
  try {
    const { data } = await fixedEventsClient.get(`${uId}`);
    return data;
  } catch (error) {
    throw handleError(error);
  }
};

export default {
  submitFixedEvent,
  fetchAllFixedEvents,
};
