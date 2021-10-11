import { Link, useLocation } from "react-router-dom";
import defaultImg from "../../images/nothing.jpg";
import s from "./MovieCard.module.css";

export default function MovieCard({ movieId, propImage, title }) {
  const location = useLocation();

  const defaultImage = `https://image.tmdb.org/t/p/w500/${propImage}`;

  return (
    <Link
      to={{
        pathname: `/movies/${movieId}`,
        state: { from: location },
      }}
      className={s.link}
    >
      <img
        className={s.movieImg}
        src={propImage === null ? defaultImg : defaultImage}
        alt={title}
      />
      <p className={s.title}>{title}</p>
    </Link>
  );
}
