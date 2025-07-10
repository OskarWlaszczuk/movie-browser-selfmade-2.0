import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import {Movies} from "../../features/ListPage/components/Movies";
import {NavigationPanel} from "./components/NavigationPanel";
import {listRoutes} from "../../common/functions/routes";
import {People} from "../../features/ListPage/components/People";
import {Movie} from "../../features/DetailsPage/components/Movie";
import {Person} from "../../features/DetailsPage/components/Person";
import {Person2} from "../../features/DetailsPage/components/Person2";
import {Movie2} from "../../features/DetailsPage/components/Movie2";

export const App = () => {
  return (
    <HashRouter>
      <NavigationPanel />
      <Routes>
        <Route path={listRoutes.movies} element={<Movies />} />
        <Route path={listRoutes.people} element={<People />} />
        <Route path="/movies/:id" element={<Movie />} />
        <Route path="/people/:id" element={<Person />} />
        <Route path="/:job/:id/:genre?" element={<Person2 />} />
        <Route path="/movie/:id/:tabCategory?" element={<Movie2 />} />
        <Route path="*" element={<Navigate to={listRoutes.movies} />} />
      </Routes>
    </HashRouter>
  );
};