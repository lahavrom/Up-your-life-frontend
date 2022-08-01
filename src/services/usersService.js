import { usersClient } from "../clients";
import handleError from "../helpers/errorHandler";
import { getAuthToken } from "../helpers/authTokenUtils";

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
        "x-auth-token": getAuthToken(),
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
