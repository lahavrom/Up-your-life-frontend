import { ERROR_MESSAGES } from "./constants";

const handleError = (error) => {
  console.error(error);
  const message = error.response?.data?.message
    ? error.response.data.message
    : ERROR_MESSAGES.DEFAULT;
  return new Error(message);
};

export default handleError;
