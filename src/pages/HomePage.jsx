import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../Api";
import MovieList from "../components/MovieList";
import Loader from "../components/Loader";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const trendingMovies = await fetchTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        console.error("Failed to fetch trending movies", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      {isLoading ? <Loader /> : <MovieList movies={movies} />}
    </div>
  );
}
