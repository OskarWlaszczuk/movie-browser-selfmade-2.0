import { HashRouter, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <HashRouter>
      <Routes>
        {/* <Route path={toMoviesSearch()} element={<SearchProcess />} />
        <Route path={toActorSearch()} element={<SearchProcess />} />
        <Route path={toMovie()} element={<MovieDetailsPage />} />
        <Route path={toPerson()} element={<ActorsData />} />
        <Route path={toMoviesList()} element={<MoviesListPage />} />
        <Route path={toActorsList()} element={<ActorsList />} />
        <Route path="*" element={<Navigate to={toMoviesList()} />} /> */}
      </Routes>
    </HashRouter>
  );
};