import normalizeData from "../../utils/normalizeData";

import s from "./ReviewsDescription.module.css";

export default function ReviewsDescr({ props }) {
  const { author, author_details, content, created_at } = props;

  return (
    <>
      <img src={author_details.avatar_path} alt="" />
      <ul className={s.description}>
        <li className={s.item}>
          Написано {author} {normalizeData(created_at)}
        </li>
        <li className={s.item}>
          <p className={s.info}> {content} </p>
        </li>
      </ul>
    </>
  );
}
