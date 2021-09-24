import s from "./Description.module.css";

export default function Description({ props }) {
  const { tagline, release_date, budget, vote_average, overview } = props;

  return (
    <ul className={s.description}>
      <li className={s.item}>
        <span>Tagline:</span>
        <p className={s.info}> {tagline} </p>
      </li>
      <li className={s.item}>
        <span>Release date:</span>
        <p className={s.info}> {release_date} </p>
      </li>
      <li className={s.item}>
        <span>Budget:</span>
        <p className={s.info}> {budget} </p>
      </li>
      <li className={s.item}>
        <span>Vote Average:</span>
        <p className={s.info}>{vote_average} </p>
      </li>
      <li className={s.item}>
        <span> Overview:</span>
        <p className={s.info}> {overview} </p>
      </li>
    </ul>
  );
}
