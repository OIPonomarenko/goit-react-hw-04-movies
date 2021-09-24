import axios from "axios";

export default function ApiByName(keyWord) {
  const BASE_URL = "https://api.themoviedb.org/3/search/movie";
  const API_KEY = "6c880398193815cb8a0c25fae5a3fbe7";

  return axios
    .get(`${BASE_URL}?api_key=${API_KEY}&query=${keyWord}&language=en-US`)
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      console.log("error from json server", error);
    });
}
