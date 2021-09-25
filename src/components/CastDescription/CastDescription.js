import PropTypes from "prop-types";
import s from "./CastDescription.module.css";

export default function CastDescription({ props }) {
  const { name, popularity, known_for_department } = props;

  return (
    <ul className={s.description}>
      <li className={s.item}>
        <span>Name:</span>
        <p className={s.info}> {name} </p>
      </li>
      <li className={s.item}>
        <span>Genre:</span>
        <p className={s.info}> {known_for_department} </p>
      </li>
      <li className={s.item}>
        <span>Popularity:</span>
        <p className={s.info}> {popularity} </p>
      </li>
    </ul>
  );
}

CastDescription.propTypes = {
  name: PropTypes.string,
  popularity: PropTypes.number,
  known_for_department: PropTypes.string,
};
