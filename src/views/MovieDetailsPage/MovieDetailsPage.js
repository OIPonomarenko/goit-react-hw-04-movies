//=== base
import { useEffect, useState, lazy, Suspense } from "react";
import { useHistory, useLocation, NavLink } from "react-router-dom";
import { Switch, Route, useParams, useRouteMatch } from "react-router";

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
  const [query, setQuery] = useState([]);
  const [movies, setMovies] = useState([]);

  const history = useHistory();
  const location = useLocation();
  const { url, path } = useRouteMatch();
  const { movieId } = useParams();

  useEffect(() => {
    ApiByID(movieId).then((res) => {
      setMovies(res.data);
      setQuery(location.state.from.search);
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
              <NavLink
                to={{
                  pathname: `${url}/cast`,
                  state: {
                    from: {
                      ...location,
                      pathname: location.state.from.pathname,
                      search: query,
                    },
                  },
                }}
              >
                {" "}
                Cast{" "}
              </NavLink>
            </li>
            <li className={s.item}>
              <NavLink
                to={{
                  pathname: `${url}/reviews`,
                  state: {
                    from: {
                      ...location,
                      pathname: location.state.from.pathname,
                      search: query,
                    },
                  },
                }}
              >
                {" "}
                Rewiews{" "}
              </NavLink>
            </li>
          </ul>
        </div>
      </section>

      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path={`${path}/reviews`}>
            <Reviews />
          </Route>
          <Route path={`${path}/cast`}>
            <Cast />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
