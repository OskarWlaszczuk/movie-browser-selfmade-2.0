import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { GenresList } from "../../common/components/GenresList";
import { Movies } from "../../features/ListPage/Movies";
import { NavigationPanel } from "./components/NavigationPanel";
import { ROUTES, toListPage } from "../../common/functions/routes";
import { People } from "../../features/ListPage/People";

export const App = () => {
  return (
    // <HashRouter>
    //   <Routes>
    //     {/* <Route path={toMoviesSearch()} element={<SearchProcess />} />
    //     <Route path={toActorSearch()} element={<SearchProcess />} />
    //     <Route path={toMovie()} element={<MovieDetailsPage />} />
    //     <Route path={toPerson()} element={<ActorsData />} />
    //     <Route path={toMoviesList()} element={<MoviesListPage />} />
    //     <Route path={toActorsList()} element={<ActorsList />} />
    //     <Route path="*" element={<Navigate to={toMoviesList()} />} /> */}
    //   </Routes>
    // </HashRouter>
    <HashRouter>
      <NavigationPanel />
      <Routes>
        <Route path={ROUTES.list.movies} element={<Movies />} />
        <Route path={ROUTES.list.people} element={<People />} />
        <Route path="*" element={<Navigate to={ROUTES.list.movies} />} />
      </Routes>
    </HashRouter>
  );
};