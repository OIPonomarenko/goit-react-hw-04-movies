import { Link } from "react-router-dom";
import defaultImage from "../../images/nothing.jpg";

export default function NotFound() {
  return (
    <Link
      to={{
        pathname: `/`,
      }}
    >
      <img src={defaultImage} alt="Page not found" />
    </Link>
  );
}
