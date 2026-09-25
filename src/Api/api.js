import axios from "axios";

const apiFetch = axios.create({
  baseURL: "https://gutendex.com",
  timeout: 10000, // in case if of API call taking more than 10s
});
