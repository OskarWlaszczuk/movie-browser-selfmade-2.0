import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Movies } from "../../features/ListPage/Movies";
import { NavigationPanel } from "./components/NavigationPanel";
import { routes } from "../../common/functions/routes";
import { People } from "../../features/ListPage/People";

export const App = () => {
  return (
    <HashRouter>
      <NavigationPanel />
      <Routes>
        <Route path={routes.movies()} element={<Movies />} />
        <Route path={routes.people()} element={<People />} />
        <Route path="/movies/:movieId" element={<></>} />
        <Route path="/people/:personId" element={<></>} />
        <Route path="*" element={<Navigate to={routes.movies()} />} />
      </Routes>
    </HashRouter>
  );
};