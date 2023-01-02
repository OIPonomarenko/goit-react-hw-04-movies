import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";

import { ApiByName } from "../../Api/Api";

import s from "./MoviePage.module.css";
import {Button, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";



export default function MoviesPage() {
  const [movieSearch, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const history = useNavigate();
  const location = useLocation();
  const prevMovies = useRef();

  const urlQuery = new URLSearchParams(location.search).get("query") || null;

  useEffect(() => {
    if (!urlQuery) {
      return;
    }
    
      ApiByName(urlQuery, page)
      .then((res) => {
        if (res.total_results === 0) {
          return toast.error(`No result for "${urlQuery}". Try another movie`);
        }
        else {
          prevMovies.current = res.data.results;
          movies.length === 0
        ? setMovies(prevMovies.current)
        : setMovies((movies) => [...movies, ...prevMovies.current]);       
        }

      })
      .catch(({ message }) => toast.error(message))
  },[page]);

  useEffect(()=> {
    setPage(1)
  }, [urlQuery])

  const handleNameChange = (e) => {
    setSearch(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movieSearch.trim() === '') {
      toast.error(`No result for "${urlQuery}". Try another movie`);
      return 5;  
    }
    setMovies([]);

    history.push({
      ...location,
      search: `query=${movieSearch}`,
    });

    ApiByName(movieSearch).then((res) => {
      setMovies(res.data.results);
    });
  };

  const clickOnLoad = () => {
    setPage((page) => page + 1);
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className={s.popularListSector}>
      <Container className={s.movieListContainer}>
          <header className={s.Searchbar}>
              <SearchBar query={movieSearch} onSubmit={handleSubmit} onChange={handleNameChange} />
          </header>
          <MovieList movies={movies}/>
          
          <Button type="button" variant="outline-secondary" className='mr-2 ' onClick={clickOnLoad}>Load More
          </Button>
      </Container>
    </section>
  );
}
