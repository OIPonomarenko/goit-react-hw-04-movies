import normalizeData from "../../utils/normalizeData";
import PropTypes from "prop-types";
import s from "./ReviewsDescription.module.css";

export default function ReviewsDescr({ props }) {
  const { author, content, created_at } = props;

  return (
    <ul className={s.description}>
      <li className={s.item}>
        Написано
        <p className={s.author}>{author}</p>
        <span className={s.date}>{normalizeData(created_at)}</span>
      </li>
      <li className={s.item}>
        <p className={s.info}> {content} </p>
      </li>
    </ul>
  );
}

ReviewsDescr.propTypes = {
  author: PropTypes.string,
  author_details: PropTypes.shape({}),
  content: PropTypes.string,
  created_at: PropTypes.string,
};
