//=== base
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import shortid from "shortid";

//=== static components
import { ApiMain } from "../../Api/Api";

//=== styles and utils
import {Button, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from "./HomePage.module.css";
import MovieCard from "../../components/MovieCard/MovieCard";

export default function HomePage() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const prevMovies = useRef();

  useEffect(() => {
    ApiMain(page).then((res) => {
      prevMovies.current = res.data.results;

      movies.length === 0
        ? setMovies(prevMovies.current)
        : setMovies((movies) => [...movies, ...prevMovies.current]);
    });
  }, [page]);

  const clickOnLoad = () => {
    setPage((page) => page + 1);
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };



  return (
    <section className={s.popularListSector}>
      <Container className={s.movieListContainer} >
      <h3 className={s.Heading}> Popular movies </h3>
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
       <Button type="button" variant="outline-secondary" className='mr-2 ' onClick={clickOnLoad}>Load More
      </Button>
    </Container>
    </section>
  );
}
