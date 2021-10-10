//=== base
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import shortid from "shortid";

//=== static components
import { ApiMain } from "../../Api/Api";

//=== styles and utils
import s from "./HomePage.module.css";
import MovieCard from "../../components/MovieCard/MovieCard";

export default function HomePage() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const prevMovies = useRef();

  useEffect(() => {
    ApiMain().then((res) => {
      prevMovies.current = res.data.results;

      movies.length === 0
        ? setMovies(prevMovies.current)
        : setMovies((movies) => [...movies, ...prevMovies.current]);
    });
  }, []);

  return (
    <>
      <h3 className={s.Heading}> Trending today </h3>
      <ul className={s.movieList}>
        {movies &&
          movies.map((movie) => {
            const { id, title, poster_path, backdrop_path } = movie;

            return (
              <li className={s.movieItem} key={shortid.generate()}>
                <MovieCard
                  movieId={id}
                  propImage={poster_path || backdrop_path}
                  title={title}
                />
              </li>
            );
          })}
      </ul>
    </>
  );
}
