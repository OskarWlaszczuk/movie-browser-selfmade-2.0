import { useLocation } from "react-router-dom";
import { SearchPanel, StyledSearchIcon, Input } from "./styled";
import { useReplaceQueryParameter } from "../../../../../common/hooks/useReplaceQueryParameter";
import { URL_QUERY_PARAM_KEYS } from "../../../../../common/constants/URL_QUERY_PARAM_KEYS";
import { UrlQueryKeyValuePair } from "../../../../../common/aliases/interfaces/UrlQueryKeyValuePair";
import { useURLQueryParams } from "../../../../../common/hooks/useURLQueryParams";
import { getURLPath } from "../../../../../common/functions/getURLPath";
import { useRef } from "react";

export const Search = () => {
    const { pathname } = useLocation();
    const { search } = useURLQueryParams();
    const inputRef = useRef<HTMLInputElement>(null);

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

    const handleContainerClick = () => {
        inputRef.current?.focus();
    };

    return (
        <SearchPanel onClick={handleContainerClick}>
            <StyledSearchIcon />
            <Input
                ref={inputRef}
                type="text"
                name="search"
                placeholder={`Search for ${searchEntityType}..`}
                onChange={onInputChange}
                value={search}
            />
        </SearchPanel>
    );
};