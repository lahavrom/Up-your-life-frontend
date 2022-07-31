import axios from "axios";

const usersClient = axios.create({
  baseURL: "http://localhost:3001/users",
});

const accountTransactionsClient = axios.create({
  baseURL: "http://localhost:3001/account-transactions",
});

const fixedTransactionsClient = axios.create({
  baseURL: "http://localhost:3001/fixed-transactions",
});

export { usersClient, accountTransactionsClient, fixedTransactionsClient };
