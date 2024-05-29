import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "../Api";
import Loader from "./Loader";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCast = async () => {
      setIsLoading(true);
      try {
        const movieCast = await fetchMovieCredits(movieId);
        setCast(movieCast);
      } catch (error) {
        console.error("Failed to fetch movie cast", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);
  if (cast.length === 0) {
    return <p>No movie details available</p>;
  }
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {cast.map((actor) => (
            <li key={actor.cast_id}>
              <p>Actor name: {actor.name}</p>
              <p>Character: {actor.character}</p>
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
                height={100}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
