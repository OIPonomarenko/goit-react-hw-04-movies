import { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { Switch, Route, Redirect } from "react-router";

import Navigation from "./components/Navigation/Navigation";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

//=== components
const HomePage = lazy(() => import("./views/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./views/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./views/MovieDetailsPage/MovieDetailsPage")
);

function App() {
  return (
    <>
      <Navigation />

      <Suspense fallback={<div>Loading...</div>}>
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
          <Redirect to="/" />
        </Switch>
      </Suspense>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
