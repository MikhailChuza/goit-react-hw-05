import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTAwZmRiY2M2ZjFiNDIyYmRmMzA2NDFiNmVjNmI3YSIsInN1YiI6IjY2NTcxNGY1NzY2NmZiNmYzYjZiZjRmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UcVgQd3qSNJBJ206KVWYui8BIFY4Qv-L3WG-AGm4rBM";
const BASE_URL = "https://api.themoviedb.org/3";

axios.defaults.headers.common["Authorization"] = `Bearer ${API_KEY}`;

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`);

  return response.data.results;
};

export const fetchMoviesByQuery = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      query,
      include_adult: true,
      language: "en-US",
      page: 1,
    },
  });
  return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}`);
  return response.data;
};

export const fetchMovieCredits = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`);
  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`);
  return response.data.results;
};

