import { usersClient } from "../clients";
import handleError from "../helpers/errorHandler";

import { STORAGE_KEYS } from "../helpers/constants";

const registerUser = async (values) => {
  try {
    const { headers, data } = await usersClient.post("/register", values);
    return {
      token: headers["x-auth-token"],
      user: data,
    };
  } catch (error) {
    throw handleError(error);
  }
};

const loginUser = async (values) => {
  try {
    const { headers, data } = await usersClient.post("/login", values);
    return {
      token: headers["x-auth-token"],
      user: data,
    };
  } catch (error) {
    throw handleError(error);
  }
};

const fetchUser = async () => {
  try {
    const { data } = await usersClient.get("/me", {
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
  registerUser,
  loginUser,
  fetchUser,
};
