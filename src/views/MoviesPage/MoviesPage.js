import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useHistory, useLocation } from "react-router-dom";
import shortid from "shortid";
import { ApiByName } from "../../Api/Api";

import s from "./MoviePage.module.css";

import MovieCard from "../../components/MovieCard/MovieCard";

// if I have a time add pagination

export default function MoviesPage() {
  const [movieSearch, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const history = useHistory();
  const location = useLocation();

  const urlQuery = new URLSearchParams(location.search).get("query") || null;

  useEffect(() => {
    if (!urlQuery) {
      return;
    }

    ApiByName(urlQuery)
      .then((response) => {
        if (response.total_results === 0) {
          return toast.error(`No result for "${urlQuery}". Try another movie`);
        }
        setMovies([...response.data.results]);
      })
      .catch(({ message }) => toast.error(message));
  }, []);

  const handleNameChange = (e) => {
    setSearch(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMovies([]);

    history.push({
      ...location,
      search: `query=${movieSearch}`,
    });

    ApiByName(movieSearch).then((res) => {
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
