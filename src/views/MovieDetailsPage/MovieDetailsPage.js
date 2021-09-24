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
  const defaultImage =
    `https://image.tmdb.org/t/p/w500/${poster_path || backdrop_path}` ||
    defaultImg;

  return (
    <>
      <article className={s.article}>
        <img className={s.image} src={defaultImage} alt={title} />
        <h3>{title}</h3>
        <Description props={others} />
      </article>

      <section>
        {" "}
        Additional information
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}> Rewiews</Link>
          </li>
        </ul>
      </section>
      <hr />
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
