import Navigation from "./components/Navigation/Navigation";
import "./App.css";
import { Switch, Route } from "react-router";

import HomePage from "./views/HomePage/HomePage";
import MoviesPage from "./views/MoviesPage/MoviesPage";
import NotFound from "./views/NotFound/NotFound";

function App() {
  return (
    <>
      <Navigation />

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/movies">
          <MoviesPage />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
