import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Switch, Route, useParams } from "react-router";
//import shortid from "shortid";
import ApiByID from "../../Api/ApiByID";
import Description from "../../components/Description/Description";
import Reviews from "../Reviews/Reviews";
import Cast from "../Cast/Cast";
import defaultImg from "../../images/nothing.jpg";
import s from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    ApiByID(movieId).then((res) => {
      setMovies(res.data);
    });
  }, []);

  const { poster_path, backdrop_path, title, ...others } = movies;
  const defaultImage = `https://image.tmdb.org/t/p/w500/${
    poster_path || backdrop_path
  }`;

  return (
    <>
      <article className={s.article}>
        <img
          className={s.image}
          src={
            defaultImage === "https://image.tmdb.org/t/p/w500/null"
              ? defaultImg
              : defaultImage
          }
          alt={title}
        />
        <h3 className={s.title}>{title}</h3>
        <Description props={others} />
      </article>

      <section className={s.section}>
        <h3 className={s.title}>Additional information</h3>
        <ul className={s.list}>
          <li className={s.item}>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li className={s.item}>
            <Link to={`/movies/${movieId}/reviews`}> Rewiews</Link>
          </li>
        </ul>
      </section>

      <Switch>
        <Route path="/movies/:movieId/reviews">
          <Reviews />
        </Route>
        <Route path="/movies/:movieId/cast">
          <Cast />
        </Route>
      </Switch>
    </>
  );
}
