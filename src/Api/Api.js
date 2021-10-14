import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "6c880398193815cb8a0c25fae5a3fbe7";

const ApiMain = (page) => {
  return axios
    .get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=${page}`)
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      console.log("error from json server", error);
    });
};

const ApiByID = (movie_id) => {
  return axios
    .get(`${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`)
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      console.log("error from json server", error);
    });
};

const ApiByName = (keyWord, page) => {
  return axios
    .get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${keyWord}&language=en-US&page=${page}`
    )
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      console.log("error from json server", error);
    });
};

const ApiCast = (movieId) => {
  return axios
    .get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    )
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      console.log("error from json server", error);
    });
};

const ApiReviews = (movieId) => {
  return axios
    .get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      console.log("error from json server", error);
    });
};

export { ApiMain, ApiByID, ApiByName, ApiCast, ApiReviews };
