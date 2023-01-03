//=== base
import { useEffect, useState, lazy, Suspense } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { Routes, Route, useParams } from "react-router";

//=== static components
import { ApiByID } from "../../Api/Api";
import Description from "../../components/Description/Description";

//=== styles and utils
import defaultImg from "../../images/nothing.jpg";
import s from "./MovieDetailsPage.module.css";

//=== dynamic component
const Reviews = lazy(() => import("../Reviews/Reviews"));
const Cast = lazy(() => import("../Cast/Cast"));

export default function MovieDetailsPage() {
  const [query, setQuery] = useState([]);
  const [movies, setMovies] = useState([]);

  const history = useNavigate();
  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    ApiByID(movieId).then((res) => {
      setMovies(res.data);
     // setQuery(location.state.from.search);
    });
  },[]);

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

      <section className={s.addInfo}>
        <div className={s.container}>
          <h3 className={s.title}>Additional information</h3>
          {/*<ul className={s.list}>*/}
          {/*  <li className={s.item}>*/}
          {/*    <NavLink*/}
          {/*      to={{*/}
          {/*        pathname: `cast`,*/}
          {/*        state: {*/}
          {/*          from: {*/}
          {/*            ...location,*/}
          {/*            pathname: location.state.from.pathname,*/}
          {/*            search: query,*/}
          {/*          },*/}
          {/*        },*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      {" "}*/}
          {/*      Cast{" "}*/}
          {/*    </NavLink>*/}
          {/*  </li>*/}
          {/*  <li className={s.item}>*/}
          {/*    <NavLink*/}
          {/*      to={{*/}
          {/*        pathname: `reviews`,*/}
          {/*        state: {*/}
          {/*          from: {*/}
          {/*            ...location,*/}
          {/*            pathname: location.state.from.pathname,*/}
          {/*            search: query,*/}
          {/*          },*/}
          {/*        },*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      {" "}*/}
          {/*      Rewiews{" "}*/}
          {/*    </NavLink>*/}
          {/*  </li>*/}
          {/*</ul>*/}
        </div>
      </section>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={`reviews`} element={<Reviews/>}></Route>
          <Route path={`cast`} element={<Cast/>}></Route>
        </Routes>
      </Suspense>
    </>
  );
}
