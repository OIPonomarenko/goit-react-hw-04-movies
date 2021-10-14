import shortid from "shortid";
import { StyledList } from "./StyledList";
import MovieCard from "../MovieCard/MovieCard";



export default function MovieList({movies}) {
    return (
            <StyledList>
                    {movies &&
                        movies.map((movie) => {
                        const { id, title, poster_path, backdrop_path } = movie;

                        return (
                            <li key={shortid.generate()}>
                            <MovieCard
                                movieId={id}
                                propImage={poster_path || backdrop_path}
                                title={title}
                            />
                            </li>
                        );
                        })}
            </StyledList>
    )
}

