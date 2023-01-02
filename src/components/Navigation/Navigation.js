import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => (
  <nav>
    <div className={s.container}>
      <NavLink exact="true" to="/"
               className={({ isActive }) =>
                 isActive ? s.activeLink : s.link
               }
      >
        Home
      </NavLink>
      <NavLink to="/movies"
               className={({ isActive }) =>
                 isActive ? s.activeLink : s.link
               }
      >
        Movie
      </NavLink>
    </div>
  </nav>
);

export default Navigation;
