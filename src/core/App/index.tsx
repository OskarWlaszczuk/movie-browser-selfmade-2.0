import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Movies } from "../../features/ListPage/components/Movies";
import { NavigationPanel } from "./components/NavigationPanel";
import { routes } from "../../common/functions/routes";
import { People } from "../../features/ListPage/components/People";
import { Movie } from "../../features/DetailsPage/components/Movie";
import { Person } from "../../features/DetailsPage/components/Person";

export const App = () => {
  return (
    <HashRouter>
      <NavigationPanel />
      <Routes>
        <Route path={routes.movies()} element={<Movies />} />
        <Route path={routes.people()} element={<People />} />
        <Route path="/movies/:id" element={<Movie />} />
        <Route path="/people/:id" element={<Person />} />
        <Route path="*" element={<Navigate to={routes.homepage()} />} />
      </Routes>
    </HashRouter>
  );
};