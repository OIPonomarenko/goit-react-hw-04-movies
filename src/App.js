import Navigation from "./components/Navigation/Navigation";
import "./App.css";
import { Switch, Route } from "react-router";

import HomePage from "./views/HomePage/HomePage";
import MoviesPage from "./views/MoviesPage/MoviesPage";
import MovieDetailsPage from "./views/MovieDetailsPage/MovieDetailsPage";
import NotFound from "./views/NotFound/NotFound";

function App() {
  return (
    <>
      <Navigation />

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/movies">
          <MoviesPage />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
