import { useEffect, useState } from "react";
import { useParams } from "react-router";
import shortid from "shortid";
import { ApiReviews } from "../../Api/Api";
import ReviewsDescr from "../../components/ReviewsDescr/ReviewsDescr";
import s from "./Reviews.module.css";

export default function Reviews() {
  const [reviews, setReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    ApiReviews(movieId).then((res) => {
      setReview(res.data.results);
    });
  }, []);

  return (
    <ul className={s.list}>
      {reviews.length !== 0 ? (
        reviews.map((review) => {
          return (
            <li className={s.item} key={shortid.generate()}>
              <ReviewsDescr props={review} />
            </li>
          );
        })
      ) : (
        <p>Reviews not found</p>
      )}
    </ul>
  );
}
