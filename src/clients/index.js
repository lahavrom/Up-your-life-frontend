import axios from "axios";

const usersClient = axios.create({
  baseURL: "http://localhost:3001/users",
});

const accountEventsClient = axios.create({
  baseURL: "http://localhost:3001/account-events",
});

const fixedEventsClient = axios.create({
  baseURL: "http://localhost:3001/fixed-events",
});

export { usersClient, accountEventsClient, fixedEventsClient };
