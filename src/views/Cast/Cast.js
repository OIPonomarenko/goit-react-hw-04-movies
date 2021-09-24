import s from "./Cast.module.css";
import defaultImg from "../../images/nothing.jpg";

import shortid from "shortid";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import ApiCast from "../../Api/ApiCast";
import CastDescription from "../../components/CastDescription/CastDescription";

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    ApiCast(movieId).then((res) => {
      setCast(res.data.cast);
    });
  }, []);

  return (
    <ul className={s.list}>
      {cast &&
        cast.map((person) => {
          const { profile_path, ...others } = person;
          const defaultImage = `https://image.tmdb.org/t/p/w500/${profile_path}`;

          return (
            <li className={s.movieItem} key={shortid.generate()}>
              <img
                className={s.castImg}
                src={
                  defaultImage === "https://image.tmdb.org/t/p/w500/null"
                    ? defaultImg
                    : defaultImage
                }
                alt={person.title}
              />
              <CastDescription props={others} />
            </li>
          );
        })}
    </ul>
  );
}
