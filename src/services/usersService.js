import { usersClient } from "../clients";
import handleError from "../helpers/errorHandler";

// values -> firstName, lastName, email, password
const registerUser = async (values) => {
  try {
    const { data } = await usersClient.post("/register", values);
    return data;
  } catch (error) {
    throw handleError(error);
  }
};

// values -> email, password
const loginUser = async (values) => {
  try {
    const { data } = await usersClient.post("/login", values);
    return data;
  } catch (error) {
    throw handleError(error);
  }
};

export default {
  registerUser,
  loginUser,
};
