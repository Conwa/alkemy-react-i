import axios from "axios";

const baseUrl = "http://localhost:3000/favouriteElemIDs";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const appendElement = async (id) => {
  const objectId = { id: id };
  const response = await axios.post(baseUrl, objectId);
  return response.data;
};

const deleteElement = async (idToDelete) => {
  const objectId = idToDelete;

  const request = axios.delete(`${baseUrl}/${objectId}`);
  return request.then((response) => response.data);
};

export default {
  getAll,
  appendElement,
  deleteElement,
};
