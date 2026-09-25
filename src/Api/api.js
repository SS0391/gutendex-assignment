import axios from "axios";

const apiFetch = axios.create({
  baseURL: "https://gutendex.com",
  timeout: 10000, // in case if of API call taking more than 10s
});

export const getBooks = async (page = 1, search = "") => {
  const params = { page };
  if (search) params.search = search;

  const response = await apiFetch.get("/books/", { params });

  console.log("axios", response);
  console.log(response.data);
  console.log("list of books", response.data.results);

  return response.data;
};
