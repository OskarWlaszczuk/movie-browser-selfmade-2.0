import { useLocation } from "react-router-dom";
import { SearchPanel, StyledSearchIcon, Input } from "./styled";
import { routes } from "../../../../../common/functions/routes";

export const Search = () => {
    const { pathname } = useLocation();
    const searchCategory = pathname === routes.movies() ? "movies" : "people";

    return (
        <SearchPanel>
            <StyledSearchIcon />
            <Input placeholder={`Search for ${searchCategory}..`} />
        </SearchPanel>
    );
};