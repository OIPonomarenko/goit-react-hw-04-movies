import { Link, useLocation } from "react-router-dom";
import defaultImg from "../../images/nothing.jpg";
import s from "./MovieCard.module.css";
import { StyledTitle } from "./StyledTitle";

export default function MovieCard({ movieId, propImage, title }) {
  const location = useLocation();

  const defaultImage = `https://image.tmdb.org/t/p/w500/${propImage}`;

  return (
    <Link
      to={{
        pathname: `/movies/${movieId}`,
        state: { from: location },
      }}
      className="shadowLink"
    >
      <img
        className={s.movieImg}
        src={propImage === null ? defaultImg : defaultImage}
        alt={title}
      />
      <StyledTitle>{title}</StyledTitle>
    </Link>
  );
}
