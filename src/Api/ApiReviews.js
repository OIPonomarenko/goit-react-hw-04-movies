import axios from "axios";

export default function ApiReviews(movieId) {
  const BASE_URL = "https://api.themoviedb.org/3/movie";
  const API_KEY = "6c880398193815cb8a0c25fae5a3fbe7";

  return axios
    .get(
      `${BASE_URL}/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      console.log("error from json server", error);
    });
}
