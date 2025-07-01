import { useLocation } from "react-router-dom";
import { SearchPanel, StyledSearchIcon, Input } from "./styled";
import { useReplaceQueryParameter } from "../../../../../common/hooks/useReplaceQueryParameter";
import { URL_QUERY_PARAM_KEYS } from "../../../../../common/constants/URL_QUERY_PARAM_KEYS";
import { UrlQueryKeyValuePair } from "../../../../../common/aliases/interfaces/UrlQueryKeyValuePair";
import { useURLQueryParams } from "../../../../../common/hooks/useURLQueryParams";
import { getURLPath } from "../../../../../common/functions/getURLPath";

export const Search = () => {
    const { pathname } = useLocation();
    const { search } = useURLQueryParams();
    const replaceQueryParameter = useReplaceQueryParameter();

    const searchEntityType = getURLPath(pathname);

    const onInputChange = ({ target }: { target: HTMLInputElement }) => {
        const queryParamsList: UrlQueryKeyValuePair[] = [
            {
                key: URL_QUERY_PARAM_KEYS.SEARCH,
                value: target.value,
            },
            {
                key: URL_QUERY_PARAM_KEYS.PAGE,
                value: 1,
            },
        ];

        replaceQueryParameter(queryParamsList);

    };

    return (
        <SearchPanel>
            <StyledSearchIcon />
            <Input
                type="text"
                name="search"
                placeholder={`Search for ${searchEntityType}..`}
                onChange={onInputChange}
                value={search}
            />
        </SearchPanel>
    );
};