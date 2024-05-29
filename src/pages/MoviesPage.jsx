import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";
import MovieList from "../components/MovieList";
import Loader from "../components/Loader";
import { fetchMoviesByQuery } from "../Api";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [params, setParams] = useSearchParams();

  const getUrlParams = params.get("query") ?? "";
  const handleSubmit = async (query) => {
    setParams({ query });
    setError(null);
  };
  useEffect(() => {
    const fetchData = async () => {
      if (!getUrlParams) return;

      try {
        setIsLoading(true);
        const results = await fetchMoviesByQuery(getUrlParams);
        setMovies(results);

        if (results.length === 0) {
          setError(true);
        } else {
          setError(null);
        }
      } catch (error) {
        console.error("Failed to fetch movies", error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [getUrlParams, setParams]);

  return (
    <div>
      <SearchForm handleSubmit={handleSubmit} />
      {isLoading ? <Loader /> : <MovieList movies={movies} />}
      {error && <p>{"No films on your request! Try another one!"}</p>}
    </div>
  );
}
