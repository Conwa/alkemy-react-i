import axios from "axios";

const API_KEY = import.meta.env.VITE_MOVIES_API_KEY;
console.log(API_KEY);

const headers = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const getList = async () => {
  const request = axios.get(
    "https://api.themoviedb.org/3/discover/movie",
    headers
  );
  const response = await request;
  return response.data.results;
};

export default { getList };
