import { useLocation } from "react-router-dom";
import { SearchPanel, StyledSearchIcon, Input } from "./styled";
import { routes } from "../../../../../common/functions/routes";
import { useReplaceQueryParameter } from "../../../../../common/hooks/useReplaceQueryParameter";
import { QUERY_PARAM_KEYS } from "../../../../../common/constants/QUERY_PARAM_KEYS";
import { QueryParams } from "../../../../../common/aliases/interfaces/QueryParams";
import { useQueryParameter } from "../../../../../common/hooks/useQueryParameter";

export const Search = () => {
    const { pathname } = useLocation();
    const searchCategory = pathname === routes.movies() ? "movies" : "people";

    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = async ({ target }: { target: HTMLInputElement }) => {
        const queryParamsList: QueryParams[] = [
            {
                key: QUERY_PARAM_KEYS.SEARCH,
                value: target.value,
            },
            {
                key: QUERY_PARAM_KEYS.PAGE,
                value: 1,
            },
        ];

        replaceQueryParameter(queryParamsList);
    };

    const { search } = useQueryParameter();


    return (
        <SearchPanel>
            <StyledSearchIcon />
            <Input
                type="text"
                name="search"
                placeholder={`Search for ${searchCategory}..`}
                onChange={onInputChange}
                value={search}
            />
        </SearchPanel>
    );
};