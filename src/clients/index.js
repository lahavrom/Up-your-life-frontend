import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const usersClient = axios.create({
  baseURL: `${BACKEND_URL}/users`,
});

const accountsClient = axios.create({
  baseURL: `${BACKEND_URL}/accounts`,
});

const accountTransactionsClient = axios.create({
  baseURL: `${BACKEND_URL}/account-transactions`,
});

const fixedTransactionsClient = axios.create({
  baseURL: `${BACKEND_URL}/fixed-transactions`,
});

export {
  usersClient,
  accountsClient,
  accountTransactionsClient,
  fixedTransactionsClient,
};
