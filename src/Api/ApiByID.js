import axios from "axios";

export default function ApiByID(movie_id) {
  const BASE_URL = "https://api.themoviedb.org/3/movie";
  const API_KEY = "6c880398193815cb8a0c25fae5a3fbe7";

  return axios
    .get(`${BASE_URL}/${movie_id}?api_key=${API_KEY}&language=en-US`)
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      console.log("error from json server", error);
    });
}
