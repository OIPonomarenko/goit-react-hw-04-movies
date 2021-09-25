import PropTypes from "prop-types";
import s from "./Description.module.css";

export default function Description({ props }) {
  const { tagline, release_date, budget, vote_average, overview } = props;

  return (
    <ul className={s.description}>
      {tagline && (
        <li className={s.item}>
          <span className={s.tag}>Tagline:</span>
          <p className={s.info}> {tagline} </p>
        </li>
      )}
      <li className={s.item}>
        <span className={s.tag}>Release date:</span>
        <p className={s.info}> {release_date} </p>
      </li>
      {budget !== 0 && (
        <li className={s.item}>
          <span className={s.tag}>Budget:</span>
          <p className={s.info}> {budget} </p>
        </li>
      )}
      <li className={s.item}>
        <span className={s.tag}>Vote Average:</span>
        <p className={s.info}>{vote_average} </p>
      </li>
      <li className={s.item}>
        <span className={s.tag}>Overview:</span>
        <p className={s.info}> {overview} </p>
      </li>
    </ul>
  );
}

Description.propTypes = {
  tagline: PropTypes.string,
  release_date: PropTypes.string,
  budget: PropTypes.number,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
};
