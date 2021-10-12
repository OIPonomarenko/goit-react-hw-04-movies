import shortid from "shortid";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { ApiCast } from "../../Api/Api";
import CastDescription from "../../components/CastDescription/CastDescription";

//style
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "./responsiveForCarusel";
import s from "./Cast.module.css";
import defaultImg from "../../images/nothing.jpg";

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    ApiCast(movieId).then((res) => {
      setCast(res.data.cast);
    });
  }, []);

  return (
    <Carousel
      responsive={responsive}
      className={s.list}
      swipeable={true}
      autoPlay={true}
      autoPlaySpeed={2000}
    >
      {cast &&
        cast.map((person) => {
          const { profile_path, ...others } = person;
          const defaultImage = `https://image.tmdb.org/t/p/w500/${profile_path}`;

          return (
            <li key={shortid.generate()}>
              <img
                className={s.castImg}
                src={profile_path === null ? defaultImg : defaultImage}
                alt={person.title}
              />
              <CastDescription props={others} />
            </li>
          );
        })}
    </Carousel>
  );
}
