import axios from "axios";

const API_KEY = import.meta.env.VITE_MOVIES_API_KEY;

const headers = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const getAll = async (url) => {
  const request = axios.get(`${url}`, headers);
  const response = await request;
  return response.data.results;
};
const getByID = async (url) => {
  const request = axios.get(`${url}`, headers);
  const response = await request;
  return response.data;
};

export default { getAll, getByID };
