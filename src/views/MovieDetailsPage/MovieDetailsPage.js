//=== base
import { useEffect, useState, lazy, Suspense } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Switch, Route, useParams } from "react-router";

//=== static components
import { ApiByID } from "../../Api/Api";
import Description from "../../components/Description/Description";

//=== styles and utils
import defaultImg from "../../images/nothing.jpg";
import s from "./MovieDetailsPage.module.css";

//=== dinamic component
const Reviews = lazy(() => import("../Reviews/Reviews"));
const Cast = lazy(() => import("../Cast/Cast"));

export default function MovieDetailsPage() {
  const history = useHistory();
  const location = useLocation();
  const { movieId } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    ApiByID(movieId).then((res) => {
      setMovies(res.data);
    });
  }, []);

  const onGoBack = () => {
    history.push(location?.state?.from ?? "/");
  };

  const { poster_path, backdrop_path, title, ...others } = movies;
  const defaultImage = `https://image.tmdb.org/t/p/w500/${
    poster_path || backdrop_path
  }`;

  return (
    <>
      <section className={s.section}>
        <button className={s.button} type="button" onClick={onGoBack}>
          Go back
        </button>
        <article className={`${s.article} ${s.container}`}>
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
      </section>

      <section className={s.section}>
        <div className={s.container}>
          <h3 className={s.title}>Additional information</h3>
          <ul className={s.list}>
            <li className={s.item}>
              <Link to={`/movies/${movieId}/cast`}>Cast</Link>
            </li>
            <li className={s.item}>
              <Link to={`/movies/${movieId}/reviews`}> Rewiews</Link>
            </li>
          </ul>
        </div>
      </section>

      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/movies/:movieId/reviews">
            <Reviews />
          </Route>
          <Route path="/movies/:movieId/cast">
            <Cast />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
