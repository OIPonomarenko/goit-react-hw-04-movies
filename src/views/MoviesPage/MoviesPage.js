import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import shortid from "shortid";
import ApiByName from "../../Api/ApiByName";
import s from "./MoviePage.module.css";
import defaultImg from "../../images/nothing.jpg";

// if I have a time add pagination

export default function MoviesPage() {
  const [movieSearch, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies([]);
  }, []);

  const handleNameChange = (e) => {
    setSearch(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMovies([]);

    ApiByName(movieSearch).then((res) => {
      console.log(res.data.results);
      setMovies(res.data.results);
    });
  };

  return (
    <>
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={handleSubmit}>
          <input
            className={s.SearchFormInput}
            type="text"
            name="movieSearch"
            value={movieSearch}
            onChange={handleNameChange}
            placeholder="Search movie"
          />
          <button type="submit" className={s.SearchFormButton}>
            Search
          </button>
        </form>
      </header>

      <ul className={s.movieList}>
        {movies.map((movie) => {
          const defaultImage = `https://image.tmdb.org/t/p/w500/${
            movie.poster_path || movie.backdrop_path
          }`;

          return (
            <li className={s.movieItem} key={shortid.generate()}>
              <Link to={`/movies/${movie.id}`}>
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
