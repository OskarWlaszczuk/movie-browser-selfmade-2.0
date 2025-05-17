import { SearchPanel, StyledSearchIcon, Input } from "./styled";

export const Search = () => {

    return (
        <SearchPanel>
            <StyledSearchIcon />
            <Input placeholder="Search for movies.." />
        </SearchPanel>
    );
};