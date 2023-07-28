import axios from "axios";

const headers = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTc1ZGM4ODhmZjI0NDllNGRiMTcwYzNjNzU5NDZiNyIsInN1YiI6IjY0YzQxZDJmZWVjNWI1MDEzOWZlZGU2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-9MnsRuDb4mC5SozRBzW7Aqwo2twIhTg9xSFgzV78qM",
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
