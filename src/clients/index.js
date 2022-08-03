import axios from "axios";

const API_URL = "http://localhost:3001";

const usersClient = axios.create({
  baseURL: `${API_URL}/users`,
});

const accountsClient = axios.create({
  baseURL: `${API_URL}/accounts`,
});

const accountTransactionsClient = axios.create({
  baseURL: `${API_URL}/account-transactions`,
});

const fixedTransactionsClient = axios.create({
  baseURL: `${API_URL}/fixed-transactions`,
});

export {
  usersClient,
  accountsClient,
  accountTransactionsClient,
  fixedTransactionsClient,
};
