import axios from "axios";

export default function Api() {
  const BASE_URL = "https://api.themoviedb.org/3/trending/movie/week";
  const API_KEY = "6c880398193815cb8a0c25fae5a3fbe7";

  return axios
    .get(`${BASE_URL}?api_key=${API_KEY}`)
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      console.log("error from json server", error);
    });
}
