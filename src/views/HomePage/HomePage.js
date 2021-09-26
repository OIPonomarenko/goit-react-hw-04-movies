//=== base
import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import shortid from "shortid";

//=== static components
import { ApiMain } from "../../Api/Api";

//=== styles and utils
import s from "./HomePage.module.css";
import defaultImg from "../../images/nothing.jpg";

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
            const defaultImage = `https://image.tmdb.org/t/p/w500/${
              movie.poster_path || movie.backdrop_path
            }`;

            return (
              <li className={s.movieItem} key={shortid.generate()}>
                <Link
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: { from: location },
                  }}
                >
                  <img
                    className={s.movieImg}
                    src={
                      defaultImage === "https://image.tmdb.org/t/p/w500/null"
                        ? defaultImg
                        : defaultImage
                    }
                    alt={movie.title}
                  />
                  <p className={s.title}>{movie.title}</p>
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}
