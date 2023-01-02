import { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router";

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
        <Routes>
          <Route exact="true" path="/" element={<HomePage/>}></Route>
          <Route exact="true" path="/movies" element={<MoviesPage/>}></Route>
          <Route path="/movies/:movieId" element={<MovieDetailsPage/>}></Route>
        </Routes>
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
