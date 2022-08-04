const AUTH_TOKEN = "AUTH_TOKEN";

export const setAuthToken = (token) => {
  sessionStorage.setItem(AUTH_TOKEN, token);
};

export const getAuthToken = () => {
  return sessionStorage.getItem(AUTH_TOKEN);
};

export const removeAuthToken = () => {
  sessionStorage.removeItem(AUTH_TOKEN);
};
